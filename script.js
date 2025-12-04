// =========================================
// [PART 1] 상품 데이터 장부 (CATALOG)
// 여기서 32개의 상품 정보를 수정하세요!
// =========================================
const CATALOG = [
    // 1번 상품
    {
        id: 0,
        name: "만병 활력 뱀기름",
        img: "https://placehold.co/501x501/333/fff?text=Golden+Turtle", // 이미지 주소
        descTitle: "한 방울이면 죽어가던 세포가 춤을 춘다!",
        desc: "미지의 대륙에서 발견된 신비의 생명수입니다. 뱀의 강인한 생명력을 그대로 정제하여 병에 담았습니다. 관절통, 신경통은 물론 잃어버린 젊음의 활력까지 되찾아줍니다. 의사들도 놀란 기적의 오일, 당신의 시간을 거꾸로 돌리세요.",
        price: 2450,       // 할인가 (숫자만)
        originalPrice: 35999, // 원래 가격 (숫자만)
        reviewCount: 342,   // 리뷰 수
        rating: 4.9,        // 별점
        reviewer: "김*수",
        reviewDate: "2023년 11월 10일",
        reviewText: "지난 5년간 몸이 너무 아프고 죽는구나 싶었는데 뱀기름 덕에 살아난거 같아요 몸이 건강해지는 느낌? 젊어지는 것 같아요.",
        keyword: "영원"     // [중요] 욕망 분석 키워드
    },
    // 2번 상품
    {
        id: 1,
        name: "게르마늄 퀀텀 에너지 팔찌",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "혈액 속에 흐르는 기적의 전자 이동!",
        desc: "순도 99.9% 게르마늄에서 방출되는 신비한 파동이 당신의 탁한 혈액을 맑게 정화합니다. 착용하는 순간 체온이 상승하고 막혔던 기혈이 뚫리는 놀라운 경험! 과학이 입증하고 전 국민이 열광한 건강의 상징을 손목에 감으세요.",
        price: 3500,
        originalPrice: 49999,
        reviewCount: 1820,
        rating: 4.8,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "이거 차고 난 뒤로 기립성 저혈압이 사라졌어요 차크라가 뚫리는 느낌임 ㄹㅇ",
        keyword: "영원"
    },

    {
        id: 2,
        name: "오존 살균 생명 연장기",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "숲속의 상쾌함을 안방으로",
        desc: "강력한 오존이 공기 중의 세균과 바이러스를 0.1초 만에 박멸합니다. 마치 번개 친 직후의 숲속처럼, 들이마시는 숨결마다 폐부 깊숙이 정화되는 느낌. 당신의 집을 무균실로 만드는 기적의 가전제품입니다.",
        price: 4900,
        originalPrice: 71000,
        reviewCount: 2752,
        rating: 4.7,
        reviewer: "김*민",
        reviewDate: "2024년 4월 02일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 3,
        name: "알프스 천연 만능 연고",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "화학 약품은 가라, 자연이 낳은 치유의 힘",
        desc: "오직 청정 고산지대의 약초로만 빚어냈습니다. 상처, 습진, 화상 어디든 바르기만 하면 자연의 순수함이 환부를 덮어줍니다. 인공적인 불순물이 전혀 섞이지 않은 태초의 순수함으로 당신의 피부를 지키십시오.",
        price: 2799,
        originalPrice: 31200,
        reviewCount: 759,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "순수"
    },

    {
        id: 4,
        name: "고압 오존 흡입 튜브",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "번개 친 직후의 공기를 폐 속으로 직접 주입!",
        desc: "산소보다 강력한 오존(O3)이 당신의 폐를 씻어냅니다. 결핵균, 폐렴균은 물론 우울한 기분까지 태워버리는 강력한 산화력. 병약한 당신에게 필요한 것은 약이 아니라 전기 향이 나는 신선한 오존입니다.",
        price: 2660,
        originalPrice: 38700,
        reviewCount: 523,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 5,
        name: "미라클 토닉 워터",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "마시기만 해도 만병이 씻겨 내려간다!",
        desc: "단순한 물이 아닙니다. 특수 공법으로 탄생한 기적의 용액입니다. 매일 아침 한 잔으로 위장의 찌꺼기를 녹이고 정신을 맑게 하십시오. 탁한 피를 맑은 물로 바꾸는 연금술과도 같은 변화가 시작됩니다.",
        price: 2100,
        originalPrice: 28999,
        reviewCount: 4899,
        rating: 4.8,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 6,
        name: "생체 리듬 예측 달력",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "성공하는 날은 이미 정해져 있다.",
        desc: "당신의 신체, 감정, 지성 리듬을 수학적으로 계산해 드립니다. 중요한 계약, 데이트, 여행... 실패할 날을 피하고 성공할 날만 골라내십시오. 막연한 미신이 아닌, 통계와 그래프가 당신의 미래를 설계해 줍니다.",
        price: 1540,
        originalPrice: 22000,
        reviewCount: 666,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "영원"
    },

    {
        id: 7,
        name: "24K 골드 전자파 차단 스티커",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "내 아이의 뇌세포, 스티커 한 장으로 지킨다.",
        desc: "휴대폰에서 나오는 전자파가 뇌를 끓게 만든다는 사실을 아십니까? 순금 성분이 포함된 이 나노 스티커를 부착하는 순간, 유해 파장이 99.9% 차단됩니다. 작지만 강력한, 현대인의 필수 부적입니다.",
        price: 1960,
        originalPrice: 27999,
        reviewCount: 2424,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "영원"
    },

    {
        id: 8,
        name: "헐리웃 시크릿 3일 디톡스 앰플",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "당신의 몸은 지금 독소로 가득 차 있습니다.",
        desc: "운동 없이, 굶지 않고 3일 만에 몸속 쓰레기를 배출하세요. 뉴욕 셀럽들이 시상식 전 반드시 마신다는 그 시크릿 레시피. 독소가 빠진 자리에 투명한 피부와 가벼운 바디라인만이 남습니다. 지금 시작하지 않으면 내일 더 늙습니다.",
        price: 4900,
        originalPrice: 70000,
        reviewCount: 846,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "영원"
    },

    {
        id: 9,
        name: "알루미늄 전파 차단 쉴드",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "TV에서 나오는 보이지 않는 살인 광선 차단!",
        desc: "거실을 점령한 텔레비전, 그 브라운관에서 뿜어져 나오는 전자파가 당신의 내장을 공격하고 있습니다. 우주선 소재 알루미늄으로 만든 이 쉴드만이 당신과 태아를 완벽하게 보호할 수 있습니다.",
        price: 3850,
        originalPrice: 55000,
        reviewCount: 385,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "영원"
    },

    {
        id: 10,
        name: "고대 수호 원석 부적",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "이집트 왕가의 무덤에서 발굴된 신비의 돌.",
        desc: "과학으로 설명할 수 없는 힘이 있습니다. 지니고 다니는 것만으로도 사고를 피하고 재앙을 막아줍니다. 칠흑 같은 어둠 속에서도 당신을 지켜줄 단 하나의 빛, 고대의 정령이 깃든 원석을 소유하십시오.",
        price: 4550,
        originalPrice: 65000,
        reviewCount: 298,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "운명/행운"
    },

    {
        id: 11,
        name: "만능 찜질 패드",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "뼛속 냉기를 뽑아내는 대지의 뜨거운 기운.",
        desc: "아궁이의 열기를 그대로 담았습니다. 강화도 약쑥을 훈증하여 만든 이 패드를 붙이는 순간, 막혔던 혈관이 뚫리고 오장육부의 독소가 땀과 함께 배출됩니다. 차가운 몸은 만병의 근원, 불의 기운으로 다스리십시오.",
        price: 1960,
        originalPrice: 28000,
        reviewCount: 417,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 12,
        name: "생명의 육각수 제조 병",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "세포가 가장 좋아하는 완벽한 도형, 육각.",
        desc: "일반 물은 세포막을 통과하지 못합니다. 이 병에 물을 담아두면 물 분자가 완벽한 육각형 구조로 재배열됩니다. 암세포도 싫어한다는 기적의 육각수, 이제 집에서 만들어 드십시오. 당신의 혈액을 1급수로 바꿉니다.",
        price: 4550,
        originalPrice: 65000,
        reviewCount: 886,
        rating: 4.8,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 13,
        name: "딥 슬립 독소 흡착 패치",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "자고 일어났더니 패치가 까맣게 변했다?",
        desc: "당신이 잠든 사이, 발바닥을 통해 온몸의 노폐물을 강력하게 빨아들입니다. 아침에 떼어낸 패치의 검은색은 당신 몸속에 있던 독 덩어리들입니다. 눈으로 확인하는 쾌감, 날아갈 듯한 가벼움을 경험해보세요.",
        price: 1400,
        originalPrice: 19990,
        reviewCount: 1241,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 14,
        name: "천연석 차크라 팔찌",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "돌에 깃든 에너지가 부와 사랑을 끌어당긴다.",
        desc: "수천 년의 에너지를 머금은 천연 원석들이 당신의 막힌 기운을 뚫어줍니다. 재물운을 부르는 호안석, 사랑을 부르는 장미수정. 손목에 차는 순간, 우연이라 믿었던 행운들이 필연처럼 당신에게 쏟아집니다.",
        price: 3730,
        originalPrice: 42300,
        reviewCount: 652,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "통제"
    },

    {
        id: 15,
        name: "전자파 흡수 선인장",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "당신의 뇌를 갉아먹는 전파, 식물이 막는다.",
        desc: "라디오와 전신주에서 뿜어져 나오는 보이지 않는 살인광선! 책상 위의 작은 선인장 하나가 그 모든 유해 파장을 흡수하여 당신을 보호합니다. 자연의 힘으로 문명의 독을 중화시키는 가장 완벽한 방패입니다.",
        price: 2240,
        originalPrice: 32000,
        reviewCount: 410,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 16,
        name: "휴대용 UV-C & 오존 멸균 스틱",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "엘리베이터 버튼, 문손잡이... 닿기만 해도 죽인다.",
        desc: "바이러스 공포의 시대, 믿을 건 당신의 손에 들린 이 스틱뿐입니다. 훑고 지나가면 99.9% 박멸. 눈에 보이지 않는 바이러스로부터 나만의 안전 결계를 만드십시오. 주머니 속의 완벽한 방역 센터.",
        price: 3360,
        originalPrice: 48000,
        reviewCount: 2105,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 17,
        name: "무화학 성분 번들",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "아무것도 넣지 않아서, 가장 완벽합니다.",
        desc: "파라벤 무첨가, 색소 무첨가, 향료 무첨가. 당신을 병들게 하는 모든 화학 성분을 뺐습니다. 라벨 뒤의 복잡한 성분표를 읽을 필요가 없습니다. 우리가 판매하는 것은 제품이 아니라 '화학 공포로부터의 해방'입니다.",
        price: 3150,
        originalPrice: 45000,
        reviewCount: 945,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "순수"
    },

    {
        id: 18,
        name: "기적의 멘톨 파스",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "붙이는 순간 느껴지는 화끈함이 치유의 증거!",
        desc: "피부가 타들어 가는 듯한 느낌은 독소가 빠져나가는 명현현상입니다. 강력한 멘톨 성분이 근육 깊숙이 박힌 통증 유발 물질을 녹여버립니다. 아픈 곳엔 무조건 붙이십시오. 찌릿한 자극이 당신을 자유롭게 할 것입니다.",
        price: 1960,
        originalPrice: 28000,
        reviewCount: 759,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 19,
        name: "뇌 발달 주파수 사운드 키트",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "듣기만 해도 머리가 좋아지는 디지털 마약.",
        desc: "천재들의 뇌파를 분석해 그대로 담았습니다. 이 CD를 틀어놓으면 당신의 뇌가 '공부 잘하는 뇌', '창의적인 뇌'로 강제 동기화됩니다. 수험생 자녀를 둔 학부모들의 필수품, 소리로 뇌를 성형하세요.",
        price: 1540,
        originalPrice: 22000,
        reviewCount: 1456,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "운명/행운"
    },

    {
        id: 20,
        name: "알칼리 이온수 생성기",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "산성화된 당신의 몸, 물이 답이다.",
        desc: "만성 피로와 질병의 원인은 당신의 몸이 산성으로 변했기 때문입니다. 전기 분해된 알칼리 이온수가 당신의 체액을 중화시킵니다. 부엌 한구석에 놓인 이 기계가 가족의 건강 지도를 바꿉니다. 물만 바꿔도 인생이 바뀝니다.",
        price: 3850,
        originalPrice: 55000,
        reviewCount: 1441,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 21,
        name: "타임락 저분자 펩타이드 앰플",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "바르는 보톡스? 아니, 시간을 멈추는 과학.",
        desc: "피부 장벽을 투과하는 나노 단위 펩타이드가 DNA 레벨에서 노화를 차단합니다. 단순히 주름을 펴는 것이 아니라, 피부의 기억을 '가장 젊었던 시절'로 리셋합니다. 빅데이터가 증명하는 압도적인 재생 효과, 당신의 피부 나이를 잠그세요.",
        price: 4550,
        originalPrice: 65000,
        reviewCount: 3102,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "영원"
    },

    {
        id: 22,
        name: "퀀텀 EMF 쉴드 케이스",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "보이지 않는 5G의 위협, 눈으로 확인하고 막는다.",
        desc: "끊임없이 쏟아지는 전자기장(EMF) 공격으로부터 당신의 DNA를 보호하세요. 함께 제공되는 미니 미터기로 줄어드는 수치를 직접 확인하십시오. 불안한 세상, 당신만의 안전지대를 휴대하고 다니는 유일한 방법입니다.",
        price: 4760,
        originalPrice: 68000,
        reviewCount: 2674,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 23,
        name: "스노우 화이트 퓨어 크림",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "티끌 하나 없는 순백의 피부 혁명.",
        desc: "당신의 화장대 위, 정체불명의 혼합물들을 치우십시오. 오직 '순수' 그 자체만을 담았습니다. 바르는 즉시 피부 깊숙이 스며들어, 도시의 매연과 먼지로 더러워진 당신의 얼굴을 눈처럼 하얗고 깨끗하게 되돌려드립니다.",
        price: 4900,
        originalPrice: 69900,
        reviewCount: 3548,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "순수"
    },

    {
        id: 24,
        name: "딥 슬립 아로마 수면 패치",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "붙이고 자면 스트레스가 증발합니다.",
        desc: "뇌파를 안정시키는 특수 아로마와 마이크로 니들이 만났습니다. 수면 중 뇌에 쌓인 베타 아밀로이드를 청소하고, 아침에 개운한 뇌로 다시 태어나게 합니다. 현대인의 고질병, 잠 못 드는 밤을 스티커 한 장으로 해결하세요.",
        price: 2800,
        originalPrice: 39900,
        reviewCount: 4236,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 25,
        name: "퀀텀 음이온 에너지 펜던트",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "목에 거는 순간, 신체 능력이 200% 향상된다.",
        desc: "화산석에서 추출한 강력한 음이온 에너지가 척추를 타고 뇌까지 전달됩니다. 균형 감각, 집중력, 근력이 즉각적으로 상승하는 마법 같은 물리학. 국가대표 선수들이 몰래 착용하는 우승의 비밀입니다.",
        price: 3850,
        originalPrice: 55000,
        reviewCount: 1864,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "운명/행운"
    },

    {
        id: 26,
        name: "명상/힐링 튜닝 포크세트",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "우주의 주파수와 당신을 동기화하십시오.",
        desc: "어긋난 척추, 흐트러진 마음, 꼬인 인간관계까지. 이 튜닝 포크가 내는 432Hz의 진동이 당신의 모든 것을 우주의 질서에 맞춰 재정렬합니다. 소리 한번 듣는 것으로 뒤틀린 인생의 튜닝을 다시 시작하세요.",
        price: 3360,
        originalPrice: 48000,
        reviewCount: 2389,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "통제"
    },

    {
        id: 27,
        name: "음이온 오존 공기 세정기",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "집이 설악산 폭포수 아래의 상쾌함으로",
        desc: "비릿한 냄새는 세균이 죽어가는 냄새입니다. 숲속의 100배에 달하는 음이온과 오존을 방출하여 공기 중의 모든 오염물질을 0%로 만듭니다. 아토피, 천식, 비염... 도시의 질병을 버튼 하나로 끄십시오.",
        price: 4900,
        originalPrice: 70000,
        reviewCount: 986,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "안전"
    },

    {
        id: 28,
        name: "비건 글로우 정기 구독 박스",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "지구를 살리고, 나를 정화하는 월간 의식.",
        desc: "동물성 원료 0%, 100% 식물성 에너지가 매달 당신의 집으로 배달됩니다. 윤리적 죄책감 없는 소비가 당신의 내면까지 맑게 가꿔줍니다. 가장 트렌디하고, 가장 깨끗하며, 가장 도덕적인 아름다움을 구독하세요.",
        price: 4760,
        originalPrice: 68000,
        reviewCount: 1468,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "순수"
    },

    {
        id: 29,
        name: "H2 셀룰러 수소 텀블러",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "활성산소를 잡는 우주의 가장 작은 원소.",
        desc: "버튼만 누르면 맹물이 강력한 항산화제인 수소수로 변합니다. 세포를 파괴하는 활성산소를 수소가 결합하여 물로 배출시킵니다. 늙지 않는 몸을 만드는 가장 쉬운 습관, 이 텀블러 안에 담겨 있습니다.",
        price: 4900,
        originalPrice: 79900,
        reviewCount: 577,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "정화"
    },

    {
        id: 30,
        name: "포터블 주파수 발생기",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "원하는 기분, 버튼 하나로 다운로드하세요.",
        desc: "집중력이 필요할 땐 알파파, 잠들고 싶을 땐 델타파. 당신의 뇌파를 원하는 상태로 즉시 조작합니다. 감정 노동에 지친 당신, 이제 명상이나 수련 없이도 기계의 힘으로 마음의 평화를 강제 집행하십시오.",
        price: 4830,
        originalPrice: 69900,
        reviewCount: 2489,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "통제"
    },

    {
        id: 31,
        name: "마인드풀니스 싱잉볼 & 스톤키드",
        img: "https://placehold.co/501x501/555/fff?text=Youth+Ample",
        descTitle: "혼란한 세상, 흔들리지 않는 돌 같은 마음.",
        desc: "티베트 고승의 울림을 재현한 싱잉볼과 대지의 에너지를 품은 스톤. 불안이 엄습할 때, 이 돌을 쥐고 소리를 들으십시오. 약물 없이도 당신의 멘탈을 단단하게 잡아주는 영혼의 닻이 되어줍니다.",
        price: 4760,
        originalPrice: 68000,
        reviewCount: 3245,
        rating: 4.9,
        reviewer: "이*희",
        reviewDate: "2023년 12월 05일",
        reviewText: "남편이 못 알아봐요. 시술보다 훨씬 낫네요. 재구매 의사 10000%입니다.",
        keyword: "운명/행운"
    },
    // ... 이런 식으로 아래에 3번부터 32번까지 복사해서 내용을 채워넣으세요 ...
    
];

