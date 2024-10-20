const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize; 
db.User = require('./user')(sequelize, Sequelize); 
db.Post = require('./user')(sequelize, Sequelize); 
db.HashTag = require('./hashtag')(sequelize, Sequelize);
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
// Post 와 Hashtag N : M 관계 설정
db.Post.belongsToMany(db.HashTag, {through : 'PostHashtag'});
db.HashTag.belongsToMany(db.Post, {through : 'PostHashtag'});

db.User.belongsToMany(db.User, {
  foreignKey : 'followingId',
  as : 'Followers',
  through : 'Follow',
});
db.User.belongsToMany(db.User, {
  foreignKey : 'followingId',
  as : 'Followings',
  through : 'Follow',
});

module.exports = db;
