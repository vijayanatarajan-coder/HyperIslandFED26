// TODO: Set item in localStorage
function setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
setItemToLocalStorage("username", "Vijaya");

// TODO: Get item from localStorage
function getItemFromLocalStorage(key) {
  return localStorage.getItem(key);
}
console.log(getItemFromLocalStorage("username"));

// TODO: Remove item from localStorage
function removeItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}
removeItemFromLocalStorage("username");

// TODO: Clear all items from localStorage
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
console.log(getItemFromLocalStorage("username"));

// TODO: Add an object to localStorage
function setObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}
const userObj = {
  name: "viji",
  age: 31,
};
setObjectToLocalStorage("user", userObj);

// TODO: Get an object from localStorage
function getObjectFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
console.log(getObjectFromLocalStorage("user"));

// TODO: Set item in sessionStorage
function setItemToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}
setItemToSessionStorage("sessionID", "12345");

// TODO: Get item from sessionStorage
function getItemFromSessionStorage(key) {
  return sessionStorage.getItem(key);
}
console.log(getItemFromSessionStorage("sessionID"));

// TODO: Remove item from sessionStorage
function removeItemFromSessionStorage(key) {
  sessionStorage.removeItem(key);
}
removeItemFromSessionStorage("sessionID");

// TODO: Clear all items from sessionStorage
function clearSessionStorage() {
  sessionStorage.clear();
}
clearSessionStorage();

// TODO: Add an object to sessionStorage
function setObjectToSessionStorage(key, obj) {
  sessionStorage.setItem(key, JSON.stringify(obj));
}
const sessionObj = {
  token: "abc123",
  validUntil: "2025-01-30",
};
setObjectToSessionStorage("sessionData", sessionObj);

// TODO: Get an object from sessionStorage
function getObjectFromSessionStorage(key) {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
console.log(getObjectFromSessionStorage("sessionData"));
