import { EngineName } from "../types/engine";
import { UciEngine } from "./uciEngine";

export class Stockfish11 extends UciEngine {
  constructor() {
    super(EngineName.Stockfish11, "engines/stockfish-11.js");
  }
}
