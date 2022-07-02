const faker = require("faker");
const fs = require("fs");
const users = [];

for (let start = 1; start <= 10000; start++) {
  let user = {
    id: start,
    email: faker.internet.email(),
    name: faker.name.firstName(),
  };
  users.push(user);
}

//1000 online users
const sessions = new Array(1000);

for (let start = 0; start < 1000; start++) {
  sessions[start] = start;
}

const onlineUsers = new Set(sessions);

console.time("includes");

users.filter((user) => sessions.includes(user.id));

console.timeEnd("includes");

console.time("set");

users.filter((user) => onlineUsers.has(user.id));

console.timeEnd("set");

/**
 * The results
 * includes : 99.533ms
 * set : 3.636ms
 */
