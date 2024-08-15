const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT');

  const connections = {
    
   
    postgres: {
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', true) ,
      },
    
    },
    
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};



// module.exports = ({ env }) => ({
 
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST'),
//         port: env.int('DATABASE_PORT'),
//         database: env('DATABASE_NAME'),
//         user: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//         ssl: env.bool('DATABASE_SSL', true) ,
//       },
//     },
   
// });