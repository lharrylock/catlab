import * as React from "react";

import {
    eyeColorMap,
    eyeShapeMap,
    furColorMap,
    furLengthMap,
    furPatternMap,
    tailTypeMap
} from "../../models/enum-display-maps";

const generateOptions = (enumDisplayMap: Map<any, string>) => {
    return Array.from(enumDisplayMap.entries()).map((entry) => (
        <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
    ));
};

const formControl = (label: string, enumDisplayMap: Map<any, string>) => {
    const options = generateOptions(enumDisplayMap);
    return (
        <div>
            <label>
                {label}
                <select>
                    {options}
                </select>
            </label>
        </div>
    );
};

export default class CatForm extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div style={{flex: 1}}>
                {formControl("Eye Color", eyeColorMap)}
                {formControl("Eye Shape", eyeShapeMap)}
                {formControl("Fur Color", furColorMap)}
                {formControl("Fur Length", furLengthMap)}
                {formControl("Fur Pattern", furPatternMap)}
                {formControl("Tail Type", tailTypeMap)}
            </div>
        );
    }
}
