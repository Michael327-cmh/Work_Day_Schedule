var ListInput = document.getElementById("#segment");
var ListReturn = document.querySelector("#segment");
var saveButton = document.querySelector("#SAVED")


var Today = moment().format("LLL");
$("#currentDay").text(Today);

renderToDo();
//var three_before = moment.subtract(3, "h");
//$("#threebefore").text(three_before);



function renderToDo() {
    var segment = localStorage.getItem("segment");
      
    if (!segment) {
      return;
    }
      ListReturn.textContent = segment;
  }
  

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var segment = document.querySelector("#segment").value;

    localStorage.setItem("segment", segment);
    
    
    renderToDo();
})