// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

test("should return false if the gamertag does not have 8 characters", () => {
    const result = validation("aaaaaaa");
    expect(result).toBe(false);
});