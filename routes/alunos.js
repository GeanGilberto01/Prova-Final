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

/* GET alunos listing. */
router.get(
    '/alunosGetAll',
    (req, res) => {
        connection.query(
            'SELECT * FROM alunos',
            (error, results, fields) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

router.get(
    '/alunosGetById/:id',
    (req, res) => {
        var id = parseInt(req.params.id)
        connection.query(
            'SELECT nome_aluno,data_matricula,id_turma FROM alunos WHERE id_aluno = ?',[id],
            (error, results) => {
                if (error) res.send(error);
                else res.send(results);
            })
    });

    router.post(
        '/alunosInsert',
        (req, res) => {
            var nome_aluno = req.body.nome_aluno
            var data_matricula = req.body.data_matricula
            var id_turma = req.body.id_turma
            connection.query(
                'INSERT INTO alunos(nome_aluno,data_matricula,id_turma) values(?,?,?)',
                [nome_aluno,data_matricula,id_turma],
                (error, results) => {
                    if (error) res.send(error);
                    else res.send(results);
                })
        });
        
    router.patch(
        '/alunosUpdate/:id',
        (req, res) => {
            var id = parseInt(req.params.id)
            var nome_aluno = req.body.nome_aluno
            var data_matricula = req.body.data_matricula
            var id_turma = req.body.id_turma
            connection.query(
                'UPDATE alunos set nome_aluno = ?,data_matricula = ?,id_turma = ? WHERE id_aluno = ?',
                [nome_aluno,data_matricula,id_turma,id],
                (error, results) => {
                    if (error) res.send(error);
                    else res.send(results);
                })
        });
        
    router.delete(
        '/alunosDelete/:id',
        (req, res) => {
            var id = parseInt(req.params.id)
            connection.query(
                'DELETE FROM alunos WHERE id_aluno = ?',
                [id],
                (error, results) => {
                    if (error) res.send(error);
                    else res.send(results);
                })
        });


module.exports = router;