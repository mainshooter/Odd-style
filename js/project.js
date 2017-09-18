(function() {
  var evenElements = selectAll("ul[data-show-oddeven] li");
  var counter = 0;
  evenElements.forEach((function(element, index, nodeList) {

    if (counter == 0) {
      // Odd element
      element.title = "Odd";
      counter++;
    }

    else {
      // Even element
      element.title = "Even";
      counter--;
    }
  }));
})();
