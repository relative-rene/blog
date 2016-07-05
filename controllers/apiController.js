function index(req, res) {
  res.json({
    base_url: "https://github.com/relative-rene/express-personal-api", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/topics", description: "splash page SPA"},
      {method: "GET", path: "/api/topics/:eventsId", description: "show specific blog post"},
      {method: "POST", path: "/api/topics/events", description: "creating new blog post"},
      {method: "DELETE", path: "/api/topics/:eventId", description: "canceling/removing specific Blog"},
      {method: "PUT", path: "/api/topics/:eventId", description: "edit specific blog post"}
]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
