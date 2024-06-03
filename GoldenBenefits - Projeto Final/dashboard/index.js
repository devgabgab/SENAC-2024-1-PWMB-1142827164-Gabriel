const names = document.querySelector(".names");
const email = document.querySelector(".email");
const joined = document.querySelector(".joined");
const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".navToggle");
const navLinks = document.querySelectorAll(".navList");
const body = document.querySelector("body");

// Toggle navbar visibility
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navBar.classList.toggle("close");
  });
}


navLinks.forEach((element) => {
  element.addEventListener("click", function () {
   
    navLinks.forEach((e) => {
      e.classList.remove("active");
    });
 
    this.classList.add("active");

   
    document.querySelectorAll(".content-container").forEach((container) => {
      container.style.display = "none";
    });

    
    const target = this.getAttribute("data-target");
    document.getElementById(target).style.display = "block";
  });
});

// Fetch and display data
fetch("../dashboard/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const items = data.items; 
    let Name = "";
    let Email = "";
    let Joined = "";

    items.forEach((element) => {
      Name += `<span class="data-list">${element.name}</span>`;
      Email += `<span class="data-list">${element.email}</span>`;
      Joined += `<span class="data-list">${element.joined}</span>`;
    });
    names.innerHTML += Name;
    email.innerHTML += Email;
    joined.innerHTML += Joined;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Handle logout
const logoutButton = document.getElementById("logout");
if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../html/index.html"; 
  });
}
