const mongo = require('../database/conexaoMongo');
var usert = require('../entidades/usuario');
const assert = require('assert');
var ObjectId = require("mongodb").ObjectId;

class usuarioMongo{

    inserir(usuario){

        var usuarioInserir = {
            "nome": usuario.getNome(),
            "email": usuario.getEmail(),
            "sexo": usuario.getDataNascimento(),
            "nomeUsuario": usuario.getNomeUsuario(),
            "senha": usuario.getSenha(),
            "peso": usuario.getPeso(),
            "altura": usuario.getAltura(),

        }
        mongo.connect((err)=>{
            assert.equal(null, err);
            const tbUsuario = mongo.db("nutristats");

            tbUsuario.collection('usuario').insertOne(usuarioInserir,(erro,r)=>{
                mongo.close();
            });
        }); 
    }
    
    atualizar(usuario){
        var usuarioInserir = {
            "Id": usuario.getId(),
            "nome": usuario.getNome(),
            "email": usuario.getEmail(),
            "sexo": usuario.getDataNascimento(),
            "nomeUsuario": usuario.getNomeUsuario(),
            "senha": usuario.getSenha(),
            "peso": usuario.getPeso(),
            "altura": usuario.getAltura(),

        }
        
        mongo.connect((err)=>{
            const banco = mongo.db('nutristats');
            const userCol = banco.collection('usuario');
            userCol.findOne(new ObjectId(usuarioInserir.Id)).then((usuario)=>{
                console.log(usuario);
                userCol.updateOne(usuario,{$set: usuarioInserir},(erro,r)=>{
                    assert.equal(null, err);
                    assert.equal(1, r.matchedCount);
                    assert.equal(1, r.modifiedCount);
            
                })    
            }).catch((erro)=>{
                
                console.log("Erro ao buscar" + erro);
            });
  
        });
    }

    buscarPorId(id){
        mongo.connect((err)=>{
            assert.equal(null, err);
            const bdUsuario = mongo.db("nutristats");
            console.log(bdUsuario);
            bdUsuario.collection('usuario').findOne(new ObjectId(id)).then((usuario)=>{
                return result;
            }).catch((erro)=>{
                
                console.log("Erro ao buscar" + erro);
            });
        });
    }



}
module.exports = {Usuario: usuarioMongo};