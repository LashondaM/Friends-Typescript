import { Friend } from "./friends";

let friends: Friend[] = [
    new Friend("Rodger", 28, "Rod14@friend.com", true),
    new Friend("Tate", 16, "Tate4@friend.com", false),
    new Friend("Jason", 50, "Jason1@friend.com", false),
    new Friend("Freddy", 63, "Fred@friend.com", false),
    new Friend("Michael", 71, "Mich05@friend.com", false)
];

console.log(Friend.printHeader());
for(let friend of friends){
    console.log(friend.print());
}