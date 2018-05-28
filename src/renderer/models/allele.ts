import { Gene } from "./gene";

export default interface Allele {
    gene: Gene;
    isDominant: boolean;
}
