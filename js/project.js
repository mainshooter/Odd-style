(function() {
  var evenElements = selectAll("ul[data-show-oddeven] li");
  var counter = 1;
  evenElements.forEach((function(element, index, nodeList) {

    if (checkIfNumberIsEven(counter) == true) {
      // Odd element
      element.title = "Even";
    }

    else {
      // Even element
      element.title = "Odd";
    }
    counter++;

    function checkIfNumberIsEven(number) {
      var result = number / 2;
      if (Number.isInteger(result) == true) {
        // It is even
        return(true);
      }

      else {
        // It isn't even
        return(false);
      }
      console.log(" ");
    }
  }));
})();
