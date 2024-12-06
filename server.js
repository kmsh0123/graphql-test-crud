import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/userSchema.js";
import resolvers from "./resolvers/userResolver.js";

dotenv.config()

const app = express();
const port = process.env.PORT
const DB = process.env.MONGO_URL

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  )

mongoose.connect(DB).then(()=>(
    app.listen(port,()=>(
        console.log(`Server on port ${port} and Database Connected`)
    ))
)).catch((error)=>console.log(error))

