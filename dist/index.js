"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCssVariable = exports.clearChildren = exports.svgStringToNode = void 0;
const svgStringToNode = (svgString) => new DOMParser().parseFromString(svgString, "image/svg+xml").documentElement;
exports.svgStringToNode = svgStringToNode;
const clearChildren = (element) => {
    const removedNodes = [];
    while (element.firstChild) {
        removedNodes.push(element.removeChild(element.firstChild));
    }
    return removedNodes;
};
exports.clearChildren = clearChildren;
const getCssVariable = (variableName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
};
exports.getCssVariable = getCssVariable;
