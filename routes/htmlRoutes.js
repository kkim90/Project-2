module.exports = function(app) {
  //Home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/home", function(req, res) {
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
