const db = require("../../database/models")

const professionsController = {
    listado: async(req, res)=>{
        const profession = await db.professions.findAll()
        const data = []
        profession.forEach(profession=>{
            const profesion= {
                id: profession.id,
                profesion: profession.profesiones
            }
            data.push(profesion)
        })
        const response = {
            meta: {
                status: 200,
                totalAspirantes: data.length
            },
            data: data
        }
        return res.status(200).json(response)
    }
}

module.exports = professionsController;