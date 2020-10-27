const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"))
const control = require("./controllers/message_controller");

app.post("/api/messages", control.create);
app.get("/api/messages", control.read);
app.put("/api/messages/:id", control.update);
app.delete("/api/messages/:id", control.delete);


const port = 3001;
app.listen(port, () => console.log(`listening on: ${port}`));