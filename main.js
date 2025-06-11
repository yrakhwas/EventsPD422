// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log("DOM fully loaded and parsed");
// });



// const clickBtn = document.getElementById("clickBtn");


// function handleClick() {
//     alert("Button clicked!");
// }

// clickBtn.addEventListener("click", (event)=>{
//     event.preventDefault();
//     console.log(event.type + ` on ${event.currentTarget}`);
//     console.log(`Coord : ${event.clientX}, ${event.clientY}`);
// });

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const charCount = document.getElementById("charCount");
const hoverMsg = document.getElementById("hoverMsg");
const list  = document.getElementById("todoList");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const taskText = input.value.trim();
    if(taskText === "") {return;}

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);



    list.appendChild(li);
    input.value = "";
    charCount.textContent = "0";
    input.focus();
});


list.addEventListener("click", (event)=>{
    const target = event.target;

    if(target.classList.contains("deleteBtn")) {
        const li = target.parentElement;
        list.removeChild(li);
        return;
    }
    if(target.tagName ==="LI")
    {
        target.classList.toggle("completed");
    }

});


list.addEventListener("mouseover", (event)=>{
    const target = event.target;

    if(target.classList.contains("deleteBtn")) {
       hoverMsg.textContent = "Click to delete this task!";
    }
});

list.addEventListener("mouseout", (event)=>{
    const target = event.target;

    if(target.classList.contains("deleteBtn")) {
       hoverMsg.textContent = "";
    }
});

input.addEventListener("input", (event)=>{
    charCount.textContent = `Entered characters: ${event.target.value.length}`;
})

addButton.addEventListener("mouseover", ()=>{
    hoverMsg.textContent = "Click to add a task!";
})

addButton.addEventListener("mouseout", ()=>{
    hoverMsg.textContent = "";
})