// Задача 12
// Є функція sendDoneStatus:
// Завдання:
// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

type Callback = (message: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((message) => {
  console.log(":Status:", message);    
});