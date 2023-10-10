import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//import userRouter from "./routes/user";
import { authenticator_middleWare } from './middleware/auth';

const app = express();
const portNumber = 3000;
app.use(cors());
app.use(authenticator_middleWare);
app.use(express.json());
import {router as adminRoute} from "./routes/admin";
import {router as userRoute} from "./routes/user";
import {router as utilityRoute} from "./routes/utility";
app.use("/admin", adminRoute);
app.use("/users", userRoute);
app.use("/util", utilityRoute);

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
try{
  mongoose.connect('mongodb+srv://vikasbashu:Cb21DWHdt02WyvIc@tycers.o6r8vsu.mongodb.net/CourseBay?retryWrites=true&w=majority');
}catch(error: any){
      console.log(error.message);
      //console.log(mongoose.Error.MongooseServerSelectionError.messages);
}

app.listen(portNumber, () => console.log(`Server running on port ${portNumber}`));
