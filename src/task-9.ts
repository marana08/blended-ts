// Задача 9
// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
    items: T[];
    addItem: (item: T) => void;
    getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
    items: [1, 2, 3, 4],
    addItem(item) {
        this.items.push(item)
    },
    getItem(index) {
        return this.items[index];
    },
};

// numberContainer.addItem(42)
// console.log(numberContainer.items);

// console.log(numberContainer.getItem(3));

const stringContainer: Container<string> = {
    items: ["a", "b", "c", "d"],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
};

// console.log(stringContainer.getItem(2));

function getLastElement<T>(container: Container<T>): T {
    return container.items[container.addItem.length - 1];
}
console.log(getLastElement(stringContainer));

// function sum<T extends number | string>(a: T, b: T): T {
//   return (a + b) as T;
// }




