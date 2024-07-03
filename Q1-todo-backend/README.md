## How to run
> npm install
> node index.js

## Explaination

There are 5 API

1. GET /todos => Get all todos

2. GET /todos/:id => Get a todos with a specific id

3. POST /todos => Create a todo 
Request body example: {"title": "XXX", "description": "YYY", completed: true}

4. PUT /todos/:id => Update a todo 
Request body example: {"title": "XXX", "description": "YYY", completed: true}

5. DELETE /todos/:id => Delete a todo with ID