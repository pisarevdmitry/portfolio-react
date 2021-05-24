const mongoose = require('mongoose');
const config = require('./server/config/config');
require('./server/api/models/user');

mongoose
    .connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {
        useMongoClient: true
    })
    .catch(e => {
        console.error(e);
        throw e;
    });
mongoose.connection.on('connected', function() {
    console.log(
        `Mongoose default connection open mongodb://${config.db.host}:${
            config.db.port
            }/${config.db.name}`
    );
});

const Model = mongoose.model('user');
const admin = new Model({
    login: 'admin'
});
admin.setPassword('123');
admin.save()
    .then(() => {
        mongoose.connection.close(function() {
            process.exit(0);
        });
    })
