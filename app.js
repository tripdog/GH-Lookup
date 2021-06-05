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
    usernames.push(username)
    document.querySelector('input').value = ""

    let response = ""
    try {
      response = await axios.get(`https://api.github.com/users/${username}`)
    } catch (error) {
      if (404 === error.response.status) {
        alert("User not found")
      } else {
        alert("Error")
        console.log(error.response)
      }
    }
    if (response) {
      const card = creatCard(response.data)
      document.querySelector("#container").insertAdjacentHTML("afterbegin", card)
    }
  });
});