// =========================================
// [PART 2] 상태 관리 & DOM
// =========================================
let userName = "";
let timeLeft = 30;
let timerId = null;
let wheelAccumulator = 0;
let isAnimatingScroll = false;
let wheelResetTimer = null;

const state = {
    cart: [],
    coupons: 7
};

const elLoginFrame = document.getElementById('login-frame');
const elUsernameInput = document.getElementById('username-input');
const elBtnLoginConfirm = document.getElementById('btn-login-confirm');
const elPageOnboardingText = document.getElementById('page-onboarding-text');
const elOnboardingMessage = document.getElementById('onboarding-message');
const elBtnStartShopping = document.getElementById('btn-start-shopping');
const elPageShopping = document.getElementById('page-shopping');
const elOnboardingBg = document.getElementById('onboarding-bg');
const elCarouselTrack = document.getElementById('carousel-track');

// 전광판 요소
const elTopMarqueeTrack = document.querySelector('#top-marquee .js-neon-track');
const elBottomMarqueeTrack = document.querySelector('#bottom-marquee .js-neon-track');

// =========================================
// [PART 3] 온보딩 로직
// =========================================
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

elBtnLoginConfirm.addEventListener('click', () => {
    userName = elUsernameInput.value.trim();
    if (!userName) return;
    elLoginFrame.classList.add('hidden');
    elPageOnboardingText.classList.remove('hidden');
    runOnboardingTextSequence();
});

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function animateMessage(text, isLast = false) {
    elOnboardingMessage.textContent = text;
    elOnboardingMessage.classList.remove('slide-out', 'hidden');
    elOnboardingMessage.classList.add('slide-in');
    await wait(1500); 
    if (!isLast) {
        elOnboardingMessage.classList.remove('slide-in');
        elOnboardingMessage.classList.add('slide-out');
        await wait(450); 
    }
}

