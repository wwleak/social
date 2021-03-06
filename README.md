# Social
A social event scheduling and promoting web app.

This app is intended to let us set and manage events ( it was designed mostly thinking in party events ) and promote them by showing the most recent ones. The idea is to escale it in order to even support paying tickets, so if you wanna know what parties are occuring today you can go on the website and check by yourself, and in case you wish to attend a particular event you can buy the ticket upfront from the platform.

This app was also an excuse to practice the usage of typescript and redux/saga with react, in addition, i wanted to leave an approach of how to handle a crud with react router and child routes as a reference online for future projects i might be working on, so hope you like it and get inspired.

<p align="center">
  <img src="./client/social.png" alt="snapshot" />  
</p>

<table border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: none;">
  <tr>
    <td><img alt="GitHub" src="https://img.shields.io/github/license/wwleak/social?style=for-the-badge"></td>
    <td><img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/wwleak/social?style=for-the-badge"></td>
    <td><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wwleak/social?style=for-the-badge"></td>
    <td><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wwleak/social?style=for-the-badge"></td>
    <td><img alt="GitHub stars" src="https://img.shields.io/github/stars/wwleak/social?style=for-the-badge"></td>
  </tr>
</table>

Regarding the techs involved in the development of this web application the following are present:

<blockquote>
  Typescript, React, Semantic UI, Redux / Redux Saga, Webpack, Postgresql, Express, Sequelize, Docker
</blockquote>

Some of the cool features **social** has is that you can log in or sign up either with your credentials or by using social media credentials such as google, also it has forms protection via google recaptcha v3 which is quite good.

## Side note
To generate your own self signed ssl certificate for development purposes, run the following command on the terminal, but before make sure to run it inside the directory where your server.ts file is present:

```console
foo@bar:~$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```

## :rocket: How to run it

Clone the repo

```console
foo@bar:~$ git clone https://github.com/wwleak/social.git
```
Change directory into the project's folder

```console
foo@bar:~$ cd social
```

Run server and client scripts

```console
foo@bar:~$ sudo npm run dev && cd client && npm run start
```

## :pushpin: License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

This project is currently in development.
