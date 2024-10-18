module.exports = (sequelize, DataTypes) => (
    // 게시글 정보 저장
    sequelize.define('posts', {
        content : {
            type : DataTypes.STRING(140),
            allowNull : false
        },
        img : {
            type : DataTypes.STRING(200),
            allowNull : true,
        },
    }, {
        timestamps : true,
        paranoid : true,
    })

);