function index(req, res) {
  res.json({
    message: "Welcome Brain Child Developer",
    documentation_url: "https://github.com/relative-rene/blog",
    base_url: "http://brainchilddeveloper.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/posts", description: "Main Page, get all posts"},
      {method: "POST", path: "/api/posts", description: "creating new post"},
      {method: "GET", path: "/api/posts/:id", description: "show specific blog post"},
      {method: "DELETE", path: "/api/posts/:Id", description: "Destroy/remove specific posts"},
      {method: "PUT", path: "/api/posts/:Id", description: "Update specific posts"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
