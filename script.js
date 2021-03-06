var container = $("#schedCont")
var times = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

function pageInit(){
    for (var i=0; i<9;i++){
        var row = $("<div>");
        row.attr("class","row").attr("id","row"+i)
        container.append(row)

        row.append("<div class='col-2 time-col'></div>")
        row.append("<div class='col-8 event-col'></div>")
        row.append("<div class='col-2 save-col'></div>")
    }
}

pageInit()