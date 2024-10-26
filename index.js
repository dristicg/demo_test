const express = require("express"); // or we can use-----impot express as express;
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//Routes

// app.get("/users", (req, res) => {
//     return res.json(users);
// });

// app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))


app.get("/courses", (req, res) => {
    res.json(courses);
  });

  

  app.get("/courses/:name", (req, res) => {
    const course = courses[req.params.name];
    if (course) {
      res.json(course);
    } else {
      res.status(404).send("Course not found");
    }
  });
  