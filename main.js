function myFunction() {
    document.getElementById("ul-dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
      var dropdowns = document.getElementsByClassName("ul-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function alert() {
    document.getElementById("submitMe");
  }

  button.onclick = function(alert){
    alert ("thank You!");
  }