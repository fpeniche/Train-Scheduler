//variables required

//frequency and initial time
var tFrequency = 10;
var tFrequency2 = 3;
var tFrequency3 = 15;
var tFrequency4 = 5;
var tFrequency5 = 25;
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);
var tRemainder2 = diffTime % tFrequency2;
console.log(tRemainder2);
var tRemainder3 = diffTime % tFrequency3;
console.log(tRemainder3);
var tRemainder4 = diffTime % tFrequency4;
console.log(tRemainder4);
var tRemainder5 = diffTime % tFrequency5;
console.log(tRemainder5);


 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 var tMinutesTillTrain2 = tFrequency2 - tRemainder2;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain2);
 var tMinutesTillTrain3 = tFrequency3 - tRemainder3;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain3);
 var tMinutesTillTrain4 = tFrequency4 - tRemainder4;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain4);
 var tMinutesTillTrain5 = tFrequency5 - tRemainder5;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain5);

 //Next Arrival
 var nextArrival = moment().add(tMinutesTillTrain, "minutes").format("hh:mm a");
 var nextArrival2 = moment().add(tMinutesTillTrain2, "minutes").format("hh:mm a");
 var nextArrival3 = moment().add(tMinutesTillTrain3, "minutes").format("hh:mm a");
 var nextArrival4 = moment().add(tMinutesTillTrain4, "minutes").format("hh:mm a");
 var nextArrival5 = moment().add(tMinutesTillTrain5, "minutes").format("hh:mm a");

 $(function(){
    $("#minutesAway").text(tMinutesTillTrain);
    $("#minutesAway2").text(tMinutesTillTrain2);
    $("#minutesAway3").text(tMinutesTillTrain3);
    $("#minutesAway4").text(tMinutesTillTrain4);
    $("#minutesAway5").text(tMinutesTillTrain5);

    $("#nextArrival").text(nextArrival);
    $("#nextArrival2").text(nextArrival2);
    $("#nextArrival3").text(nextArrival3);
    $("#nextArrival4").text(nextArrival4);
    $("#nextArrival5").text(nextArrival5);
    
    function train(trainName, destination, firstTrain, myFrequency,minutesAway) {
         var trainName = $("#trainName").val();
         var destination = $("#destination").val();
         var firstTrain = $("#firstTrain").val();
         var myFrequency = $("#myFrequency").val();
        // var trainTime = moment(firstTrain).format("hh:mm a");
         var dynRemainder = diffTime % myFrequency;
         var minutesAway = myFrequency - dynRemainder;

      $("#trainData").append("<tr><th>" +trainName+ "</th><td>" + destination + "</td><td>" + myFrequency + "</td><td>" +firstTrain+ "</td><td>" +minutesAway+ "</td></tr>");
}
      $("#submitButton").on("click", function () {

         event.preventDefault();
         train(trainName,destination,firstTrain,myFrequency,minutesAway);
         
     });

 });
