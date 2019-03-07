let mongoose = require('mongoose');
let env = process.env.MONGODB_URI || 'development'
let config = require('./config/mongo')[env]




module.exports = () => {


    var envUrl = process.env[config.use_env_variable];
    var localUrl = `mongodb://${ config.host }/${ config.database }`;
    var mongoUrl = envUrl ? envUrl : localUrl;
    return mongoose.connect(mongoUrl, {useNewUrlParser: true, useFindAndModify: false});
};