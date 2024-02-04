// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Create route
app.get('/comments', (req, res) => {
    res.send('Comments page');
});

app.get('/comments/:id', (req, res) => {
    res.send(`Comment id: ${req.params.id}`);
});
```

### 3.3. Query parameter

* **Query parameter** is a way to pass data from the client to the server.
* It is added to the end of the URL after a question mark (?), and it is separated by an ampersand (&).
* **Query parameter** is a key-value pair.
* The key is the name of the parameter and the value is the value of the parameter.
* Example: `http://localhost:3000/comments?name=John&age=25`

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Create route
app.get('/comments', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});
```

### 3.4. Request body

* **Request body** is a way to send data from the client to the server.
* It is used for `POST`, `PUT`, `PATCH`, and `DELETE` requests.
* **Request body** is a key-value pair.
* The key is the name of the parameter and the value is the value of the parameter.
* **Request body** is sent in the request payload.
* Example:
  * `POST` request: `http://localhost:3000/comments`
  * Request body: `{"name": "John", "age": 25}`

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Parse request body
app.use(express.json());

// Create route
app