const addBtn = document.getElementById("addBtn");
const inputArea = document.getElementById("inputArea");
const listContainer = document.getElementById("listContainer");

addBtn.addEventListener("click", () => {
  if (inputArea.value === '') {
    alert("You must write something")
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputArea.value;

    listContainer.appendChild(list);
    inputArea.value = ''

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"

    list.appendChild(span);
    saveToBrowser() 
    
  }
})

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveToBrowser() 

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    saveToBrowser()

  }
});

function saveToBrowser() {
  localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
