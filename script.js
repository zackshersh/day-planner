var container = $("#schedCont")
var currentDay = $("#currentDay")
var times = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

function pageInit(){

    currentDay.text("It is " + moment().format("h:mm a") + " on " + moment().format("dddd, MMMM Do YYYY"))

    for (var i=0; i<9;i++){
        var row = $("<div>");
        row.attr("class","row").attr("id","row"+i)
        row.attr("data-hour", i+9)


        row.append("<div class='col-2 text-right time-col'></div>")
        row.append("<input class='col-8 border-0 event-col' id=input" + i + ">")
        row.append("<div class='col-2 save-col saveBtn d-flex justify-content-center align-items-center' data-row=" +i+ " ></div>")
        
        row.children().eq(0).text(times[i])

        row.children().eq(2).append("<i class='fas fa-save' width='40px'></i>")


        if (row.attr("data-hour") < moment().format("H") || row.attr("id") == "row0") {
            row.children(".event-col").addClass("past")
        } else if (row.attr("data-hour") == moment().format("H")) {
            row.children(".event-col").addClass("present")
        } else if (row.attr("data-hour") > moment().format("H"))  {
            row.children(".event-col").addClass("future")
        }

        var lsCurrentRow = localStorage.getItem(i)
        console.log(typeof lsCurrentRow)
        console.log(lsCurrentRow)
        if (typeof lsCurrentRow != "string") {
        } else {
            console.log("this is a string in theory")
            row.children().eq(1).attr("value",lsCurrentRow)
        }

        row.on('click', '.save-col', function(event) {
            // localStorage.setItem(row.attr("data-hour"), input.val());
            var whichRow = event.target.getAttribute("data-row")
            var thisInput = document.getElementById("input" + whichRow)
            console.log(thisInput)
            localStorage.setItem(whichRow, thisInput.value)  
        })

        container.append(row)

    }
}


pageInit()