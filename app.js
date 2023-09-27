const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); // Corrected 'appendChild'
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span); // Corrected 'appendChild'
  }
  inputBox.value = "";
  saveData();
}


listContainer.addEventListener("click",function(e){


    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        let div = e.target.parentNode;
        div.remove();
        saveData();
    }
} ,false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}

showTask();