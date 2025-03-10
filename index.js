// 1. Create an employee object with initial properties
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

// 2. Function to update an employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// 3. Function to update an employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 4. Function to delete a key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 5. Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
