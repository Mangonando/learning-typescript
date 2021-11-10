// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: "Juan Fernando",
//   age: 32,
//   hobbies: ["Salsa dancing", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Juan Fernando",
  age: 32,
  hobbies: ["Salsa dancing", "Cooking"],
  role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Bouldering"];

console.log("Who?", person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

person.role === Role.AUTHOR
  ? console.log("it's an author!")
  : console.log("wer bist du?");

export = {};
