# Work_Day_Schedule
Logging meetings and to do lists utilizing moment.js

Saved multiple commits to an interior folder. 

https://michael327-cmh.github.io/Work_Day_Schedule/ Work Day Scheduler

![image](https://user-images.githubusercontent.com/84113171/126023199-fa3308b9-231f-441f-a152-49c57a21db67.png)

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

CSS
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1;
}

textarea {
  background: transparent;
  border: none;
  resize: none;
  color: #000000;
  border-left: 1px solid black;
  padding: 10px;
}

.jumbotron {
  text-align: center;
  background-color: transparent;
  color: black;
  border-radius: 0;
  border-bottom: 10px solid black;
}

.description {
  white-space: pre-wrap;
}

.time-block {
  text-align: center;
  border-radius: 15px;
}

.row {
  white-space: pre-wrap;
  height: 80px;
  border-top: 1px solid white;
}

.hour {
  background-color: #ffffff;
  color: #000000;
  border-top: 1px dashed #000000;
  width: 150vh;
}

.box {
  width: 90vh;
  margin-top: 6px;
}
.past {
  background-color: #d3d3d3;
  color: white;
}

.present {
  background-color: #ff6961;
  color: white;
}

.future {
  background-color: #77dd77;
  color: white;
}

.saveBtn {
  border-left: 1px solid black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #06aed5;
  color: white;
  margin-left: 10px;
}

.saveBtn i:hover {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}

HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Work Day Scheduler</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead"></p>
    </header>
    <div class="container">
      <!-- Timeblocks go here -->
      <div class="justify-content-center">
        <form id="calendar-form">
          <div class="row time-block hour past">
            <label for="hours" class="col-sm-3 col-form-label mt-3">4AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn" id="SAVED">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour past">
            <label for="hours" class="col-sm-3 col-form-label mt-3">5AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour past">
            <label for="hours" class="col-sm-3 col-form-label mt-3">6AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour past">
            <label for="hours" class="col-sm-3 col-form-label mt-3">7AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour present">
            <label for="hours" class="col-sm-3 col-form-label mt-3">8AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">9AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">10AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">11AM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">12PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">1PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">2PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">3PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">4PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">5PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">6PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">7PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">8PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">9PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">10PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
          <div class="row time-block hour future">
            <label for="hours" class="col-sm-3 col-form-label mt-3">11PM</label>
            <ol>
              <input type="text" class="col-sm-10 box" id="segment" /><button class="saveBtn">SAVE</button>
            </ol>
          </div>
        </form>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
