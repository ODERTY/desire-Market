document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("hero-cta");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      // TODO: 실제로 이동시키고 싶은 페이지 이름으로 바꿔줘
      // 예: "shop.html", "product-list.html" 등
      window.location.href = "shopping/index.html";
    });
  }
    // 네온 마퀴 세팅
  setupNeonMarquee();
});

function setupNeonMarquee() {
  const marquee = document.querySelector(".neon-marquee");
  const track = document.querySelector(".js-neon-track");
  if (!marquee || !track) return;

  const baseHtml = track.innerHTML;          // 타임세일 / 무료배송 한 세트
  const marqueeWidth = marquee.offsetWidth;
  let trackWidth = track.scrollWidth;

  // 트랙 길이가 네온바의 2배가 될 때까지 계속 복제
  while (trackWidth < marqueeWidth * 2) {
    track.insertAdjacentHTML("beforeend", baseHtml);
    trackWidth = track.scrollWidth;
  }

  // 준비가 끝나면 애니메이션 시작
  track.classList.add("is-animating");
}