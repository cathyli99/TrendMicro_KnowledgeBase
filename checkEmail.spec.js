const checkEmail = require('./js/checkEmail');

test("check email contains @ or not", () => {
    const email = `${document.forms[0].elements[0].value}`;
    expect(checkEmail(email)).toBe("cathyli99@gmail.com");
    // expect(checkEmail(email)).toMatch(/@/);
});