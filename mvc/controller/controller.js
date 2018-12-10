const model = require("../model/model.js")

const getAllSnacks =(req,res,next)=>{
  let all = model.getAll()
  res.status(200).json({data:all})
}
const getOneSnack =(req,res,next)=>{
  let one = model.getOne(req.params.id)
  return one.error ? next({status: 404, message: "can not find",errors: one.error}) : res.status(200).json({data:one})
}
const createSnack =(req,res,next)=>{
  let post = model.create(req.body)
  return post.error ? next({status:400,message:"Failed to create new snack",errors: post.error}) : res.status(201).json({data:post})
}
const updateSnack =(req,res,next)=>{
  let put = model.update(req.body,req.params.id)
  return put.error ? next({status: 400, message: "Failed to update snack", errors: put.error}) : res.status(200).json({data:put})
}
const deleteSnack =(req,res,next)=>{
  let del = model.deleteSnack(req.params.id)
  return del.error ? next({ status: 404, message: "Failed to delete snack", errors: del.error }) : res.status(204).json({data:del})
}
module.exports = { getAllSnacks, getOneSnack, createSnack, updateSnack, deleteSnack }
