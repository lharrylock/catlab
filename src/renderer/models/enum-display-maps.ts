import {
    EyeColor,
    EyeShape,
    FurColor,
    FurLength,
    FurPattern,
    TailType,
} from "./enums";

const eyeColors: Iterable<[EyeColor, string]> = [
    [EyeColor.BLUE, "blue"],
    [EyeColor.BROWN, "brown"],
    [EyeColor.GREEN, "green"],
    [EyeColor.RED, "red"],
    [EyeColor.ORANGE, "orange"],
    [EyeColor.YELLOW, "yellow"],
];

const eyeShapes: Iterable<[EyeShape, string]> = [
    [EyeShape.ROUND, "round"],
    [EyeShape.WIDE, "wide"],
];

const furColors: Iterable<[FurColor, string]> = [
    [FurColor.BLACK, "black"],
    [FurColor.BLUE, "blue"],
    [FurColor.BROWN, "brown"],
    [FurColor.GREEN, "green"],
    [FurColor.GREY, "grey"],
    [FurColor.ORANGE, "orange"],
    [FurColor.PINK, "pink"],
    [FurColor.PURPLE, "purple"],
    [FurColor.RED, "red"],
    [FurColor.YELLOW, "yellow"],
];

const furLengths: Iterable<[FurLength, string]> = [
    [FurLength.LONG, "long"],
    [FurLength.MEDIUM, "medium"],
    [FurLength.SHORT, "short"],
];

const furPatterns: Iterable<[FurPattern, string]> = [
    [FurPattern.COW, "cow"],
    [FurPattern.LEOPARD, "leopard"],
    [FurPattern.NONE, "none"],
    [FurPattern.TIGER, "tiger"],
];

const tailTypes: Iterable<[TailType, string]> = [
    [TailType.FLUFFY, "fluffy"],
    [TailType.LONG, "long"],
    [TailType.SHORT, "short"],
];

const eyeColorMap: Map<EyeColor, string> = new Map(eyeColors);
const eyeShapeMap: Map<EyeShape, string> = new Map(eyeShapes);
const furColorMap: Map<FurColor, string> = new Map(furColors);
const furLengthMap: Map<FurLength, string> = new Map(furLengths);
const furPatternMap: Map<FurPattern, string> = new Map(furPatterns);
const tailTypeMap: Map<TailType, string> = new Map(tailTypes);

export {
    eyeColorMap,
    eyeShapeMap,
    furColorMap,
    furLengthMap,
    furPatternMap,
    tailTypeMap,
};
