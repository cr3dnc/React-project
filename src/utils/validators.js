export const required = (value) => {
    if (value) return undefined;
    return "This field is required";
}
export const maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined;
}