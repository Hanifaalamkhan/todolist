#! /usr/bin/env node
import inquirer from 'inquirer';
// Arrays:
let fruitchaat = ['kiwi', 'lychee', 'strawberry'];
// .push() They one thing inside the push.
fruitchaat.push('mango');
// .pop() remove the last element from the array ,it dosen't add it.
fruitchaat.pop();
// .concat  it refers to joining or combining strings together in programming. When we say we want to "concatenate" two strings.
fruitchaat = fruitchaat.concat(['Apple', 'banana', 'orange']);
console.log(fruitchaat);
//while loops:
let i = 0; // initiallize
while (i <= 10) {
    console.log(i);
    i++; // code execute
}
let todos = [];
let condition = 'false';
while (condition) {
    let addTask = await inquirer.prompt([{
            name: 'todo',
            type: 'input',
            message: "what u want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: "confirm",
            message: "Do u want to add more Todos?",
            default: "false",
        }]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
