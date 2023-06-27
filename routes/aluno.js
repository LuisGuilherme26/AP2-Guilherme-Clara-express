var express = require('express');
var router = express.Router();
var alunoService = require("../services/aluno.service");

router.get(
    "/listar",
    (req, res) => {
        alunoService.list(req, res)
    }
)

router.get(
    "/login",
    (req, res, next) => {
        return res.json(alunoService.login())
    }
)

router.post(
    "/registrar",
    (req, res, next) => {
        alunoService.register(req, res)
    }
)

router.get(
    "/recuperar/:id",
    (req, res, next) => {
        alunoService.retrieve(req, res)
    }
)

router.put(
    "/editar/:id",
    (req, res, next) => {
        alunoService.update(req, res)
    }
)

router.delete(
    "/apagar/:id",
    function (req, res, next) {
        alunoService.apagar(req, res)
    }
);


module.exports = router;
