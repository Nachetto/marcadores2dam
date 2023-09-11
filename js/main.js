window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 24 ? hour - 24 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 24 ? "" : "";
  
      // get date components
      const month = today.getMonth();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "Enero ",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo ",
        "Junio ",
        "Julio ",
        "Augosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ];
  
      //get current date and time
      const date = day + " de " + monthList[month] + " ";
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " · " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });