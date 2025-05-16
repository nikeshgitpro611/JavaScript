const people = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Alice", role: "admin" },
  { id: 4, name: "Alice", role: "guest" }
];

// Find all entries that have same `name` and `role`.
// Expected Output: [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 3, name: "Alice", role: "admin" }
// ]

const result = people.filter(
  (person, index) =>
    people.findIndex((p) => p.name === person.name && p.role === person.role) ===
    index
);

console.log(result);