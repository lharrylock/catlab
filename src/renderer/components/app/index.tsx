import * as React from "react";

import { EyeColor, EyeShape, FurColor, FurLength, FurPattern } from "../../models/enums";
import { EyeColorGene } from "../../models/eye-color-gene";
import { EyeShapeGene } from "../../models/eye-shape-gene";
import { FurColorGene } from "../../models/fur-color-gene";
import { FurLengthGene } from "../../models/fur-length-gene";
import { FurPatternGene } from "../../models/fur-pattern-gene";
import { Gene } from "../../models/gene";

import CatDisplay from "../cat-display";
import CatForm from "../cat-form";

interface AppState {
    genes: Gene[];
}
export default class App extends React.PureComponent<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.combine = this.combine.bind(this);
        this.state = {
            genes: [],
        };
    }

    public combine() {
        this.setState({
            genes: [
                new EyeColorGene(EyeColor.ORANGE),
                new EyeShapeGene(EyeShape.WIDE),
                new FurColorGene(FurColor.YELLOW),
                new FurLengthGene(FurLength.SHORT),
                new FurPatternGene(FurPattern.TIGER),
            ]});
    }

    public render() {
        return (
            <div>
                <h1>Cat Combinator</h1>
                <form>
                    <div style={{display: "flex"}}>
                        <CatForm/>
                        <CatForm/>
                    </div>
                    <button
                        onClick={this.combine}
                        type="button"
                    >
                        Submit
                    </button>
                </form>
                <div>
                    <h2>Result</h2>
                    <CatDisplay genes={this.state.genes}/>
                </div>
            </div>
        );
    }
}