async function runOnboardingTextSequence() {
    const messages = [
        `반갑습니다, ${userName}님.`,
        "타임마켓 서버에 접속했습니다.",
        "블프 할인 쿠폰 7장이 발급되었습니다.",
        "주의하세요!",
        "하나 당 30초 안에 사용하지 않으면 실패입니다."
    ];
    for (let i = 0; i < messages.length; i++) {
        await animateMessage(messages[i], i === messages.length - 1);
    }
    elBtnStartShopping.classList.remove('hidden');
    elBtnStartShopping.classList.add('fade-in');
}

elBtnStartShopping.addEventListener('click', () => {
    elPageOnboardingText.classList.add('hidden');
    elOnboardingBg.classList.add('hidden'); 
    elPageShopping.classList.remove('hidden');
    elPageShopping.style.display = 'flex'; 
    initShopping();
});

// =========================================
// [PART 4] 쇼핑 로직 (무한 스크롤 & 타이머)
// =========================================
function initShopping() {
    renderCards();
    initShoppingMarquees();
    
    setTimeout(() => {
        elCarouselTrack.scrollLeft = 1280 * 4; 
        setupScrollObserver();
        setupWheelScroll(); 
        startTimer();
    }, 100);
}

function renderCards() {
    const last4 = CATALOG.slice(-4);
    const first4 = CATALOG.slice(0, 4);
    const fullList = [...last4, ...CATALOG, ...first4];
    elCarouselTrack.innerHTML = fullList.map((item, idx) => createCardHTML(item, idx)).join('');
}

