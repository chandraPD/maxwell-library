      const currentLocation = window.location.pathname;
      const menuItem = document.querySelectorAll('a');
      var indexPage = document.getElementById('index');

      var historyPage = document.getElementById('history');
      var historyClass = historyPage.className;
      
      const activeClass = "active"
  
         
      if(currentLocation === "/history.html") {
        historyPage.className += " " + activeClass;
        indexPage.classList.remove("active")
      } else if(currentLocation === "/index.html") {
        indexPage.className += " " + activeClass;
        historyPage.classList.remove("active")
      }
      
      console.log(currentLocation)
      console.log(historyClass)

