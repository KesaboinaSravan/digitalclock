var hours = document.getElementById("hour");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");

var clock = setInterval(
    function time(){
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
         var seconds = date.getSeconds();
          if (hr<10){
             hr = "0"+hr;

          }
          if (min<10){
             min = "0"+min;
          }
          if (seconds<10){
             second = "0"+sec;
          }
         hours.textContent=hr;
          minute.textContent=min;
        second.textContent=seconds;

},1000)
