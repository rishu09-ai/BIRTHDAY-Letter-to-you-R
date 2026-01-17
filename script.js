let page = 1;
let finalFireworksInterval = null;

function next() {
  const current = document.getElementById("p" + page);
  if (current) current.classList.remove("active");

  page++;

  const nextPage = document.getElementById("p" + page);
  if (nextPage) nextPage.classList.add("active");

  // Start fireworks on final page
  if (page === 5) startFinalFireworks();
}

/* AUTO COUNTDOWN + AUTO NEXT */
function countdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 18, 0, 0, 0);
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  const timer = setInterval(() => {
    const diff = target - new Date();

    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("h").innerText = "00";
      document.getElementById("m").innerText = "00";
      document.getElementById("s").innerText = "00";
      setTimeout(next, 800); // AUTO NEXT 🎉
      return;
    }

    document.getElementById("h").innerText =
      String(Math.floor(diff / 3600000)).padStart(2, "0");
    document.getElementById("m").innerText =
      String(Math.floor(diff / 60000) % 60).padStart(2, "0");
    document.getElementById("s").innerText =
      String(Math.floor(diff / 1000) % 60).padStart(2, "0");
  }, 1000);
}
countdown();

/* CAKE CUT */
function cutCake() {
  const knife = document.querySelector(".knife");
  const slice = document.getElementById("slice");

  knife.style.transition = "1s";
  knife.style.left = "50px";

  slice.style.transition = "1s";
  slice.style.opacity = "1";
  slice.style.transform = "translateX(60px)";

  burstFireworks();
  setTimeout(next, 1500);
}

/* FIREWORKS */
function burstFireworks() {
  for (let i = 0; i < 35; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = "50%";
    f.style.top = "40%";
    f.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
    f.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }
}

/* EXTRA FIREWORKS ON FINAL PAGE */
function startFinalFireworks() {
  if (finalFireworksInterval) return;

  finalFireworksInterval = setInterval(() => {
    burstFireworks();
  }, 1800);
}
