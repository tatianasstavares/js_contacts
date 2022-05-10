const textLi = function (contact) {
    const {fullName, phoneNumber, email} = contact;
    return `Name: ${fullName},Phone Number: ${phoneNumber} Email: ${email}`
}

export {textLi}