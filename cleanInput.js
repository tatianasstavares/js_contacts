
const cleanInputs = () => [...FormData.children].filter(input => (input.type == 'text' ) ? input.value = '' : '')

export {cleanInputs}