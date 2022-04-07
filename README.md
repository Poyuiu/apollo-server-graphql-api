# GraphQL Backend Adventure

## Install
https://classic.yarnpkg.com/lang/en/docs/install/

```bash
$ yarn install
```

## Create environment
Environment file example.
```
# .env
VERSION=1.0.0
NODE_ENV=development
PORT=3000
SECRET=

## Getting Started
### Run Server
```bash
$ yarn dev
```

### Test

```bash
$ yarn test
```
or
#### Standard
https://standardjs.com/
```bash
yarn standard --fix
```

#### Jest
https://jestjs.io/

https://jestjs.io/docs/expect

https://pjchender.dev/npm/npm-jest/
```bash
yarn jest
```

Jest config
```
  "jest": {
    "verbose": true,
    "collectCoverage": true
  },
```
## MySql
https://www.mysql.com/
```
$ mysql
```

### Set the MySQL user password 
```
mysql> ALTER USER 'user-name'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';
```

### Creating and Selecting a Database

#### Creating
```
mysql> CREATE DATABASE menagerie;
```

#### Selecting
```
mysql> USE menagerie;
```