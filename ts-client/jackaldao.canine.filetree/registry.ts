import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgInitAccount } from "./types/filetree/tx";
import { MsgDeleteFile } from "./types/filetree/tx";
import { MsgPostkey } from "./types/filetree/tx";
import { MsgPostFile } from "./types/filetree/tx";
import { MsgAddViewers } from "./types/filetree/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/jackaldao.canine.filetree.MsgInitAccount", MsgInitAccount],
    ["/jackaldao.canine.filetree.MsgDeleteFile", MsgDeleteFile],
    ["/jackaldao.canine.filetree.MsgPostkey", MsgPostkey],
    ["/jackaldao.canine.filetree.MsgPostFile", MsgPostFile],
    ["/jackaldao.canine.filetree.MsgAddViewers", MsgAddViewers],
    
];

export { msgTypes }