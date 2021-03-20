const express = require('express');
const sql = require('./dbConfig');
const router = express.Router();

router.get('/', (req, res) => {

    console.log(req.query.categorie);
    if(!req.params.id) {
        sql.query('select * from categories order by id asc', (err, results, fields) => {
            res.render('index', {data:results});
        });
    } else {
        sql.query(`select * from categories where id = ${req.params.id}`,(err, results, fields) => {
            res.render('index', {data:results});
        });
    }

    let existe = sql.query('select * from categories where categories = ?', [req.query.categorie])
    console.log(existe.query)
    if(!existe){
        sql.query('INSERT INTO `categories`(`categories`) VALUES (?)', [req.query.categorie]);
    } else {
        console.log('Categoria já existe no sistema!');
    }

});

router.get('/add', (req, res) => {
    res.render('add');
})

router.delete('/deletar/:id?', (req, res) => {
    sql.query('delete from categories where id = ?', [req.params.id]);
    console.log('deletado com sucesso');
})

module.exports = router;

