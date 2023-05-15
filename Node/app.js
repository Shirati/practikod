
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_icqX3OOolvgyZJJGSbIodE0aMpsO');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
sdk.get ('/',(req,res)=>{
    res.status(200).json([
        {
          "cursor": "-rHARMqa7HN1OHRnazRxZW9vM2Fscm8w",
          "service": {
            "id": "srv-ch98u8tgk4qeoo3alro0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-03T16:43:15.856951Z",
            "name": "ServerPractikod",
            "notifyOnFail": "default",
            "ownerId": "usr-ch53kq2k728glsjdd130",
            "repo": "https://github.com/Shirati/practikod",
            "rootDir": "./Server",
            "slug": "serverpractikod",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-09T08:23:04.538414Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "ToDoApi/Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "oregon",
              "url": "https://serverpractikod.onrender.com"
            }
          }
        },
        {
          "cursor": "b2zxhAOMt4wwZzJrNzI4Z2xzamcxZWUw",
          "service": {
            "id": "srv-ch540g2k728glsjg1ee0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-04-27T09:28:32.7781Z",
            "name": "practikod",
            "notifyOnFail": "default",
            "ownerId": "usr-ch53kq2k728glsjdd130",
            "repo": "https://github.com/Shirati/practikod",
            "rootDir": "./Client",
            "slug": "practikod",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2023-05-09T08:06:46.084282Z",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "parentServer": null,
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://practikod.onrender.com"
            }
          }
        }
      ])
})
module.exports =app;
