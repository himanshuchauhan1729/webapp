const express = require("express")

require("./db/config")


const conversationRoute = require("./routes/conversations");
const chatRoute = require("./routes/chats");
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");



const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/user",userRoute);
app.use("/product",productRoute);
app.use("/conversation",conversationRoute);
app.use("/chats",chatRoute);

app.listen(5000)