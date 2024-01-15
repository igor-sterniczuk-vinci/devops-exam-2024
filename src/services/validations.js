// TODO: Refactor validation function to follow the defined validations rules
const validation = (gamertag) => {
    return (
        gamertag.length === 8 &&
        /[!@#$%^&*(),.?":{}|<>]/.test(gamertag) &&
        /[0-9]/.test(gamertag)
    );
};

exports.isValid = validation;
