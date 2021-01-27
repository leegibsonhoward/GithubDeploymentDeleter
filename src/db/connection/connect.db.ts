import { Db } from 'mongodb';
import mongoose from 'mongoose';
import { config } from '../../config';

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// (TODO): add custom logger and remove console.log's
const mongooseConnectDb = async (): Promise<Db> => {
    try {
        await mongoose.connect(`${config.db.databaseURI}`, mongoOptions);
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
