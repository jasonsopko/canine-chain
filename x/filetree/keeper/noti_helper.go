package keeper

import (
	"encoding/json"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	notiTypes "github.com/jackal-dao/canine/x/notifications/types"
)

//if bool returns 'true', we successfully notified everyone, otherwise if it's false we return the error
//viewers will have their own message from editors, so should send in a general notification, and a string of viewers or editors

func notify(k msgServer, ctx sdk.Context, recipients string, notification string, sender string, hashPath string, hashPathOwner string) (bool, error) {

	placeholderMap := make([]string, 0, 1000)
	json.Unmarshal([]byte(recipients), &placeholderMap)

	for _, v := range placeholderMap {
		// Find the notiCounter
		notiCounter, found := k.notiKeeper.GetNotiCounter(
			ctx,
			v,
		)

		if !found {
			return false, notiTypes.ErrNotiCounterNotFound
		}

		// Check if the notification already exists. Should always come back false because recipient's notiCounter is incremented everytime someone sends them a msg
		_, isFound := k.notiKeeper.GetNotifications(
			ctx,
			notiCounter.Counter,
			v,
		)
		//If it exists, we return false to return the error
		if isFound {
			return false, notiTypes.ErrNotificationAlreadySet
		}

		//Check if sender is permitted to notify
		if !isSender(notiCounter, sender) {
			return false, notiTypes.ErrCannotAddSenders
		}

		var notifications = notiTypes.Notifications{
			Sender:        sender, //delete this for security?
			Count:         notiCounter.Counter,
			Notification:  notification, //need extra param in MsgPostFile
			Address:       v,            //This will be hashed before it enters the keeper
			HashPath:      hashPath,
			HashPathOwner: hashPathOwner, // this is here because the sender of the file won't always be the owner

		}

		k.notiKeeper.SetNotifications(
			ctx,
			notifications,
		)

		notiCounter.Counter += 1

		k.notiKeeper.SetNotiCounter(
			ctx,
			notiCounter,
		)
	}
	fmt.Println("@@@@@@@@@@@@@@@@@@@@@@@@ Did we make it here?")

	return true, nil

}

func isSender(notiCounter notiTypes.NotiCounter, user string) bool {

	currentSenders := notiCounter.PermittedSenders

	placeholderMap := make([]string, 0, 1000)
	json.Unmarshal([]byte(currentSenders), &placeholderMap)

	for _, v := range placeholderMap {

		if string(v) == user {
			return true
		}
	}
	return false

}
