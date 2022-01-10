
<script>

//This script checks every 2 seconds
//and updates the brewery's open/closed status

setInterval(function timeChanger() {
  //create vars for open or closed state
  var hoursOpen = "Open for Business!";
  var hoursClosed = "Closed for the day.";

  //get the current date
  var currentDate = new Date();
  var date = currentDate.getDate();
  var day = currentDate.getDay();
  var time = currentDate.getHours() + ":" + currentDate.getMinutes();

  //get the current time
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();

  //check if the brewery is open and write status
  //0 = Sun, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  
  switch (day) {
    case 0:
      if ((currentHours > 13) && (currentHours < 21)) {
        document.getElementById("hours").innerHTML=hoursOpen;  
      } else {
          document.getElementById("hours").innerHTML=hoursClosed;
      }
      break;
    case 3:
      if ((currentHours > 18) && (currentHours < 22)) {
        document.getElementById("hours").innerHTML=hoursOpen;  
      } else {
          document.getElementById("hours").innerHTML=hoursClosed;
      }
      break;
    case 4:
      if ((currentHours > 15) && (currentHours < 22)) {
        document.getElementById("hours").innerHTML=hoursOpen;  
      } else {
          document.getElementById("hours").innerHTML=hoursClosed;
      }
      break;
    case 5:
      if ((currentHours > 12) && (currentHours < 23)) {
        document.getElementById("hours").innerHTML=hoursOpen;  
      } else {
          document.getElementById("hours").innerHTML=hoursClosed;
      }
      break;
    case 6:
      if ((currentHours > 12) && (currentHours < 23)) {
        document.getElementById("hours").innerHTML=hoursOpen;  
      } else {
          document.getElementById("hours").innerHTML=hoursClosed;
      }
      break;
    default:
        document.getElementById("hours").innerHTML=hoursClosed;
  }
console.log(time)
}, 2000);

</script>