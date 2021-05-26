let toDos = [];

let input = prompt('What would you like to do?');

while (input.toLowerCase !== 'quit') {
    input = prompt("What would you like to do?");
    if (input.toLowerCase() === 'quit') {
        break;
    }
    else if (input.toLowerCase() === 'new') {
        let newToDo = prompt("Enter new list item");
        toDos.push(newToDo);
        console.log(`${newToDo} added to list`)
    }
    else if (input.toLowerCase() === 'list') {
        console.log('**********')
        for (let i=0; i < toDos.length; i++) {
            console.log(`${[i]}: ${toDos[i]}`);
        }
        console.log('**********') 
    }
    else if (input.toLowerCase() === 'delete') {
        let index = parseInt(prompt("Enter item index to delete"));
        if (!Number.isNaN(index) && index in toDos) {
            let deletedItem = toDos.splice(index, 1);
            console.log(`Deleted ${deletedItem}`);
        }
        else {
            console.log('unknown index')
        }
    }  
}
console.log("you quit the app")

