const Employee = require("../lib/Employee");

test("Can recognize new employee", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set id ", () => {
  const testValue = 100;
  const e = new Employee("Fox", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set a name", () => {
  const name = "Chuck";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set an email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Fox", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Chuck";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Fox", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Fox", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Chuck", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
