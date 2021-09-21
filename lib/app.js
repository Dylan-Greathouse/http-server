import { readFile } from 'fs/promises';
import path from 'path';
// import path from 'path';

// const css = '../public/css/main.css';

// export class AppRoutes {
//   constructor() {
//     this.public = public;
//   }
// }
const html = './public/index.html';

const staticRoutes = async (req) => {
  if(req.method !== 'GET') return null;
  // const URL = req.url === '/' ? 'index.html'

  try{
    return await readFile(`${html}`, 'utf-8');
  }catch(err){
    return null;
  }
};



const app = async (req, res) => {
  const routes = await staticRoutes(req);

  if(routes){
    console.log('routes', routes);
    res.statusCode = 200;
    res.end(routes);
    return;
  }


  // const [, resource] = req.url.split('/');
  // const route = routes[resource];

  // if (route) {
  //   try {
  //     const routeHandler = route[req.method.toLowerCase()];
  //     await routeHandler(req, res);
  //   } catch (err) {
  //     res.statusCode = 500;
  //     // res.end(error.message);
  //     res.end('Internal Server Error');
  //   }
  // } else {
  //   res.statusCode = 404;
  //   res.setHeader('Content-Type', 'text/html');
  //   res.end('<html><body><h1>Not Found</h1></body></html>');
  // }
};

export default app;
