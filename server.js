//Dependencia commonjs
const express = require('express')

//crear el objeto app
const app = express()

//primera prueba de url del servidor
app.get('/prueba', 
                function(request, response){
                 response.send("Holaaaaaaaaaa");
})

//uris  de bootcamps
//traer todos los campos bootcamps
app.get('/api/v1/devcamp/bootcamps',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los botcamps"   
                        })
        })

//traer todos los campos bootcamps por id
app.get('/api/v1/devcamp/bootcamps/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con bootcamp con id ${request.params.id}`   
                        })
        })

//crear todos loscampos de bootcamps
app.post('/api/v1/devcamp/bootcamps',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear botcamp"   
                        })
        })

//actualizar bootcamp por id 
app.put('/api/v1/devcamp/bootcamps/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando bootcamp con id ${request.params.id}`    
                        })
        })

//eliminar bootcamp por id 
app.delete('/api/v1/devcamp/bootcamps/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando bootcamp con id ${request.params.id}`    
                        })
        })

//evidencia: uris de courses
//traer todos los campos courses
app.get('/api/v1/devcamp/courses',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los courses"   
                        })
        })

//traer todos los campos courses por id
app.get('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con courses con id ${request.params.id}`   
                        })
        })

//crear todos los campos de courses
app.post('/api/v1/devcamp/courses',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear course"   
                        })
        })

//actualizar courses por id 
app.put('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando course con id ${request.params.id}`    
                        })
        })

//eliminar courses por id 
app.delete('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando courses con id ${request.params.id}`    
                        })
        })

//evidencia: uris para reviews
//traer todos los campos reviews
app.get('/api/v1/devcamp/reviews',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los reviews"   
                        })
        })

//traer todos los campos reviews por id
app.get('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con review con id ${request.params.id}`   
                        })
        })

//crear todos los campos de reviews
app.post('/api/v1/devcamp/reviews',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear review"   
                        })
        })

//actualizar reviews por id 
app.put('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando review con id ${request.params.id}`    
                        })
        })

//eliminar reviews por id 
app.delete('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando review con id ${request.params.id}`    
                        })
        })

//evidencia: uris para users
//traer todos los campos users
app.get('/api/v1/devcamp/users',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los users"   
                        })
        })

//traer todos los campos users por id
app.get('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con user con id ${request.params.id}`   
                        })
        })

//crear todos los campos de users
app.post('/api/v1/devcamp/users',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear user"   
                        })
        })

//actualizar users por id 
app.put('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando users con id ${request.params.id}`    
                        })
        })

//eliminar users por id 
app.delete('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando users con id ${request.params.id}`    
                        })
        })


//establcer  servidor
const PUERTO=4500
app.listen(PUERTO,
        console.log("Servidor escuchand en el puerto: "+ PUERTO))