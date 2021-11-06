const dotenv = require("dotenv");
dotenv.config();

const dockerMongo = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@bdmis_mongo/${process.env.DB_NAME}?authSource=admin`;

module.exports = {
  MONGO_URI: process.env.DOCKER
    ? dockerMongo
    : process.env.MONGO_URI || "mongodb://localhost/bdmis_cms",
};
