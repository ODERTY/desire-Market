// --- 상태 관리 ---
let userName = "";

// --- 요소 가져오기 ---
const elLoginFrame = document.getElementById('login-frame');
const elUsernameInput = document.getElementById('username-input');
const elBtnLoginConfirm = document.getElementById('btn-login-confirm');
const elPageOnboardingText = document.getElementById('page-onboarding-text');
const elTypingText = document.getElementById('typing-text'); // 메시지가 표시될 h1
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
    
    // 텍스트 온보딩 시퀀스 시작
    runOnboardingTextSequence();
});

// --- 기능 3: 텍스트 슬라이드 애니메이션 (수정됨) ---
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateMessage(text) {
    // 1. 텍스트 설정 및 초기화
    elTypingText.textContent = text;
    elTypingText.classList.remove('slide-out', 'hidden');
    
    // 2. 등장 (오른쪽 -> 중앙)
    elTypingText.classList.add('slide-in');
    
    // 3. 읽는 시간 대기 (등장 애니메이션 시간 + 대기 시간)
    await wait(2500); 
    
    // 4. 퇴장 (중앙 -> 왼쪽)
    elTypingText.classList.remove('slide-in');
    elTypingText.classList.add('slide-out');
    
    // 5. 퇴장 애니메이션 완료 대기
    await wait(600); 
}

async function runOnboardingTextSequence() {
    const messages = [
        `반갑습니다, ${userName}님.`,
        "타임마켓 서버에 접속했습니다.",
        "특별 할인 쿠폰 7장이 발급되었습니다.",
        "주의하세요.",
        "60초 안에 사용하지 않으면 소멸됩니다."
    ];

    // 순차적으로 메시지 애니메이션 실행
    for (const msg of messages) {
        await animateMessage(msg);
    }
    
    // 모든 메시지 종료 후 버튼 등장
    // 마지막 메시지가 slide-out 된 상태이므로 텍스트 숨김 처리
    elTypingText.classList.add('hidden'); 
    
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

// --- 기능 5: 네온 마퀴 (자동 실행) ---
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