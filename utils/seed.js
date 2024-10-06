const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 10; i++) {
    const username = getRandomUsername();
    const email = `${username}@example.com`;

    users.push({
      username,
      email,
    });
  
  const randomThoughts = getRandomThoughts(3, username);
  randomThoughts.forEach((thought) => thoughts.push(thought));
  }

  const userData = await User.create(users);

  for (const thought of thoughts) {
    const user = userData.find((u) => u.username === thought.username);
    if (user) {
      thought.userId = user._id;
      await Thought.create(thought);
      await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { thoughts: thought._id } }
      );
    }
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
