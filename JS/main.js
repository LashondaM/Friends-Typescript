"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends_1 = require("./friends");
var friends = [
    new friends_1.Friend("Rodger", 28, "Rod14@friend.com", true),
    new friends_1.Friend("Tate", 16, "Tate4@friend.com", false),
    new friends_1.Friend("Jason", 50, "Jason1@friend.com", false),
    new friends_1.Friend("Freddy", 63, "Fred@friend.com", false),
    new friends_1.Friend("Michael", 71, "Mich05@friend.com", false)
];
console.log(friends_1.Friend.printHeader());
for (var _i = 0, friends_2 = friends; _i < friends_2.length; _i++) {
    var friend = friends_2[_i];
    console.log(friend.print());
}
