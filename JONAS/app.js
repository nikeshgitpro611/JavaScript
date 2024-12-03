const data = {
  user: {
    id: 1,
    name: "John Doe",
    details: {
      age: 30,
      city: "New York",
      country: "USA",
    },
  },
  status: "active",
  role: "admin",
};

const {
  user: {
    details: { city, ...country },
  },
  ...role
} = data;
console.log("user : ", city, country);
console.log("role : ", role);
