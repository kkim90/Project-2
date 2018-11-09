var nameInput = $("#name");
var styleInput = $("#style");
var abvInput = $("#abv");
var ibuInput = $("#ibu");
var descriptionInput = $("#description");
// eslint-disable-next-line no-unused-vars
var submitBtn = $("#submit");

var addRecipe = $("#addRecipe");

$(addRecipe).on("#submit", function handleFormSubmit() {
  var postRecipe = {
    name: nameInput.val().trim(),
    style: styleInput.val().trim(),
    abv: abvInput.val().trim(),
    ibu: ibuInput.val().trim(),
    description: descriptionInput.val().trim()
  };
  console.log(postRecipe);
});

// eslint-disable-next-line no-unused-vars
function submitPost(Recipes) {
  $.post("/api/recipes/", Recipes, function() {
    window.location.href = "/findBrew";
  });
}
