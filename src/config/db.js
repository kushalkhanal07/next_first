import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@127.0.0.1:27017/todos?replicaSet=myReplicaSet&authSource=admin")


