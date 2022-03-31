//Define variables
var jumbotron = $(".jumbotron");
var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY");

// Show current day and date on top of page
currentDay.text(currentDate);

//Create function to match past, present, and future to each hour 
$(".description").each(function(){
    var now = moment().hour();
    console.log(now);
    var currentHour = $(this).parent().attr("id");
    if (parseInt(currentHour)===now){
        $(this).addClass("present");
    }
    else if (parseInt(currentHour) < now){
        $(this).addClass("past");
    } 
    else {
        $(this).addClass("future");
    }
})

//Create function to save tasks to each matching hour
$(".saveBtn").each(function(){
    var btn = $(this).parent().attr("id")
    console.log(btn)
    localStorage.setItem("description", JSON.stringify(description))

})


