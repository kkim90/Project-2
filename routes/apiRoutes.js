var db = require("../models");

module.exports = function(app) {
  // View all Recipes
  app.get("/api/recipes", function(req, res) {
    db.BeerRecipe.findAll({}).then(function(dbBeerRecipe) {
      res.json(dbBeerRecipe);
    });
  });

  // Add new Recipe
  app.post("/api/recipes", function(req, res) {
    db.BeerRecipe.create({
      name: req.body.name,
      style: req.body.style,
      abv: req.body.abv,
      ibu: req.body.ibu,
      description: req.body.description
    }).then(function(dbBeerRecipe) {
      res.json(dbBeerRecipe);
    });
  });

  // Delete Recipe
  app.delete("/api/recipes/:id", function(req, res) {
    db.BeerRecipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBeerRecipe) {
      res.json(dbBeerRecipe);
    });
  });

  // Update Recipe
  app.put("/api/recipes", function(req, res){
    db.BeerRecipe.update({
      name: req.body.name,
      style: req.body.style,
      abv: req.body.abv,
      ibu: req.body.ibu,
      description: req.body.description
    }).then(function(dbBeerRecipe){
      res.json(dbBeerRecipe);
    });
  });
};
