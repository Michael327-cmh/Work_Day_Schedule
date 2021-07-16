var ListInput = document.getElementById("segment");


var Today = moment().format("LLL");
$("#currentDay").text(Today);

var three_before = moment.subtract(3, "h");
$("#threebefore").text(three_before);

function saveToDo() {
    var ToDoList = ListInput

    localStorage.setItem("ToDoList");
};

saveButton.addEventlistener("click", function(event) {
    event.preventDefault();
    saveToDo();
})