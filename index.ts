// Import stylesheets
import './style.css';

const User = {
  name: 'Marcel',
  age: 31,
};

let msg = 'Some message';
let index = 1;
let nameList: string[] = ['Marcel', 'Ioan'];
let obj: any = { x: 0 };

function displayUser(user: typeof User, prefix: string) {
  return prefix + ' ' + user.name;
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const message = 'Hello World!';
message.toLocaleLowerCase();
console.log(message);

console.log(User.age);
console.log(displayUser(User, 'Mr.'));
console.log(msg.toLocaleUpperCase());
console.log(index.valueOf());
console.log(`Hello ${User.name}`);
console.log(nameList[1]);
console.log(obj);
console.log(obj.x);
console.log(obj.y);
obj.y = -100;
console.log(obj.y);
obj.display = function () {
  return '1';
};
console.log(obj.display);
console.log(obj.display());
