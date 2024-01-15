// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

test('should return false if the gamertag does not have 8 characters', () => {
    const result = isValid('aaaaaaa');
    expect(result).toBe(false);
});

test('should return true if the gamertag has 8 characters', () => {
    const result = isValid('abcdefgh');
    expect(result).toBe(true);
});

test('should return true if the gamertag has more than 8 characters', () => {
    const result = isValid('abcdefghi');
    expect(result).toBe(true);
});
