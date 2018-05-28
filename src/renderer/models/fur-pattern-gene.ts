import { FurPattern, Trait } from "./enums";
import { Gene } from "./gene";

export class FurPatternGene implements Gene {
    public trait = Trait.FUR_PATTERN;
    public traitValue: FurPattern;

    constructor(traitValue: FurPattern) {
        this.traitValue = traitValue;
    }
}
