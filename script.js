// --- 상태 관리 ---
let userName = "";

// --- 요소 가져오기 ---
const elLoginFrame = document.getElementById('login-frame');
const elUsernameInput = document.getElementById('username-input');
const elBtnLoginConfirm = document.getElementById('btn-login-confirm');
const elPageOnboardingText = document.getElementById('page-onboarding-text');
const elOnboardingMessage = document.getElementById('onboarding-message');
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
    
    // 시작 시 버튼은 무조건 숨김 상태 보장
    elBtnStartShopping.classList.add('hidden');
    
    runOnboardingTextSequence();
});

// --- 기능 3: 텍스트 슬라이드 애니메이션 ---
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateMessage(text, isLast = false) {
    elOnboardingMessage.textContent = text;
    elOnboardingMessage.classList.remove('slide-out', 'hidden');
    
    // 등장
    elOnboardingMessage.classList.add('slide-in');
    
    // 읽는 시간
    await wait(1200); 
    
    // 퇴장 (마지막 메시지는 퇴장 안 함)
    if (!isLast) {
        elOnboardingMessage.classList.remove('slide-in');
        elOnboardingMessage.classList.add('slide-out');
        await wait(600); 
    }
}

async function runOnboardingTextSequence() {
    const messages = [
        `반갑습니다, ${userName}님.`,
        "타임마켓 서버에 접속했습니다.",
        "특별 할인 쿠폰 7장이 발급되었습니다.",
        "주의하세요.",
        "60초 안에 사용하지 않으면 소멸됩니다."
    ];

    for (let i = 0; i < messages.length; i++) {
        const isLast = (i === messages.length - 1);
        await animateMessage(messages[i], isLast);
    }
    
    // 마지막 메시지가 떠 있는 상태에서 버튼 등장
    elBtnStartShopping.classList.remove('hidden');
    elBtnStartShopping.classList.add('fade-in');
}

// --- 기능 4: 쇼핑 시작 ---
elBtnStartShopping.addEventListener('click', () => {
    elPageOnboardingText.classList.add('hidden');
    elOnboardingBg.classList.add('hidden'); 
    elPageShopping.classList.remove('hidden');
    elPageShopping.style.display = 'flex'; // Flex 레이아웃 강제 적용
    console.log("쇼핑 시작!");
});

// --- 기능 5: 네온 마퀴 ---
function setupNeonMarquee() {
  const tracks = document.querySelectorAll(".js-neon-track");
  
  tracks.forEach(track => {
      const marquee = track.closest('.neon-marquee');
      if (!marquee) return;

      const baseHtml = track.innerHTML;          
      const marqueeWidth = marquee.offsetWidth;
      let trackWidth = track.scrollWidth;

      while (trackWidth < marqueeWidth * 2) {
        track.insertAdjacentHTML("beforeend", baseHtml);
        trackWidth = track.scrollWidth;
      }
      track.classList.add("is-animating");
  });
}

document.addEventListener("DOMContentLoaded", () => {
    setupNeonMarquee();
});