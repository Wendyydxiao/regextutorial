# Social Network API

## Description

This is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage a friend list. Built using MongoDB, Mongoose, and Express.js, this API efficiently handles unstructured data with the scalability of NoSQL databases. No front-end is provided with this application. Instead, Insomnia or Postman is used to interact with the API for testing purposes.

The application allows users to:

- Create, update, and delete users and thoughts.
- React to thoughts.
- Add and remove friends from a user's friend list.
- Delete a user along with their associated thoughts and reactions.

Walkthrough Video Link: https://www.loom.com/share/6572497284c24b17b5c0468057f38aa7?sid=c8a5634f-4970-483a-a4a9-e987fa376737

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

- Ensure that Node.js & postgres sql are installed on your machine.
- Clone the repository to your local machine.
- Run `npm install` to install the necessary dependencies.
- Set Up MongoDB: Ensure that MongoDB is installed and running on your machine.
- Run `npm start` to start the server.

## Usage

1. Once the server is running, you can interact with the API using Insomnia or another API testing tool. The available endpoints allow you to manage users, thoughts, reactions, and friend relationships.
2. Run the command `npm run seed` to seed sample data.
3. API endpoints available:

GET:

- /api/users (Get all users)
- /api/users/:userId (Get a single user by ID)
- /api/thoughts (Get all thoughts)
- /api/thoughts/:thoughtId (Get a single thought by ID)
- /api/users/:userId/friends (Get a user's list of friends)

POST:

- /api/users (Create a new user)
- /api/thoughts (Create a new thought)
- /api/thoughts/:thoughtId/reactions (Add a reaction to a thought)
- /api/users/:userId/friends/:friendId (Add a friend to a user's friend list)

PUT:

- /api/users/:userId (Update a user by ID)
- /api/thoughts/:thoughtId (Update a thought by ID)

DELETE:

- /api/users/:userId (Delete a user by ID and their thoughts)
- /api/thoughts/:thoughtId (Delete a thought by ID)
- /api/thoughts/:thoughtId/reactions/:reactionId (Delete a reaction by ID from a thought)
- /api/users/:userId/friends/:friendId (Remove a friend from a user's friend list)

## License

This project is licensed under MIT.

## Contributing

Happy to have your contribution! Simply fork the repo and submit a pull request.

## Tests

Manual tests ran for this application.

## Questions

For questions, please contact me on GitHub at [wendyydxiao](https://github.com/wendyydxiao) or email me at wendyxiao1023@gmail.com.
