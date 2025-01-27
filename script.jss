const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); // Fixed variable name

function addTask() {
    if (inputBox.value === "") {
        console.log("Button clicked"); // Debugging
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for 'x' symbol
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input field
}

// Toggle tasks or delete on click
listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    },
    false
);

   function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
   }
   function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
   }
   showTask();
