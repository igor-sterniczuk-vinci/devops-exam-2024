// TODO: Refactor validation function to follow the defined validations rules
const validation = (gamertag) => {
    return gamertag.length >= 8;
};

exports.isValid = validation;
