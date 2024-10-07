const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Existing data cleared.');
  } catch (err) {
    console.error('Error clearing existing data:', err);
    process.exit(1);
  }

  const users = [];
  const thoughts = [];
  const usedUsernames = new Set();
  const usedThoughtTexts = new Set(); 

  for (let i = 0; i < 10; i++) {
    let username;
    do {
      username = getRandomUsername();
    } while (usedUsernames.has(username));

    usedUsernames.add(username);
    const email = `${username}@example.com`;

    users.push({
      username,
      email,
    });
  
  const randomThoughts = getRandomThoughts(3, username);
  randomThoughts.forEach((thought) => {
    if (!usedThoughtTexts.has(thought.thoughtText)) {
      thoughts.push(thought);
      usedThoughtTexts.add(thought.thoughtText);
    }
  });
}

  try{

    const userData = await User.insertMany(users);

    for (const thought of thoughts) {
      const user = userData.find((u) => u.username === thought.username);
      if (user) {
        thought.userId = user._id;
        thought.reactions = getRandomReactions(2);
      
        const createdThought = await Thought.create(thought);
        await User.findOneAndUpdate(
          { _id: user._id },
          { $push: { thoughts: createdThought._id } }
        );
      }
    }

    for (let i = 0; i < userData.length; i++) {
      const currentUser = userData[i];

      let friendIds = userData
        .filter((user) => user._id.toString() !== currentUser._id.toString())
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map((friend) => friend._id);

      await User.findOneAndUpdate(
        { _id: currentUser._id },
        { $addToSet: { friends: { $each: friendIds } } }
      );
    }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
} catch (err) {
  console.error('Error seeding data:', err);
  process.exit(0);
}
});
