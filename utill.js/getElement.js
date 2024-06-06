export const getElement = (selector) => {
    // Attempt to select multiple elements
    const elements = document.querySelectorAll(selector);

    // If there are multiple elements, return the NodeList
    if (elements.length > 1) {
        return [...elements];
    }

    // If there's exactly one element, return it
    if (elements.length === 1) {
        return elements[0];
    }

    // If no elements are found, throw an error
    const errorMessage = `Element(s) with selector "${selector}" do not exist`;
    console.log(errorMessage);
    throw new Error(errorMessage);
};
