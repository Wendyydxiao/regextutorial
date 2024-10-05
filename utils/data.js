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

module.exports = { getRandomUsername, getRandomThoughts };
