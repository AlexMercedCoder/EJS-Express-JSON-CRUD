# 2024 Express/EJS Template
### Created By Alex Merced (DevNursery.com)
To use this template:

- Fork or Generate from Template
- Clone `git clone {url}`
- install dependencies `npm install`

# Dependencies

```json
  "dependencies": {
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "method-override": "^3.0.0",
    "morgan": "^1.10.0"
  }
```

# Scripts

```
npm run {script name}
```

```json
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "nodemon": "nodemon server.js"
  }
```

# Notes

- Use the controllers/root.js for any routes that don't have a prefex

- The constrollers/sample.js is an example of using a router with a prefix

- Ejs is configured for templating, a head.ejs partial is used to load libraries and local js/css

- As you create views keep an eye out that the head.ejs include statement url string is relative to that file. Look at the difference between views/index.ejs and views/sample/index.ejs as an example.

- In head.ejs you can easily include HTMX, jQuery or AlpineJS by easily uncommenting their respective script tag.