console.log("Checking...")

const parentDiv = document.getElementsByClassName('parentDiv')[0];
const heading1 = document.createElement('h1');
heading1.innerText = "To Do List"

parentDiv.appendChild(heading1);

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Enter your To do List';

parentDiv.appendChild(inputField)

const submitBtn = document.createElement('button');
submitBtn.type = 'submit'
submitBtn.textContent= 'Submit'

parentDiv.appendChild(submitBtn)

const parentList = document.createElement('ul');
parentDiv.appendChild(parentList)



submitBtn.addEventListener('click', () => {
    // console.log("button clicking")
    if(inputField.value == ''){
        alert('Input is required')
    }else{
        // console.log(inputField.value)
        const childList = document.createElement('li');
        childList.setAttribute('class', 'todoList')
        // console.log(childList)

        
        let listName = inputField.value
        childList.textContent = listName
        parentList.appendChild(childList)

        const deleteToDo = document.createElement('button')
        deleteToDo.setAttribute('class', 'deleteToDo')
        deleteToDo.textContent = 'X';
        
        childList.appendChild(deleteToDo)
        inputField.value = ''

        deleteToDo.addEventListener('click' , () => {
            console.log('running')

            childList.remove();
        })
    }
})


