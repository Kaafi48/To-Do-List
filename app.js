
const inputBox = document.querySelector("#input-box")
const Add = document.querySelector(".Add")
const listContainer = document.getElementById("list-container");
const delet = document.querySelector(".delete-all");
const taskCount = document.querySelector("#task-count")
const pop = document.querySelector(".pop")
let popButtom = document.querySelector(".pop-buttom");

Add.addEventListener('click', addTask )
function addTask(){
    if(inputBox.value == ''){

        pop.classList.add("active");

    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
    updateTaskCount();

}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateTaskCount();
    }
   
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function deleteAll(){
    listContainer.innerHTML = '';
    saveData();
    updateTaskCount();
}
delet.addEventListener("click",deleteAll);

function updateTaskCount() {
    const totalTasks = listContainer.querySelectorAll("li").length; // Hawlaha guud
    // const completedTasks = listContainer.querySelectorAll("li.checked").length; // Hawlaha la dhammeystiray
    // const pendingTasks = totalTasks - completedTasks; // Hawlaha aan lahammey dsirtin
    taskCount.innerText = totalTasks;

    // Muuji tirada guud, kuwa la dhammeystiray iyo kuwa aan la dhammeystirin
    // document.getElementById("taskCount").innerText = `Total: ${totalTasks} | Completed: ${completedTasks} | Pending: ${pendingTasks}`;
}

popButtom.addEventListener("click", () => {
    // 1. Hide the pop-up
    pop.classList.remove("active"); 
    saveData();

});