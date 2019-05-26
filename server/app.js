const express = require("express");
const middleware = require("./middleware");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// register middlewares
middleware(app);

// routes
const feedings = require("./routes/api/feedings");

app.use("/api/feedings", feedings);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname + "/public/")));

  app.get(/.*/, (req, res) => res.sendFile("/public/index.html"));
}

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
