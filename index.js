const express = require('express');
const server = express();



server.get('/', (req,res) => {
    return res.json({mensagem: 'nossa api esta funcionando'})
});

server.listen(3000, () => {
    console.log('console esta funcionando')
});