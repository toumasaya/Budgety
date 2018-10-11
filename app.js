// Budget controller
var budgetController = (function() {
  //
})();

// UI controller
var UIController = (function() {
  return {
    getInput: function() {
      return {
        type: document.querySelector(".add__type").value,
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value")
      };
    }
  };
})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Dosplay the budget on the UI
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
