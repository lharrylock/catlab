import {
    EyeColor,
    Trait
} from "./enums";
import { Gene } from "./gene";

export class EyeColorGene implements Gene {
    public trait = Trait.EYE_COLOR;
    public traitValue: EyeColor;

    constructor(traitValue: EyeColor) {
        this.traitValue = traitValue;
    }
}
