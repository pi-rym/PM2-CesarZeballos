const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(
    res=>{
        app.listen(3000, () => {
            console.log("servidor escuchado en el puerto 3000")
        });
    }
)


    
