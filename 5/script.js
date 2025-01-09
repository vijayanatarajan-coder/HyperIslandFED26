const apiUrl = "https://api.example.com/data";

function fetchData(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
fetchData(apiUrl);

function postData(apiUrl, data) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Posted data successfully:", responseData);
    })
    .catch((error) => {
      console.error("There was a problem with the post operation:", error);
    });
}
const dataToPost = {
  name: "John Doe",
  age: 21,
};
postData(apiUrl, dataToPost);
