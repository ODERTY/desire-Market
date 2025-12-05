// 팝업에 사용할 광고 이미지들
// 필요하면 여러 개 넣어두고 랜덤으로 띄울 수 있음
const ADS = [
  {
    image: "images/팝업 상단 이미지.png",   // 팝업에 쓸 큰 이미지 경로
    alt: "BLACK FRIDAY 93% 타임마켓",
    url: "next.html"
  }
  // 나중에 다른 이미지 추가하고 싶으면 여기에 { image, alt, url } 더 추가
];

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-ad");
  const popupBox = document.getElementById("popup-box");
  const popupImage = document.getElementById("popup-image");
  const closeBtn = document.getElementById("popup-close");

  let currentUrl = null;

  function openPopup() {
    if (!popup || !popupImage) return;

    const ad = ADS[Math.floor(Math.random() * ADS.length)];

    popupImage.src = ad.image;
    popupImage.alt = ad.alt || "광고 이미지";
    currentUrl = ad.url || "next.html";

    popup.classList.add("is-open");
  }

  function closePopup() {
    if (!popup) return;
    popup.classList.remove("is-open");
    currentUrl = null;
  }

  // js-ad-trigger 클릭 시 → 팝업 열기
  document.querySelectorAll(".js-ad-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      // a 태그면 원래 이동 막고 팝업만
      if (el.tagName === "A") {
        e.preventDefault();
      }
      openPopup();
    });
  });

  // 팝업 박스 아무 데나 클릭하면 광고 링크로 이동
  if (popupBox) {
    popupBox.addEventListener("click", (e) => {
      // 닫기 버튼 눌렀을 때는 이동하지 않음
      if (e.target.closest("#popup-close")) return;
      if (currentUrl) {
        window.location.href = currentUrl;
      }
    });
  }

  // 닫기 버튼
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();  // 클릭이 바깥으로 안 튀게
      closePopup();
    });
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
