import Chance from "chance";

// Create a new instance
const chance = new Chance();

export default function handler(req, res) {
  console.log("==================== REQUEST OBJECT ====================");
  console.log("Method:", req.method); // GET, POST, PUT, DELETE, etc.
  console.log("URL:", req.url); // /api/random-character
  console.log("Query params:", req.query); // ?name=john&age=25 becomes {name: "john", age: "25"}
  console.log("Body:", req.body); // Request body data (for POST/PUT)
  console.log("Headers:", req.headers); // All request headers
  console.log("====================================================");

  const character = {
    randomfirstName: chance.first(),
    randomlastName: chance.last(),
    randomAge: chance.age(), // 34
    randomEmail: chance.email(), // "emma@example.com"
    randomTwitter: chance.twitter(),
    // ... some more keys here ...
  };

  res.status(200).json({ character });
}
