var nameInput = $("#name");
var styleInput = $("#style");
var abvInput = $("#abv");
var ibuInput = $("#ibu");
var descriptionInput = $("#description");

// eslint-disable-next-line no-unused-vars
var updating = false;

// eslint-disable-next-line no-unused-vars
function getPostData(Recipes) {
  $.get("/api/Recipes/" + id, function(data) {
    if (Recipes) {
      nameInput.val(data.name);
      styleInput.val(data.styles);
      abvInput.val(data.abv);
      ibuInput.val(data.abv);
      descriptionInput.val(data.abv);

      updating = true;
    }
  });
}
