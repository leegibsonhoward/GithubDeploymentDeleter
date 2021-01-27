import { Db } from 'mongodb';
import mongoose from 'mongoose';

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// (TODO): add custom logger and remove console.log's
const mongooseConnectDb = async (): Promise<Db> => {
    // (TODO): move URI to config file
    const mongoDB_URI = 'mongodb://127.0.0.1:27017/ghdd-db_dev';

    try {
        await mongoose.connect(mongoDB_URI, mongoOptions);
        console.log('database connected');
    } catch (err) {
        throw new Error(err);
    }

    mongoose.connection.on('disconnected', () =>
        console.log('database disconnected'),
    );

    mongoose.connection.on('reconnected', () =>
        console.log('database reconnected'),
    );

    return mongoose.connection.db;
};

export { mongooseConnectDb };
