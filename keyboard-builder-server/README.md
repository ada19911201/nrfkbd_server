<!--
 * @Description: README.md
 * @Author: bubao
 * @Date: 2019-09-10 12:05:52
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 13:21:13
 -->
<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">keyboard-builder-server</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/bubao/keyboard-builder-server.svg)](https://github.com/bubao/keyboard-builder-server/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bubao/keyboard-builder-server.svg)](https://github.com/bubao/keyboard-builder-server/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Deployment](#deployment)
-   [Usage](#usage)
-   [Built Using](#built_using)
-   [TODO](./docs/TODO.md)
-   [Contributing](../CONTRIBUTING.md)
-   [Authors](#authors)
-   [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

#### install nvm

```sh
# use curl to install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# or wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

and make it work

```sh
soure ~/.bashrc
# if you use zsh
soure ~/.zshrc
```

#### install nodejs and npm

```sh
nvm install node
```

#### install pm2

```sh
sudo npm install -g pm2
```

### Installing

```sh
git clone https://github.com/bubao/keyboard-builder-server.git
cd keyboard-builder-server
npm install
pm2 start index.js -n builder-server
# npm run start
```

if you want to start the server when system is booted.

```sh
pm2 save
pm2 startup
```

## 🔧 Running the tests <a name = "tests"></a>

no tests to run.

## 🎈 Usage <a name="usage"></a>

## 🚀 Deployment <a name = "deployment"></a>

## ⛏️ Built Using <a name = "built_using"></a>

-   [Express](https://expressjs.com/) - Server Framework
-   [NodeJs](https://nodejs.org/en/) - Server Environment
-   [body-parser](https://nodejs.org/en/) - Node.js Body Parsing Middleware

## ✍️ Authors <a name = "authors"></a>

-   [@bubao](https://github.com/bubao) - Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
