const button = document.querySelector("button")
button.addEventListener('click', (e) => {
    let input = button.previousElementSibling;
    let divTodo = button.nextElementSibling;
    let ul = divTodo.firstElementChild;
    console.log(ul)
    const todo = input.value
    console.log(todo.trim());
    ul.append(todo.trim())
    // set text content
    li.textContent = todo.trim();
    ul.append(li);

    //clear input
    input.value = ''
});
//console.log("Hello World")