import {
    TailType,
    Trait
} from "./enums";
import { Gene } from "./gene";

export class TailTypeGene implements Gene {
    public trait = Trait.TAIL_TYPE;
    public traitValue: TailType;

    constructor(traitValue: TailType) {
        this.traitValue = traitValue;
    }
}
