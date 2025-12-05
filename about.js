// about.js

document.addEventListener("DOMContentLoaded", () => {
  // 네온바 애니메이션 (메인과 동일 로직)
  setupNeonMarquee();

  // 숨겨진 텍스트 + 흰색 커서 세팅
  setupSecretReveal();
});

/* ===== 네온 마퀴 ===== */
function setupNeonMarquee() {
  const marquee = document.querySelector(".neon-marquee");
  const track = document.querySelector(".neon-track"); // js-neon-track 있으면 그대로도 잡힘
  if (!marquee || !track) return;

  const baseHtml = track.innerHTML;
  const marqueeWidth = marquee.offsetWidth;
  let trackWidth = track.scrollWidth;

  while (trackWidth < marqueeWidth * 2) {
    track.insertAdjacentHTML("beforeend", baseHtml);
    trackWidth = track.scrollWidth;
  }

  track.classList.add("is-animating");
}

/* ===== 숨겨진 텍스트 탐색 ===== */
function setupSecretReveal() {
  const secret = document.getElementById("secret-panel");
  const cursor = document.getElementById("cursor-circle");
  if (!secret || !cursor) return;

  const radius = 130;
  const blur = 20; // ▶ 여기서 원 크기 조절

  // 패널 위치
  let rect = secret.getBoundingClientRect();
  window.addEventListener("resize", () => {
    rect = secret.getBoundingClientRect();
  });

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 카드(=secret) 안에 있는지 판별
    const inside =
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom;

    if (!inside) {
      // 🔹 카드 밖일 때: 숨겨진 텍스트/흰 원 다 숨기고 기본 커서 보여주기
      secret.style.clipPath = "circle(0px at 50% 50%)";
      cursor.style.opacity = 0;
      document.body.classList.remove("cursor-hidden");
      return;
    }

    // 🔹 카드 안에 있을 때만 커스텀 커서 + 마스크 표시
    document.body.classList.add("cursor-hidden");
    cursor.style.opacity = 1;

    // 흰 원 위치
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    // 패널 내부 좌표
    const localX = x - rect.left;
    const localY = y - rect.top;

    // clip-path 이동
    secret.style.clipPath = `circle(${radius}px at ${localX}px ${localY}px)`;
  });
}