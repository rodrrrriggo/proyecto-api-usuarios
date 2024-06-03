const {request , response} = require("express");
const {usuarios} = require ("../usuarios");

const getUsuarios = (req, res)=>{

    return res.json ({
        ok:true,
        statusCode:200,
        usuarios

    })

};

const getUsuarioById = (req = request, res = response)=>{

    let id = parseInt(req.params.id);

    let usuarioAbuscar = "";

    usuarioAbuscar = usuarios.find((usuarios)=>{
        return usuarios.id == id;
    });

    if(usuarioAbuscar){
        return res.json({
            ok:true,
            statusCode:200,
            usuarioAbuscar

        });
        }else{
            return res.json({
                ok:true,
                statusCode:404,
                msg: "Id erroneo, intente nuevamente"
            })
    }
};


module.exports = {
    getUsuarios,
    getUsuarioById
}
