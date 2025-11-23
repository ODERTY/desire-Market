// 광고 버전 3개 (원하면 더 추가 가능)
const ADS = [
  {
    badge: "AD · 시대별 건강템 아카이브",
    title: "1920~2020년, 100년 건강템 광고 한 번에 보기",
    body:
      "뱀기름·게르마늄 팔찌·디톡스 주스·수소수까지. 각 시대가 사랑했던 유사과학 건강템을 한 페이지에서 비교해 보세요.",
    cta: "아카이브 입장하기",
    bgClass: "from-amber-400 via-orange-400 to-rose-500"
  },
  {
    badge: "AD · 내 장바구니 리포트",
    title: "방금까지 고른 상품으로 욕망 리포트 만들기",
    body:
      "당신이 자꾸 클릭했던 문구들을 모아 하나의 리포트로 정리해 줍니다. “즉시·완벽·기적”에 얼마나 반응했는지 확인해 보세요.",
    cta: "리포트 받아보기",
    bgClass: "from-sky-400 via-indigo-400 to-purple-500"
  },
  {
    badge: "AD · 실험실 체험관",
    title: "숫자와 실험복 뒤에 숨은 광고 언어 체험",
    body:
      "ppm, %, n=30, 더블 블라인드… 숫자와 그래프로 포장된 광고를 인터랙티브 실험실에서 직접 분해해 봅니다.",
    cta: "체험하러 가기",
    bgClass: "from-emerald-400 via-teal-400 to-cyan-500"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-ad");
  const closeBtn = document.getElementById("popup-close");
  const heroEl = document.getElementById("popup-hero");
  const badgeEl = document.getElementById("popup-badge");
  const titleEl = document.getElementById("popup-title");
  const bodyEl = document.getElementById("popup-body");
  const ctaEl = document.getElementById("popup-cta");

  function openPopup() {
    if (!popup) return;

    // 랜덤 광고 하나 선택
    const ad = ADS[Math.floor(Math.random() * ADS.length)];

    badgeEl.textContent = ad.badge;
    titleEl.textContent = ad.title;
    bodyEl.textContent = ad.body;
    ctaEl.textContent = ad.cta;

    // 상단 비주얼 그라데이션
    heroEl.className = "h-40 sm:h-48 bg-gradient-to-r " + ad.bgClass;

    // CTA 누르면 next.html로 이동
    ctaEl.onclick = () => {
      window.location.href = "next.html"; // 파일 이름 다르면 여기만 수정
    };

    popup.classList.remove("hidden");
    popup.classList.add("flex");
  }

  function closePopup() {
    if (!popup) return;
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  }

  // js-ad-trigger 클래스가 붙은 모든 요소 → 팝업 트리거
  document.querySelectorAll(".js-ad-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      // a 태그면 기본 이동 막기
      if (el.tagName === "A") {
        e.preventDefault();
      }
      openPopup();
    });
  });

  // 닫기 버튼
  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  }

  // 어두운 배경 클릭 시 닫기
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
});