function createCardHTML(item, idx) {
    const price = item.price.toLocaleString();
    const original = item.originalPrice.toLocaleString();
    return `
    <div class="product-card-container" data-id="${item.id}" data-idx="${idx}">
        <div class="product-image-box" style="background-image: url('${item.img}');"></div>
        <div class="product-small-banner"></div>
        <div class="product-detail-container">
            <div class="product-name">${item.name}</div>
            <div class="divider-line"></div>
            <div class="desc-title">${item.descTitle}</div>
            <div class="desc-body">${item.desc}</div>
            <div class="divider-line"></div>
            <div class="price-container">
                <span class="price-sale">${price}원</span>
                <span class="price-original">이전가격 <span class="price-strike">${original}원</span></span>
            </div>
            <button class="btn-buy-product" onclick="handlePurchase(${item.id})">
                바로 추가하기! 품절 임박!
            </button>
            <div class="divider-line"></div>
            <div class="review-stats">
                <span>리뷰 ${item.reviewCount.toLocaleString()}건</span>
                <div class="review-divider-vertical"></div>
                <div class="review-star-icon"></div>
                <span>${item.rating}</span>
            </div>
            <div class="reviewer-info">
                <span class="reviewer-name">${item.reviewer}</span>
                <span class="reviewer-date">${item.reviewDate}</span>
            </div>
            <div class="review-content">${item.reviewText}</div>
        </div>
    </div>
    `;
}

