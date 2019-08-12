//variables required
//frequency and initial time
var tFrequency = 10;
var tFrequency2 = 3;
var tFrequency3 = 15;
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

 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 var tMinutesTillTrain2 = tFrequency2 - tRemainder2;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain2);
 var tMinutesTillTrain3 = tFrequency3 - tRemainder3;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain3);

 //Next Arrival
 var nextArrival = moment().add(tMinutesTillTrain, "minutes").format("hh:mm a");
 var nextArrival2 = moment().add(tMinutesTillTrain2, "minutes").format("hh:mm a");

 $(function(){
    $("#minutesAway").text(tMinutesTillTrain);
    $("#minutesAway2").text(tMinutesTillTrain2);
    $("#minutesAway3").text(tMinutesTillTrain3);

    $("#nextArrival").text(nextArrival);
    $("#nextArrival2").text(nextArrival2);

 });
