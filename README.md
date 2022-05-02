## Application Overview

This repository for builing web application using Nodejs with ExpressJS and MongoDB.

You’ll know:

- Model, Controller, Routes and Middleware folder sturecture.
- Node.js Express Architecture with CORS, Authenticaton & Authorization middlewares.
- How to configure Express routes to work with JWT
- How to define Data Models and association for Authentication and Authorization

## Software Requirements

- [Node](https://nodejs.org/en/download/)
- [ExpressJS](https://www.npmjs.com/package/express)
- [MongoDB](https://www.mongodb.com/)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "nodejs-express-mongo-skeleton" to your project name.

```bash
git clone https://github.com/prashant1879/nodejs-express-mongo-skeleton.git ./nodejs-express-mongo-skeleton
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd nodejs-express-mongo-skeleton
npm install && npm update
```

### Setting up environments

1.  You will find a file named `config/constants.js` on config directory of project. which is used for constants define.
2.  You will find a file named `config/development.js` & `config/production.js` on config directory of project. based on your environment you can add. You can also create more environment.

## Project structure

```sh
.
├── app.js
├── routes.js
├── logfile.log
├── package.json
├── config
│   ├── constants.js
│   ├── development.js
│   └── production.js
└── app
    ├── controllers
    │   ├── categories.controller.js
    │   └── user.controller.js
    ├── helpers
    │   ├── auth.helper.js
    │   ├── common.helper.js
    │   ├── error.js
    │   ├── logging.js
    │   └── validation.js
    ├── models
    │   ├── category.model.js
    │   └── user.model.js
    └── routes
        ├── categories.routes.js
        └── user.routes.js

```

## How to run

### Running API server locally

```bash
node app.js --env development
```
