//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }

document.getElementById("answer1").innerHTML = "Today " + "is " + daylist[day] + "." + "<br />" + "Current Time : " + hour + ":" + minute + ":" + second + prepand;

/* 2.--------
*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}

document.getElementById("answer2").innerHTML = mm + "-" + dd + "-" + yyyy + "<br />" + mm + "/" + dd + "/" + yyyy + "<br />" + dd + "/" + mm + "/" + yyyy;
