module.exports = ({ env }) => {
  const docker = env("DOCKER");
  if (docker) {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            host: env("DATABASE_HOST", "bdmis_mongo"),
            srv: env.bool("DATABASE_SRV", false),
            port: env.int("DATABASE_PORT", 27017),
            database: env("DATABASE_NAME", "brighter_dawn_cms"),
            username: env("DATABASE_USERNAME", "peter"),
            password: env("DATABASE_PASSWORD", "ifeanyi123"),
          },
          options: {
            authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
            ssl: env.bool("DATABASE_SSL", false),
          },
        },
      },
    };
  } else {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            uri: env("DATABASE_URI", "mongodb://localhost/brigher_dawn_cms"),
            srv: env.bool("DATABASE_SRV", true),
            port: env.int("DATABASE_PORT", 27017),
            database: env("DATABASE_NAME", "brighter_dawn_cms"),
          },
          options: {
            authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
            ssl: env.bool("DATABASE_SSL", true),
          },
        },
      },
    };
  }
};
