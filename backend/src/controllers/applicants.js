const db = require("../../database/models")

const applicantsControllers = {
    listado: async (req, res) => {
        const applicant = await db.applicants.findAll({
            include: [{ association: "professions" }]
        })
        const data = []
        applicant.forEach(aplicant => {
            const aspirante = {
                id: aplicant.id,
                dni: aplicant.dni,
                nombre: aplicant.nombre,
                apellido: aplicant.apellido,
                email: aplicant.email,
                telefono: aplicant.telefono,
                linkedin: aplicant.linkedin,
                fechaNacimiento: aplicant.fechaNacimiento,
                sexo: aplicant.sexo,
                img: aplicant.img,
                profesion: aplicant.professions.profesiones,
                detalle: `http://localhost:10/applicants/${aplicant.id}`
            }
            data.push(aspirante)
        })
        const response = {
            meta: {
                status: 200,
                totalAspirantes: data.length
            },
            data: data
        }
        return res.status(200).json(response)
    },
    detail: async (req, res) => {
        const id = req.params.id;
        const aplicant = await db.applicants.findByPk(id, {
            include: [{ association: "professions" }]
        })
        const response = {
            id: aplicant.id,
            dni: aplicant.dni,
            nombre: aplicant.nombre,
            apellido: aplicant.apellido,
            email: aplicant.email,
            telefono: aplicant.telefono,
            linkedin: aplicant.linkedin,
            fechaNacimiento: aplicant.fechaNacimiento,
            sexo: aplicant.sexo,
            img: aplicant.img,
            profesion: aplicant.professions.profesiones,
        }
        return res.status(200).json(response)

    }

}

module.exports = applicantsControllers;