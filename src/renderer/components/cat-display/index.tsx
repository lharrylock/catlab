import * as React from "react";

import { traitMap, traitToEnumDisplayMap } from "../../models/enum-display-maps";
import { Gene } from "../../models/gene";

interface CatDisplayProps {
    genes: Gene[];
}

const CatDisplay: React.SFC<CatDisplayProps> = (props) => {
    return (
        <div>
            {
                props.genes.map((gene: Gene) => {
                    const enumDisplayMap = traitToEnumDisplayMap.get(gene.trait);
                    const traitValue = enumDisplayMap ? enumDisplayMap.get(gene.traitValue) : "unknown";
                    return (
                        <div key={gene.trait}>
                            <label>
                                {traitMap.get(gene.trait)}: {traitValue}
                            </label>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CatDisplay;
