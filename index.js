function submitData(name, email)
{
  return fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }).then(function(response) {
    return response.json();
  }).then(function(object) {
    console.log(object);
  }).catch(function(error) {
    console.log(error.message);
  });
}
