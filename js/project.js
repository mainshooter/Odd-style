(function() {
  var evenElements = selectAll("ul[data-show-oddeven] li");
  evenElements.forEach((function(element, index, nodeList) {

    if (checkIfNumberIsEven(index + 1) == true) {
      // Odd element
      element.title = "Even";
    }

    else {
      // Even element
      element.title = "Odd";
    }

    /**
     * Checks if a numbers is a int
     * @param  {[int or float]} number [The number we want to check]
     * @return {[boolean]}        [If it is even we return true else we return false]
     */
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
    }
  }));
})();
