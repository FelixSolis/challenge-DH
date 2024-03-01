const db = require("../../database/models")

const applicantsControllers = {
    listado: async (req, res) => {
        const applicant = await db.applicants.findAll({
            include: [{ association: "professions" }]
        })
        const data = []
        applicant.forEach(aplicant => {
            // const aspirante = {
            //     ...aplicant,
            //     // detalle: `http://localhost:8001/api/products/${product.id}`
            // }
            data.push(aplicant)
        })
        const response = {
            meta: {
                status: 200,
            },
            data: data
        }
        return res.status(200).json(response)
    }

}

module.exports= applicantsControllers;