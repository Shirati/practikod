import  express  from 'express';
import { createRequire } from 'module';


const require = createRequire(import.meta.url);

const app=express()
const port=3000

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');



  app.get('/',(req,res)=>{
    sdk.auth('rnd_58N7hBqjEA93gScEYxnlzuMEafm4');
   sdk.getServices({limit: '20'})
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err));


})
app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`)
})

//rnd_58N7hBqjEA93gScEYxnlzuMEafm4




