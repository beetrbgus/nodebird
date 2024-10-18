module.exports = (sequelize, DataTypes) => (
    // 해시태그 정보 저장
    sequelize.define('hashtag', {
        title : {
            type : DataTypes.STRING(15),
            allowNull : false,
            unique : true
        },
    }, {
        timestamps : true,
        paranoid : true,
    })
);