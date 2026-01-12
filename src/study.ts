// 1

// const username: string = "Anna";
// const age: number = 25;
// const isOnline: boolean = true;
// console.log(`User: ${username}, Age: ${age}, Online: ${isOnline}`);

// 2

// type Profile ={
//     name: string;
//     readonly email: string;
//     subscribed: boolean;
// }

// const profile: Profile = {
//     name: "Anna",
//     email: "anna@mail.com",
//     subscribed: true
// };

// console.log(profile);

// 3

// function logMessage(message: string): void{
//     console.log(message);
// }

// logMessage("Hello, World!");

// 4

// const scores: number[] = [10, 20, 30];
// scores.push("40");

// console.log(scores);

// 5

// type Theme = "light" | "dark";

// const currentTheme: Theme = "light";

// console.log(currentTheme);

// 6

// type User = {
//     id: number;
//     name: string;
//     phone?: number;
// }

// let withPhone: User = {
//     id: 9,
//     name: "Mariana",
//     phone: 72649234,
// }

// console.log(withPhone);

// let withoutPhone: User = {
//     id: 9,
//     name: "Mariana",
// }

// console.log(withoutPhone);

// 7

// type User ={
//     name: string;
//     age: number;
// }

// function printUser(user: User): void {
//     console.log(`${user.name} (${user.age})`);
// }

// const user: User = {
//     name: "Carlos",
//     age: 28
// };

//8

// type Status = "loading" | "success" | "error";

// function setStatus(status: Status): void {
//     console.log(`Status: ${status}`);
// }

// 9

// interface Product {
//     id: number;
//     title: string;
//     price: number;
// }

// const products: Product[] = [
//     { id: 1, title: "Book", price: 200 },
//     { id: 2, title: "Pen", price: 20 }
// ];

// console.log(products);

//10 

// type Account= {
//     readonly id: number;
//     owner: string;
//     balance: number;
// }

// 11

// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }
// const numbers = [10, 20, 30];
// const strings = ["apple", "banana", "cherry"];

//  12

// interface Box<T> {
//     value: T;
//     getValue(): T;
// };
// const numberBox: Box<number> = {
//     value: 100,
//     getValue(): number {
//         return this.value;
//     }
// };

// const stringBox: Box<string> = {
//     value: "Hello",
//     getValue(): string {
//         return this.value;
//     }
// };

// console.log(numberBox.getValue());
// console.log(stringBox.getValue());