const uuid = require('uuid/v4')
const snacks = [{id:8,name:"oreos",price:"$2.00",calories:300},
{id:9,name:"nutter butters",price:"$2.00",calories:300},
{id:10,name:"vanilla wafers",price:"$2.00",calories:300},
{id:11,name:"thin mints",price:"$2.00",calories:300}]

const getAll =()=> snacks
const getOne =(id)=>{
  const snack = snacks.find(e=>e.id == id)
  return !snack ? { status: 404, error: "snack with that id doesn't exist"} : snack
}
const create =(body)=>{
  const {name,price,calories} = body
  let error = []
  let response
  if (!name || !price || !calories) {
    error.push("field required")
    response = {error}
  }else{
    const newSnack = {id:uuid(),name,price,calories}
    snacks.push(newSnack)
    response = newSnack
  }
  return response
}
const update =(body,id)=>{
  if (!body.name || !body.price || !body.calories) {
    return { status: 400, error: "Field required"}
  }
  let snack = snacks.find(e=>e.id == id)
  snack.name = body.name
  snack.price = body.price
  snack.calories = body.calories
  return !snack?{status: 404, error : "Could not update snack with that id"}:snack
}
const deleteSnack =(id)=>{
  if(!id){return {status:404,error:"no id"}}
  let snack = snacks.find(e=>e.id==id)
  let index = snacks.indexOf(snack)
  if(!snack){return {status:404,error:"id not found"}}
  else{
    snacks.splice(index,1)
    return snack
  }
}

module.exports = { getAll, getOne, create, update, deleteSnack }
