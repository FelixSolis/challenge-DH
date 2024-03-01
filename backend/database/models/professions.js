module.exports = function (sequelize, DataTypes) {

    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        profesiones: {
            type: DataTypes.TEXT,
        },
    }
    const config = {
        tableName: 'professions',
        timestamps: false,
    }

    const professions = sequelize.define('professions', rows, config);

    professions.associate = function (models) {
        professions.hasMany(models.applicants, {
            foreignKey: 'profesion_id',
            as: 'applicants'
        });
    }
    return professions;
}