import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.querySelector("input").value;
    if (usernames.includes(username)) {
      alert("This search has already been performed")
      return
    }
    
  });
  if (response) const creatCard = (data) => {
    const card = createCard(response.data)
    document.querySelector("#container").insertAdjacentHTML("beforeend", card)
  }
});
const response = await axios.get(`https://api.github.com/users/${username}` );