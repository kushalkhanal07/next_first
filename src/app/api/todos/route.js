import todos from "../../../../todos"
import "@/config/db.js"
import {todoModel} from "@/model/todo.js"

export function GET(request) {
  console.log(todos)
  return Response.json(todos)
}

export async function POST(req) {
  try{
    const data = await req.json()
    console.log(data)
    const object=[]
    const query = req.url.split("?")[1].split("=")
    console.log(query)
    
    const result = await todoModel.create(data)
    return Response.json(result)
  }catch(err){
    console.log(err)
    return Response.json(err.message)
  }
}