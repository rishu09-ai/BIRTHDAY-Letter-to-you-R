/* ================= PAGE NAVIGATION ================= */

function next() {
  const current = document.querySelector(".page.active");
  if (!current) return;

  current.classList.remove("active");

  const nextPage = current.nextElementSibling;
  if (nextPage && nextPage.classList.contains("page")) {
    nextPage.classList.add("active");
  }
}

/* ================= COUNTDOWN ================= */

function countdown() {
  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  const sEl = document.getElementById("s");

  if (!hEl || !mEl || !sEl) return;

  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 18, 0, 0, 0);
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  setInterval(() => {
    const diff = target - new Date();

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    hEl.textContent = String(hours).padStart(2, "0");
    mEl.textContent = String(minutes).padStart(2, "0");
    sEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

countdown();

/* ================= CAKE CUT ================= */

function cutCake() {
  const knife = document.querySelector(".knife");
  const slice = document.getElementById("slice");

  if (knife) knife.style.left = "50px";
  if (slice) {
    slice.style.opacity = "1";
    slice.style.transform = "translateX(60px)";
  }

  // Fireworks
  for (let i = 0; i < 40; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = "50%";
    f.style.top = "40%";
    f.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
    f.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }

  setTimeout(next, 1500);
}
