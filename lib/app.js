import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const css = '../public/css/main.css';


const staticRoutes = async (req) => {
  if(req.method !== 'GET') return null;
  const URL = req.url === '/' ? 'index.html' : req.url;
  const trueUrl = path.join(__dirname, '../public', URL);
  console.log(trueUrl);

  try{
    return await readFile(trueUrl, 'utf-8');
  }catch(err){
    return null;
  }
};



const app = async (req, res) => {
  const routes = await staticRoutes(req);
  console.log('fire', routes);
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
