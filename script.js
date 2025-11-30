// --- 설정 값 ---
const ONBOARDING_MESSAGES = [
    "시스템 접속...",
    "사용자 확인 완료.",
    "특별 할인 쿠폰 7장이 발급되었습니다.",
    "주의하세요.",
    "60초 안에 사용하지 않으면 소멸됩니다."
];

// --- 요소 가져오기 ---
const elTypingText = document.getElementById('typing-text');
const elBtnStart = document.getElementById('btn-start');
const elPageOnboarding = document.getElementById('page-onboarding');
const elPageShopping = document.getElementById('page-shopping');

// --- 기능 1: 타이핑 효과 ---
async function typeWriter(text) {
    elTypingText.textContent = ""; // 초기화
    
    for (let i = 0; i < text.length; i++) {
        elTypingText.textContent += text[i];
        // 글자마다 랜덤한 딜레이를 주어 기계적인 느낌 연출
        const delay = Math.random() * 50 + 50; 
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    // 문장 끝난 후 대기
    await new Promise(resolve => setTimeout(resolve, 1000));
}

// --- 기능 2: 온보딩 시퀀스 실행 ---
async function runOnboarding() {
    for (const msg of ONBOARDING_MESSAGES) {
        await typeWriter(msg);
    }
    
    // 모든 텍스트 종료 후
    elTypingText.classList.add('cursor-hide'); // 커서 제거
    elBtnStart.classList.remove('hidden');     // 버튼 보이기
    elBtnStart.classList.add('fade-in');       // 등장 애니메이션
}

// --- 기능 3: 쇼핑 시작 버튼 클릭 ---
elBtnStart.addEventListener('click', () => {
    // 1. 온보딩 페이지 숨김
    elPageOnboarding.classList.add('hidden');
    
    // 2. 쇼핑 페이지 보임
    elPageShopping.classList.remove('hidden');
    
    // (여기서 나중에 쇼핑 초기화 함수를 호출할 예정)
    console.log("쇼핑 페이지로 이동합니다.");
});

// --- 실행 ---
// 페이지 로드 시 바로 시작
runOnboarding();