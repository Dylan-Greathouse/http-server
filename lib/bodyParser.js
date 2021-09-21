




const bodyParser = (req, res) => {
  if(req.method === 'POST' && req.method === 'PUT' && req.method === 'PATCH'){
    return res;
  } else {
    return null;
  }




//   return new Promise((resolve, reject) => {
//     // do work here
//   });

};



export default bodyParser;
