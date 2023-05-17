import express from 'express'
// import require from 
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const app=express()
const port=3000;

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_An5aF0HJkvfi5xNjHfHAJh7BSzgG');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  app.get('/',(req,res)=>{
    res.status(200).json([
  {
    "cursor": "mmgIJbNRTERhcGU3YXZqYmJqcjY1a3Nn",
    "service": {
      "id": "srv-chgkape7avjbbjr65ksg",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2023-05-14T20:32:38.349245Z",
      "name": "ToDoNode",
      "notifyOnFail": "default",
      "ownerId": "usr-ch54u5ks3fvqdilh4gfg",
      "repo": "https://github.com/t058329/ToDoListNode",
      "rootDir": "",
      "slug": "todonode-nb8z",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2023-05-14T20:56:46.656581Z",
      "serviceDetails": {
        "disk": null,
        "env": "node",
        "envSpecificDetails": {
          "buildCommand": "npm i",
          "startCommand": "node index.js"
        },
        "healthCheckPath": "",
        "numInstances": 1,
        "openPorts": null,
        "parentServer": null,
        "plan": "free",
        "pullRequestPreviewsEnabled": "no",
        "region": "singapore",
        "url": "https://todonode-nb8z.onrender.com"
      }
    }
  },
  {
    "cursor": "0YUhloWSeyltbm03YXZqZGwyOWtibGww",
    "service": {
      "id": "srv-ch9vmnm7avjdl29kbll0",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2023-05-04T18:37:18.901699Z",
      "name": "ToDoServer",
      "notifyOnFail": "default",
      "ownerId": "usr-ch54u5ks3fvqdilh4gfg",
      "repo": "https://github.com/t058329/ToDoList",
      "rootDir": "",
      "slug": "todoserver-xrby",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2023-05-15T14:54:26.134646Z",
      "serviceDetails": {
        "disk": null,
        "env": "docker",
        "envSpecificDetails": {
          "dockerCommand": "",
          "dockerContext": ".",
          "dockerfilePath": "Dockerfile"
        },
        "healthCheckPath": "",
        "numInstances": 1,
        "openPorts": null,
        "parentServer": null,
        "plan": "free",
        "pullRequestPreviewsEnabled": "no",
        "region": "singapore",
        "url": "https://todoserver-xrby.onrender.com"
      }
    }
  },
  {
    "cursor": "JUxQ_VC3N84xOWRnazRxOHBhc3ZoZGMw",
    "service": {
      "id": "srv-ch5519dgk4q8pasvhdc0",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2023-04-27T10:38:29.895513Z",
      "name": "ToDoClient",
      "notifyOnFail": "default",
      "ownerId": "usr-ch54u5ks3fvqdilh4gfg",
      "repo": "https://github.com/t058329/ToDoListClient",
      "rootDir": "",
      "slug": "todoclient-981i",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "static_site",
      "updatedAt": "2023-05-13T22:06:35.275676Z",
      "serviceDetails": {
        "buildCommand": "npm run build",
        "parentServer": null,
        "publishPath": "build",
        "pullRequestPreviewsEnabled": "no",
        "url": "https://todoclient-981i.onrender.com"
      }
    }
  }
])
})
app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`)
})
console.log("hi")
