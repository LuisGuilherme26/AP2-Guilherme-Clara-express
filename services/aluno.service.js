const AlunoModel = require("../models/aluno.model")

const login = {nome: "Kolin", senha: "garrafa"}

class AlunoService{
    static list(req,res){
        AlunoModel.find()
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }

    static register(req,res){
        AlunoModel.create(req.body)
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }

    static retrieve(req,res){
        AlunoModel.findById(req.params.id)
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }

    static update(req,res){
        AlunoModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then(
            (aluno)=>{
                res.status(201).json(aluno)
            }
        )
    }

    static apagar(req, res) {
        AlunoModel.findByIdAndRemove(req.params.id)
        .then(
            (aluno) => {
                res.status(201).json(aluno)
            }
        )
    }

    static login() {
        return login
    }
}

module.exports = AlunoService