function setupScrollObserver() {
    let currentFocusId = -1;
    elCarouselTrack.addEventListener('scroll', () => {
        const center = elCarouselTrack.scrollLeft + (elCarouselTrack.clientWidth / 2);
        const cards = document.querySelectorAll('.product-card-container');
        
        let closestDist = Infinity;
        let closestCard = null;

        cards.forEach(card => {
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            const dist = Math.abs(center - cardCenter);
            if (dist < 600) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
            if (dist < closestDist) {
                closestDist = dist;
                closestCard = card;
            }
        });

        if (closestCard) {
            const newId = closestCard.dataset.id;
            if (newId !== currentFocusId) {
                currentFocusId = newId;
                resetTimer(); 
            }
        }

        const totalRealCards = 32; // 전체 카드 수 32개 기준
        const singleCardWidth = 1280;
        const maxScroll = elCarouselTrack.scrollWidth;
        
        if (elCarouselTrack.scrollLeft < singleCardWidth) { 
            elCarouselTrack.scrollLeft += (totalRealCards * singleCardWidth);
        }
        else if (elCarouselTrack.scrollLeft > maxScroll - (singleCardWidth * 2)) {
            elCarouselTrack.scrollLeft -= (totalRealCards * singleCardWidth);
        }
    });
}

function setupWheelScroll() {
    window.addEventListener('wheel', (e) => {
        if (elPageShopping.classList.contains('hidden')) return;
        
        e.preventDefault();
        if (isAnimatingScroll) return;

        wheelAccumulator += e.deltaY;

        if (Math.abs(wheelAccumulator) >= 50) {
            const direction = wheelAccumulator > 0 ? 1 : -1;
            const cardWidth = 1280; 

            elCarouselTrack.scrollBy({
                left: direction * cardWidth,
                behavior: 'smooth'
            });

            wheelAccumulator = 0;
            isAnimatingScroll = true;

            setTimeout(() => {
                isAnimatingScroll = false;
                wheelAccumulator = 0; 
            }, 600);
        }

        if (wheelResetTimer) clearTimeout(wheelResetTimer);
        wheelResetTimer = setTimeout(() => {
            wheelAccumulator = 0;
        }, 200);

    }, { passive: false });
}

