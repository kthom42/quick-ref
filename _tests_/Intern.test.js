const Intern = require("../lib/Intern");

test("Can set a school", () => {
  const testValue = "MSU";
  const e = new Intern("Fox", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Fox", 1, "test@test.com", "MSU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "MSU";
  const e = new Intern("Fox", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
