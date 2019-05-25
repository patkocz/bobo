const express = require("express");
const middleware = require("./middleware");

const app = express();
const port = process.env.port || 3000;

// register middlewares
middleware(app);

// routes
const feedings = require("./routes/api/feedings");

app.use("/api/feedings", feedings);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/index.html"));

  app.get(".*", (req, res) => res.sendFile("/public/index.html"));
}

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
