var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prova'
});

connection.connect();

/* GET turmas listing. */
router.get(
    '/turmasGetAll',
    (req, res) => {
        connection.query(
            'SELECT * FROM turmas',
            (error, results, fields) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

router.get(
    '/turmasGetById/:id',
    (req, res) => {
        var id = parseInt(req.params.id)
        connection.query(
            'SELECT nome_turma,curso,data_inicio FROM turmas WHERE id_turma = ?',
            [id],
            (error, results) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

router.post(
    '/turmasInsert',
    (req, res) => {
        var nome_turma = req.body.nome_turma
        var curso = req.body.curso
        var data_inicio = req.body.data_inicio
        connection.query(
            'INSERT INTO turmas(nome_turma,curso,data_inicio) values(?,?,?)',
            [nome_turma, curso, data_inicio],
            (error, results) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

router.patch(
    '/turmasUpdate/:id',
    (req, res) => {
        var id = parseInt(req.params.id)
        var nome_turma = req.body.nome_turma
        var curso = req.body.curso
        var data_inicio = req.body.data_inicio
        connection.query(
            'UPDATE turmas set nome_turma = ?, curso = ?, data_inicio = ? WHERE id_turma = ?',
            [nome_turma, curso, data_inicio, id],
            (error, results) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

router.delete(
    '/turmasDelete/:id',
    (req, res) => {
        var id = parseInt(req.params.id)
        connection.query(
            'DELETE FROM turmas WHERE id_turma = ?',
            [id],
            (error, results) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });


module.exports = router;