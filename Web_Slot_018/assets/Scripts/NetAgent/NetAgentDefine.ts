import { ByteReaderHelper } from "./CConnectManager/ByteArray";

// NetAgent Version
export const NetAgentVersion = "1.0.12";
export enum GameType {
    Slot,
    Bingo,
}

//Decode Interface
export interface IDecode {
    Decode(): void;
}

//Decoder abstract class
export default abstract class Decoder implements IDecode {
    //ServerAck
    constructor(protected serverAck: ByteReaderHelper) { }
    //Implement Decode method
    abstract Decode(): void
}

