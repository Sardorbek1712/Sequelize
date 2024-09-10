const express = require("express")
const { appConfig } = require("./config/app.config");
const { sequelize } = require("./config/db.config");

const app = express()


sequelize
    .sync({ force: false })
  .then(() => {console.log("Db Connected")})
  .catch((err) => {console.log(err.message)});


app.all("*",(req,res) => {
    res.status(400).send({
        message: `Given url ${req.url} not found`,
    })
})
app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Listening on port ${appConfig.port}`)
})