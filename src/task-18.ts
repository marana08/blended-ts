// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.
// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
interface Geo {
    lat: string;
    lng: string;
}
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
};

const getUsers = async () => {
    const users = await fetchUsers();
    console.log(users);
};

getUsers();