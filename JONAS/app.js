const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];

  let srtAge = users.sort((a,b)=> a.name - b.name).flatMap(user => user.age);
  console.log(srtAge);