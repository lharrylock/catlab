import { FurColor, Trait } from "./enums";
import { Gene } from "./gene";

export class FurColorGene implements Gene {
    public trait = Trait.FUR_COLOR;
    public traitValue: FurColor;

    constructor(traitValue: FurColor) {
        this.traitValue = traitValue;
    }
}
