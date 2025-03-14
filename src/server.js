const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
