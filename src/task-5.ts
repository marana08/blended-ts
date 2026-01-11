// Задача 5
// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

interface CreateUserParams{
  name: string;
  age: number;
}

interface CreateUser {
    name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({name, age}: CreateUserParams): CreateUser {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

