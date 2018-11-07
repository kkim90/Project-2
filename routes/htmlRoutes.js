module.exports = function(app) {
  // Load Home page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/findbrew", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/findbrew.html"));
  });

  app.get("/learnbrew", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/learnbrew.html"));
  });
  app.get("/addbrew", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addbrew.html"));
  });

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbBeerRecipe) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/recipe/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbBeerRecipe) {
  //     res.render("recipe", {
  //       recipe: dbBeerRecipe
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
