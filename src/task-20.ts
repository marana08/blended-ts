// Задача 20
// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.
// Завдання:
// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.

import axios from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

async function logThreePosts() {
    const posts = await fetchPosts();
    posts.slice(0, 3).forEach(post => console.log(`Title: ${post.title}, Body: ${post.body}`));
}
logThreePosts();

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }