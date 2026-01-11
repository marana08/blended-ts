// Задача 4
// Опис: Є масив, який містить розміри екрана у пікселях.
// Завдання:
// Додайте до змінної dimensions явну типізацію.
// Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).

const dimensions: number[] = [1920, 1080];

console.log(dimensions);

let item: [string, number] = ["hello", 42];
// item = [2, 4];
// type Item = string | number;
item.push("world", 24);
item.push(24, "24");
item.push(3, 9);