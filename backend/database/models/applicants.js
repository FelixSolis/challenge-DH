module.exports = function (sequelize, DataTypes) {

    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.TEXT,
        },
        apellido: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        },
        telefono: {
            type: DataTypes.INTEGER,
        },
        linkedin: {
            type: DataTypes.TEXT,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        sexo: {
            type: DataTypes.TEXT,
        },
        img: {
            type: DataTypes.TEXT,
        },
        profesion_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        }
        
    }
    const config = {
        tableName: 'applicants',
        timestamps: false,
    }

    const applicants = sequelize.define('applicants', rows, config);

    applicants.associate = function (models) {
        applicants.belongsTo(models.professions, {
            foreignKey: 'profesion_id',
            as: 'professions'
        });
    }

    return applicants;
}