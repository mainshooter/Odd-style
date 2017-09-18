(function() {
  var evenElements = selectAll("ul[data-show-oddeven] li");
  var counter = 0;
  evenElements.forEach((function(element, index, nodeList) {
    console.log(element);
    console.log(index);
    console.log(nodeList);
    if (counter == 0) {
      // Even element
    }

    else {
      // Uneven element

    }
  }));
})();
