const app = require("./app");
const connectDatabase = require("./db/database");



// Handeling uncaught exception 
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handeling uncaught exception`
    );
});

//connect db
connectDatabase();

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"config/.env",
    })
};

// Create Server
const server = app.listen(process.env.PORT, () => {
    console.log (`Server is running on http://localhost:${process.env.PORT}`)
});

// Unhandled promise rejection 

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);

    server.close(()=> {
        process.exit(1);
    });
});
