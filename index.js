fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
}).then(function(response) {
  return response.json();
}).then(function(object) {
  console.log(object);
});
