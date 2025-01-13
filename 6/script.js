// TODO: Set item in localStorage
localStorage.setItem("name", "John Doe");

// TODO: Get item from localStorage
localStorage.getItem("name");

// TODO: Remove item from localStorage
localStorage.removeItem("name");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
localStorage.setItem(
  "user",
  JSON.stringify({ name: "John Doe", age: 21, hobby: "Reading" })
);

// TODO: Get an object from localStorage
JSON.parse(localStorage.getItem("user"));

// TODO: Set item in sessionStorage
sessionStorage.setItem("name", "John Doe");

// TODO: Get item from sessionStorage
sessionStorage.getItem("name");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("name");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
sessionStorage.setItem(
  "user",
  JSON.stringify({ name: "John Doe", age: 21, hobby: "Reading" })
);

// TODO: Get an object from sessionStorage
JSON.parse(sessionStorage.getItem("user"));
