const names = [
  'Aaran',
  'Aaren',
  'Aaryan',
  'Aaryn',
  'Jones',
  'Zen',
  'Zennon',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
];

const thoughtText = [
  "I love coding!",
  "MongoDB is awesome!",
  "JavaScript is amazing!",
  "Working on an API today!",
  "Building a social network app.",
  "Working on a new project.",
  "NoSQL databases are cool.",
  "Loving this social network app!",
  "Working hard on some new features.",
  "Debugging all day!",
];

const reactionText = [
  "That's awesome!",
  "Great job!",
  "Totally agree!",
  "I love it too!",
  "Well said!",
  "I think so too!",
  "Nice!",
  "Cool!",
  "Keep up the good work!",
  "I'm loving it!",
  "You're doing great!",
  "That's interesting!",
];

const getRandomUsername = () => {
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomThoughts = (num, username) => {
  const thoughts = [];
  for (let i = 0; i < num; i++) {
    thoughts.push({
      thoughtText: thoughtText[Math.floor(Math.random() * thoughtText.length)],
      username: username,
    });
  }
  return thoughts;
};

const getRandomReactions = (num) => {
  const reactions = [];
  for (let i = 0; i < num; i++) {
    reactions.push({
      reactionBody: reactionText[Math.floor(Math.random() * reactionText.length)],
      username: getRandomUsername(),
    });
  }
  return reactions;
};

module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions}; 