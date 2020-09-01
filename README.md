# api-presale

a [Sails v1](https://sailsjs.com) application

## TODO API

CRUD created with framework Sailsjs http server, including a router.


## Database

Connection to Mongodb

## Install packages

npm i

## Execute server with nodemon


**npm run dev**

The command was included in the package.json


Migration was configured by default in alter to prevent sails from asking every time the development server is reloaded.

`migrate: 'alter'`

```
  ...
  "scripts": {
    "start": "NODE_ENV=production node app.js",
    "dev": "nodemon --watch ./api/ --watch ./config/ app.js",
    "test": "npm run lint && npm run custom-tests && echo 'Done.'",
    "lint": "./node_modules/eslint/bin/eslint.js . --max-warnings=0 --report-unused-disable-directives && echo '✔  Your .js files look good.'",
    "custom-tests": "echo \"(No other custom tests yet.)\" && echo"
  },
  ...
```

# API

  # [POST]:
    Create presale.
    URL: /api/v1/create

  # [PUT]:
    Update presale.
    Param path: id unique presale.
    URL: /api/v1/update/:id

  # [DELETE]:
    Delete presale.
    Param path: id unique presale.
    URL: /api/v1/delete/:id'

  # [GET]:
    Get all items of presales.
    URL: /api/v1/presales

  # [GET]:
    Gets a single item by its id.
    Param path: id unique presale.
    URL: /api/v1/presale/:id

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Aug 31 2020 18:47:23 GMT-0500 (Central Daylight Time) using Sails v1.2.5.

<!-- Internally, Sails used [`sails-generate@2.0.0`](https://github.com/balderdashy/sails-generate/tree/v2.0.0/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

