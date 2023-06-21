
export const svgStringToNode = (svgString: string) => new DOMParser().parseFromString(
    svgString,
    "image/svg+xml"
).documentElement

export const clearChildren = (element: HTMLElement) => {
    const removedNodes: ChildNode[] = [] 
    while(element.firstChild){
        removedNodes.push(element.removeChild(element.firstChild))
    }
    return removedNodes
}

export const getCssVariable = (variableName: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName)
}