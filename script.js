const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener("click", () => {
  console.log("clicked");
  nav.classList.add("active");
});

close.addEventListener("click", () => {
  console.log("closed");
  nav.classList.remove("active");
});
