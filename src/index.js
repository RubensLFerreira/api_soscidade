import { server } from './server/Server.js';

server.listen(process.env.PORT||8080, () => {
  console.log(`\nServer running at port http://localhost:${process.env.PORT}/\n`);
});
