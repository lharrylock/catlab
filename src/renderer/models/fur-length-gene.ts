import { FurLength, Trait } from "./enums";
import { Gene } from "./gene";

export class FurLengthGene implements Gene {
    public trait = Trait.FUR_LENGTH;
    public traitValue: FurLength;

    constructor(traitValue: FurLength) {
        this.traitValue = traitValue;
    }
}
