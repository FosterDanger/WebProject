const express = require("express");
const Post = require('../models/post');

const router = express.Router();

router.post("",(req, res, next)=>{
  const post = new Post({
    nombre: req.body.nombre,
    estado: req.body.estado,
    ciudad: req.body.ciudad,
    sucursal: req.body.sucursal,
    servicio: req.body.servicio,
    calificacionServicio: req.body.calificacionServicio,
    recomendacion: req.body.recomendacion
  });
  post.save().then(createdPost => {
    //console.log(result);
    res.status(201).json({
      message: 'Post added succesfull',
      postId: createdPost._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    nombre: req.body.nombre,
    estado: req.body.estado,
    ciudad: req.body.ciudad,
    sucursal: req.body.sucursal,
    servicio: req.body.servicio,
    calificacionServicio: req.body.calificacionServicio,
    recomendacion: req.body.recomendacion
  });
  Post.updateOne({_id: req.params.id}, post).then(result =>{
    //console.log(result);
    res.status(200).json({message: "Post update Succesfully"});
  })
});

 router.get("", (req, res, next)=>{
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Publicaciones expuestas con Exito',
      datos: documents
    });
  })
});

router.get("/:id", (req,res,next) =>{
  Post.findById(req.params.id).then(post => {
    if(post){
      res.status(200).json(post);
    }else{
      res.status(404).json({message: 'Post no encontrado'});
    }
  });
});

/* app.delete('/api.posts.eliminar/:id', (req, res) =>{
  Post.deleteOne({id: req.params.id}).then(result =>{
    console.log(result)
    res.status(200).json({
      //console.log(resultado)
      result
    });
  });
}) */

router.delete("/:id",(req, res, next)=>
{
  Post.deleteOne({_id: req.params.id}).then(result =>{
    console.log(result);
    res.status(200).json({message:'Publicacion Eliminada!'})
  });
});

module.exports = router;
