// Задача 5
// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

function createUser({name, age}) {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

