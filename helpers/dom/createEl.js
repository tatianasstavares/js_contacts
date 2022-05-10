const createEl = (element, text) => {
    const elementNew = document.createElement(element)
    elementNew.textContent = text
    return elementNew
}

export {createEl}