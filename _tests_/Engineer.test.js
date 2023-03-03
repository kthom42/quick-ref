const Engineer = require("../lib/Engineer");

test("Can set github account", () => {
  const testValue = "githubUser";
  const e = new Engineer("Fox", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Fox", 1, "test@test.com", "githubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "githubUser";
  const e = new Engineer("Fox", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
