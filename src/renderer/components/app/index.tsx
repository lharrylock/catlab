import * as React from "react";

import CatForm from "../cat-form";

export default class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.combine = this.combine.bind(this);
    }

    public combine() {
        return null;
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
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