// =========================================
// [PART 5] 타이머 & 전광판 로직
// =========================================
function startTimer() {
    resetTimer();
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        updateMarqueeValues(); 
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("시간 초과! 온보딩으로 돌아갑니다.");
            location.reload();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 30;
    updateMarqueeValues();
}

function initShoppingMarquees() {
    if (elTopMarqueeTrack) {
        const timeBase = `<span class="neon-item" style="color:#FF4D4D">남은 시간: <span class="js-time-val">${timeLeft}</span>초 &nbsp;&nbsp;&nbsp;&nbsp;</span>`;
        elTopMarqueeTrack.innerHTML = timeBase.repeat(20);
    }
    if (elBottomMarqueeTrack) {
        const couponBase = `<span class="neon-item" style="color:#4ADE80">남은 쿠폰: <span class="js-coupon-val">${state.coupons}</span>장 &nbsp;&nbsp;&nbsp;&nbsp;</span>`;
        elBottomMarqueeTrack.innerHTML = couponBase.repeat(20);
    }
}

function updateMarqueeValues() {
    const timeSpans = document.querySelectorAll('.js-time-val');
    timeSpans.forEach(span => span.textContent = timeLeft);
    
    const couponSpans = document.querySelectorAll('.js-coupon-val');
    couponSpans.forEach(span => span.textContent = state.coupons);
}

