import { EyeShape, Trait } from "./enums";
import { Gene } from "./gene";

export class EyeShapeGene implements Gene {
    public trait = Trait.EYE_SHAPE;
    public traitValue: EyeShape;

    constructor(traitValue: EyeShape) {
        this.traitValue = traitValue;
    }
}
