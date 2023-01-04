package simulation

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"math/rand"
	"strconv"
	"strings"

	sdksim "github.com/cosmos/cosmos-sdk/types/simulation"
	merkle "github.com/wealdtech/go-merkletree"
)

const (
	fileData = "jackal maxi"
)

// Generate random IPv4 url e.g http://1.1.1.1
// It may not be unique
func RandIPv4Url(r *rand.Rand) string {
	b := make([]string, 4)

	for i := 0; i < len(b); i++ {
		b[i] = strconv.Itoa(sdksim.RandIntBetween(r, 0, 255))
	}

	return "http://" + strings.Join(b, ".")
}

// Generate merkle proof with similar operation as jackal provider daemon
// but the file used to generate is much simpler
// Returns json encoding of merkle proof
func GetMerkleProof() (item, jProof string) {
	// The index for the file is 
	f := []byte(fileData)
	var data [][]byte

	h := sha256.New()
	_, err := io.WriteString(h, fmt.Sprintf("%d%x", 0, f))
	if err != nil {
		panic(err)
	}
	hashName := h.Sum(nil)

	data = append(data, hashName)

	tree, err := merkle.New(data)
	if err != nil {
		panic(err)
	}

	// Build proof
	h = sha256.New()
	_, err = io.WriteString(h, fmt.Sprintf("%d%x", 0, f))
	hashedItem := h.Sum(nil)

	proof, err := tree.GenerateProof(hashedItem)
	if err != nil {
		panic(err)
	}

	// Verify that proof is valid
	jproof, err := json.Marshal(proof)
	if err != nil {
		panic(err)
	}

	sHex:= hex.EncodeToString(tree.Root())
	hex, err := hex.DecodeString(sHex)
	if err != nil {
		panic(err)
	}

	validProof, err := merkle.VerifyProof(hashedItem, proof, hex)
	if err != nil {
		panic(err)
	}

	if !validProof {
		panic(err)
	}

	return fmt.Sprintf("%x", hashedItem), string(jproof)
}


// Generate merkle root with similar operation as jackal provider daemon
func GetMerkleRoot() string {
	// The index of the file is zero
	f := []byte(fileData)
	var data [][]byte

	h := sha256.New()
	_, err := io.WriteString(h, fmt.Sprintf("%d%s", 0, f))
	if err != nil {
		panic(err)
	}
	hashName := h.Sum(nil)

	data = append(data, hashName)

	tree, err := merkle.New(data)
	if err != nil {
		panic(err)
	}

	return hex.EncodeToString(tree.Root())
}
