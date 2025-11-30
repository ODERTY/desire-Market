// --- 상태 관리 ---
let userName = "";

// --- 요소 가져오기 ---
const elLoginFrame = document.getElementById('login-frame');
const elUsernameInput = document.getElementById('username-input');
const elBtnLoginConfirm = document.getElementById('btn-login-confirm');
const elPageOnboardingText = document.getElementById('page-onboarding-text');
const elTypingText = document.getElementById('typing-text');
const elBtnStartShopping = document.getElementById('btn-start-shopping');
const elPageShopping = document.getElementById('page-shopping');
const elOnboardingBg = document.getElementById('onboarding-bg');

// --- 기능 1: 입력 감지 및 버튼 활성화 ---
elUsernameInput.addEventListener('input', () => {
    const val = elUsernameInput.value.trim();
    if (val.length > 0) {
        elBtnLoginConfirm.disabled = false;
        elBtnLoginConfirm.classList.remove('bg-[#D3D3D3]', 'cursor-not-allowed');
        elBtnLoginConfirm.classList.add('bg-[#D30000]', 'cursor-pointer', 'hover:bg-[#ff3c28]');
    } else {
        elBtnLoginConfirm.disabled = true;
        elBtnLoginConfirm.classList.add('bg-[#D3D3D3]', 'cursor-not-allowed');
        elBtnLoginConfirm.classList.remove('bg-[#D30000]', 'cursor-pointer', 'hover:bg-[#ff3c28]');
    }
});

// --- 기능 2: 로그인 확인 버튼 클릭 ---
elBtnLoginConfirm.addEventListener('click', () => {
    userName = elUsernameInput.value.trim();
    if (!userName) return;

    elLoginFrame.classList.add('hidden');
    elPageOnboardingText.classList.remove('hidden');
    runOnboardingTextSequence();
});

// --- 기능 3: 타이핑 효과 ---
async function typeWriter(text) {
    elTypingText.textContent = ""; 
    for (let i = 0; i < text.length; i++) {
        elTypingText.textContent += text[i];
        const delay = Math.random() * 50 + 50; 
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
}

async function runOnboardingTextSequence() {
    const messages = [
        `반갑습니다, ${userName}님.`,
        "타임마켓 서버에 접속했습니다.",
        "특별 할인 쿠폰 7장이 발급되었습니다.",
        "주의하세요.",
        "60초 안에 사용하지 않으면 소멸됩니다."
    ];

    for (const msg of messages) {
        await typeWriter(msg);
    }
    
    elTypingText.classList.add('cursor-hide');
    elBtnStartShopping.classList.remove('hidden');
    elBtnStartShopping.classList.add('fade-in');
}

// --- 기능 4: 쇼핑 시작 ---
elBtnStartShopping.addEventListener('click', () => {
    elPageOnboardingText.classList.add('hidden');
    elOnboardingBg.classList.add('hidden'); 
    elPageShopping.classList.remove('hidden');
    console.log("쇼핑 시작!");
});

// --- 기능 5: 네온 마퀴 (자동 실행 - 수정됨) ---
function setupNeonMarquee() {
  // [수정] querySelector 대신 querySelectorAll을 사용하여 모든 네온바를 선택
  const tracks = document.querySelectorAll(".js-neon-track");
  
  tracks.forEach(track => {
      const marquee = track.closest('.neon-marquee');
      if (!marquee) return;

      const baseHtml = track.innerHTML;          
      const marqueeWidth = marquee.offsetWidth;
      let trackWidth = track.scrollWidth;

      // 트랙 길이가 네온바의 2배가 될 때까지 복제
      while (trackWidth < marqueeWidth * 2) {
        track.insertAdjacentHTML("beforeend", baseHtml);
        trackWidth = track.scrollWidth;
      }
      
      // 모든 트랙에 애니메이션 클래스 추가
      track.classList.add("is-animating");
  });
}

document.addEventListener("DOMContentLoaded", () => {
    setupNeonMarquee();
});