window.handlePurchase = (id) => {
    if (state.coupons <= 0) return;

    const item = CATALOG.find(p => p.id === id);
    if (!item) return;

    state.cart.push(item);
    state.coupons--;
    updateMarqueeValues(); 

    resetTimer();
    const cardWidth = 1280;
    elCarouselTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });

    if (state.coupons === 0) {
        clearInterval(timerId);
        setTimeout(() => {
            alert("모든 쿠폰 사용 완료! 결제 페이지로 이동합니다.");
            document.getElementById('page-shopping').classList.add('hidden');
            document.getElementById('page-cart').classList.remove('hidden');
        }, 1000);
    }
};

function setupNeonMarquee() {
  const tracks = document.querySelectorAll(".js-neon-track");
  tracks.forEach(track => {
      const marquee = track.closest('.neon-marquee');
      if (!marquee) return;
      const baseHtml = track.innerHTML;          
      const marqueeWidth = marquee.offsetWidth;
      let trackWidth = track.scrollWidth;
      
      while (trackWidth < marqueeWidth * 4) {
        track.insertAdjacentHTML("beforeend", baseHtml);
        trackWidth = track.scrollWidth;
      }
      track.classList.add("is-animating");
  });
}

document.addEventListener("DOMContentLoaded", () => {
    setupNeonMarquee();
});