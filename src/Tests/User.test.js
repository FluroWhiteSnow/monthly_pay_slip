const User = require("../User").User;

const user = new User("Test User", 60000);
const user2 = new User("Ananda ", 0);

test("Testing for valid names", () => {
  expect(user.name).toBe("Test User");
  expect(user.getName()).toEqual("Test User");
});

test("Testing for user 2", () => {
  expect(user2.name).toBe("Ananda");
  expect(user.getName()).toEqual("Ananda");
});
