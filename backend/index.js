const Hapi = require('@hapi/hapi');
const {api} = require('./api');
const {initDB} = require('./db');

const startServer = async () => {
    try {
        await initDB();
        const server = Hapi.server({
          port: 3000,
          host: 'localhost',
          routes: {
            cors: {
              origin: ['*'],
            },
          },
        });
        server.route(api);

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
      
    } catch (e) {
        console.log(e)
    }
}

startServer();