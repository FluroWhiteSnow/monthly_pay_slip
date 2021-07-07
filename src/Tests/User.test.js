const User = require("../User").User;

const user = new User("Ananda Rodziewicz", 60000);
// const user2 = new User("Ananda ", 0);

describe("Testing for valid names", () => {
  expect(user.name).toBe("Ananda Rodziewicz");
  expect(user.getName()).toEqual("Ananda Rodziewicz");
});

// describe("Testing for empty names", () => {
//   expect(user.name).not.toBe(" ");
//   expect(user.getName()).not.toBe(false);
// });
