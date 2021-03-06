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
        row.append("<input class='col-8 border-0 event-col'>")
        row.append("<div class='col-2 save-col bg-primary'></div>")
        
        row.children().eq(0).text(times[i])

        row.children().eq(2).append("<i class='fas fa-save'></i>")

        console.log(row.attr("data-hour"))
        console.log(moment().format("H"))

        if (row.attr("data-hour") < moment().format("H")) {
            row.children(".event-col").css("background-color","#bfbfbf")
        } else if (row.attr("data-hour") == moment().format("H")) {
            row.children(".event-col").css("background-color","#ff0000")
        } else if (row.attr("data-hour") > moment().format("H"))  {
            row.children(".event-col").css("background-color","#00ff00")
        }

        container.append(row)

    }
}

pageInit()