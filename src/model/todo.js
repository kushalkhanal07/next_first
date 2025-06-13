import mongoose from "mongoose"

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Todo text is required"]
  }
},{
  versionKey:false
})

export const todoModel = mongoose.models.todo || mongoose.model("todo", schema)