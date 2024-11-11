const jsonServer = require('json-server')
const path = require('path') 
const express = require('express')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)

server.use('/images', express.static(path.join(__dirname,'public', 'images')))
server.use('/', router)
server.listen(process.env.PORT || 6001, () => {
  console.log('JSON Server is running')
})