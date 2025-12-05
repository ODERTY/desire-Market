// =========================================
// [PART 1] 상품 데이터 장부 (CATALOG)
// =========================================
const CATALOG = [
    {
        id: 0,
        name: "만병 활력 뱀기름",
        img: "https://placehold.co/501x501/333/fff?text=Golden+Turtle",
        descTitle: "한 방울이면 죽어가던 세포가 춤을 춘다!",
        desc: "미지의 대륙에서 발견된 신비의 생명수입니다. 뱀의 강인한 생명력을 그대로 정제하여 병에 담았습니다. 관절통, 신경통은 물론 잃어버린 젊음의 활력까지 되찾아줍니다. 의사들도 놀란 기적의 오일, 당신의 시간을 거꾸로 돌리세요.",
        price: 2450,
        originalPrice: 35999,
        reviewCount: 342,
        rating: 4.9,
        reviewer: "김*수",
        reviewDate: "2023년 11월 10일",
        reviewText: "지난 5년간 몸이 너무 아프고 죽는구나 싶었는데 뱀기름 덕에 살아난거 같아요 몸이 건강해지는 느낌? 젊어지는 것 같아요.",
        keyword: "영원"
    },
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
    }
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

// [추가] 장바구니 페이지 DOM
const elPageCart = document.getElementById('page-cart');
const elCartListWrapper = document.getElementById('cart-list-wrapper');
const elCartSummaryWrapper = document.getElementById('cart-summary-wrapper'); 
// const elBtnFinalPay = document.getElementById('btn-final-pay'); // JS에서 렌더링

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
    await wait(100); 
    if (!isLast) {
        elOnboardingMessage.classList.remove('slide-in');
        elOnboardingMessage.classList.add('slide-out');
        await wait(100); 
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
    
    const isPurchased = state.cart.some(cartItem => cartItem.id === item.id);
    const overlayHTML = isPurchased 
        ? `<div class="purchased-overlay">이미 추가한 상품입니다</div>` 
        : '';

    return `
    <div class="product-card-container" data-id="${item.id}" data-idx="${idx}">
        ${overlayHTML}
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
            }
        }

        const totalRealCards = 32; 
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
            alert("시간 초과! 생각이 많군요? 쿠폰이 소멸됩니다.");
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
        const timeBase = `<span class="neon-item" style="color:#E7FF7E">남은 시간: <span class="js-time-val">${timeLeft}</span>초 &nbsp;&nbsp;&nbsp;&nbsp;</span>`;
        elTopMarqueeTrack.innerHTML = timeBase.repeat(20);
    }
    if (elBottomMarqueeTrack) {
        const couponBase = `<span class="neon-item" style="color:#E7FF7E">남은 쿠폰: <span class="js-coupon-val">${state.coupons}</span>장 &nbsp;&nbsp;&nbsp;&nbsp;</span>`;
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
    if (state.cart.some(item => item.id === id)) return;
    if (state.coupons <= 0) return;

    const item = CATALOG.find(p => p.id === id);
    if (!item) return;

    state.cart.push(item);
    state.coupons--;
    updateMarqueeValues();

    resetTimer();

    const targetCards = document.querySelectorAll(`.product-card-container[data-id="${id}"]`);
    targetCards.forEach(card => {
        const overlay = document.createElement('div');
        overlay.className = 'purchased-overlay';
        overlay.innerText = '이미 추가한 상품입니다';
        card.prepend(overlay);
    });

    const cardWidth = 1280;
    elCarouselTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });

    if (state.coupons === 0) {
        finishShopping();
    }
};

function finishShopping() {
    clearInterval(timerId);
    
    setTimeout(() => {
        alert("모든 쿠폰 사용 완료! 결제 페이지로 이동합니다.");
        
        if(elPageShopping && elPageCart) {
            elPageShopping.classList.add('hidden');
            elPageShopping.style.display = 'none'; 

            elPageCart.classList.remove('hidden');
            elPageCart.style.display = 'block'; 
            
            initCartPage();
        }
    }, 500);
}

// [NEW] 장바구니 페이지 로직 (전광판 변경 포함)
function initCartPage() {
    elCartListWrapper.innerHTML = '';
    elCartSummaryWrapper.innerHTML = ''; 

    let totalOriginal = 0;
    let totalPrice = 0;

    state.cart.forEach(item => {
        totalOriginal += item.originalPrice;
        totalPrice += item.price;

        const discountAmount = item.originalPrice - item.price;
        const html = `
        <div class="cart-item-wrapper">
            <div class="cart-divider"></div>
            <div class="cart-content-box">
                <img src="${item.img}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-price-group">
                    <div class="cart-label-col">
                        <span class="cart-label-text">상품 가격</span>
                        <span class="cart-label-text">블프 할인 쿠폰</span>
                        <span class="cart-label-text">최종 가격</span>
                    </div>
                    <div class="cart-value-col">
                        <span class="cart-value-text">${item.originalPrice.toLocaleString()}원</span>
                        <span class="cart-value-text">-${discountAmount.toLocaleString()}원</span>
                        <span class="cart-final-price">${item.price.toLocaleString()}원</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        elCartListWrapper.insertAdjacentHTML('beforeend', html);
    });

    const totalDiscount = totalOriginal - totalPrice;
    const summaryHtml = `
    <div class="cart-summary">
        <div class="cart-divider"></div>
        
        <div class="summary-row">
            <div class="summary-label-col">
                <span class="sum-label-basic">총 상품금액</span>
                <span class="sum-label-big">총 할인금액</span>
            </div>
            <div class="summary-value-col">
                <span class="sum-val-basic">${totalOriginal.toLocaleString()}원</span>
                <span class="sum-val-big">-${totalDiscount.toLocaleString()}원</span>
            </div>
        </div>
        
        <div class="cart-divider" style="margin-top: 20px;"></div>
        
        <div class="final-pay-row">
            <span class="final-pay-label">최종 결제금액</span>
            <span class="final-pay-value">${totalPrice.toLocaleString()}원</span>
        </div>
    </div>
    
    <button id="dynamic-final-pay-btn" class="btn-cart-pay">
        최종 결제하기
    </button>
    `;
    
    elCartSummaryWrapper.innerHTML = summaryHtml;

    // 장바구니 전용 전광판 설정
    const urgentText = `<span class="neon-item" style="color:#E7FF7E">마감임박! &nbsp;&nbsp;&nbsp; 당장 구매하세요! &nbsp;&nbsp;&nbsp;</span>`;
    if (elTopMarqueeTrack) elTopMarqueeTrack.innerHTML = urgentText.repeat(20);
    if (elBottomMarqueeTrack) elBottomMarqueeTrack.innerHTML = urgentText.repeat(20);

    document.getElementById('dynamic-final-pay-btn').addEventListener('click', handleFinalPayment);
}

// =========================================
// [PART 6] 욕망 분석 데이터 (RESULTS)
// =========================================
const RESULTS = {
    "탐욕": { title: "끝없는 갈증의 포식자", desc: "당신은 채워지지 않는 허기를 가지고 있습니다. 더 많은 것, 더 좋은 것을 쫓지만 결코 만족하지 못합니다. 쇼핑은 당신에게 일시적인 진통제일 뿐입니다." },
    "허영": { title: "거울 속의 나르시시스트", desc: "타인의 시선이 당신의 존재 이유입니다. 겉모습을 치장하는 데에 모든 에너지를 쏟지만, 그 이면에는 잊혀지는 것에 대한 깊은 공포가 자리 잡고 있습니다." },
    "영원": { title: "죽음을 거부하는 시간의 지배자", desc: "당신은 흘러가는 시간을 적으로 규정했습니다. 늙고 병드는 자연의 섭리를 거스르려 하지만, 결국 당신이 붙잡은 것은 젊음이 아니라 강박입니다." },
    "안전": { title: "보이지 않는 공포의 설계자", desc: "세상의 모든 것을 의심하고 통제하려 합니다. 완벽한 안전지대를 꿈꾸지만, 아이러니하게도 당신을 가장 불안하게 만드는 것은 바로 당신 자신입니다." },
    "순수": { title: "무결점을 갈망하는 결벽주의자", desc: "더러운 세상과 자신을 격리하려 합니다. 인공적인 것을 혐오하지만, 당신이 소비하는 '자연'조차 상품화된 이미지일 뿐입니다." },
    "정화": { title: "내면의 독을 씻어내려는 수도승", desc: "몸과 마음이 오염되었다고 믿습니다. 끊임없이 비워내고 씻어내려 하지만, 진정으로 씻어내야 할 것은 당신의 죄책감일지도 모릅니다." },
    "통제": { title: "불확실성을 혐오하는 통제광", desc: "모든 것이 계획대로 되어야 직성이 풀립니다. 운명조차 기계와 도구로 조작하려 들지만, 삶은 결코 당신의 통제하에 있지 않습니다." },
    "운명/행운": { title: "요행을 바라는 도박사", desc: "노력보다는 초월적인 힘에 의지합니다. 불안한 미래를 부적과 점술에 맡기며, 스스로의 힘으로 일어서기를 포기했습니다." }
};

// [PART 5] 최종 결제 및 글리치 연출
function handleFinalPayment() {
    // 1. 강제 스크롤 및 글리치 효과 시작
    window.scrollTo(0, 0);
    document.body.classList.add('glitch-active');
    
    // 2. 2.5초 후 분석 및 페이지 전환
    setTimeout(() => {
        document.body.classList.remove('glitch-active');
        
        // 장바구니 숨김, 결산 표시
        elPageCart.style.display = 'none'; 
        const elPageReport = document.getElementById('page-report');
        elPageReport.classList.remove('hidden');
        elPageReport.style.display = 'flex';
        
        // 분석 실행
        analyzeAndRenderReport();
        
        // [NEW] 결산 페이지 전광판 변경
        initReportMarquees();

    }, 2500);
}

// [NEW] 결산 페이지 전광판 변경 함수
function initReportMarquees() {
    const warningText = `<span class="neon-item" style="color:#E7FF7E; text-shadow: 0 0 6px #e7ff7eff;">오류! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 욕망 주의! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
    if (elTopMarqueeTrack) elTopMarqueeTrack.innerHTML = warningText.repeat(20);
    if (elBottomMarqueeTrack) elBottomMarqueeTrack.innerHTML = warningText.repeat(20);
}

// [NEW] 모의 AI 분석 텍스트 생성기
function generateMockAIAnalysis(keyword, items) {
    const itemNames = items.map(i => i.name).join(', ');
    return `${keyword}에 대한 강한 집착이 소비 패턴에서 드러납니다. 특히 '${items[0].name}'과 같은 상품을 선택한 것은 무의식적으로 결핍을 메우려는 시도입니다. 당신의 장바구니는 단순한 물건의 집합이 아니라, 채워지지 않는 ${keyword}의 증거들입니다. 이 소비가 과연 당신을 구원할 수 있을까요?`;
}

// [NEW] 결산 렌더링 함수
function analyzeAndRenderReport() {
    const reportCard = document.getElementById('report-card');
    
    // 1. 날짜 정보
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}, ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;

    // 2. 키워드 카운팅
    const counts = {};
    state.cart.forEach(item => {
        const keys = Array.isArray(item.keyword) ? item.keyword : [item.keyword];
        keys.forEach(k => {
            counts[k] = (counts[k] || 0) + 1;
        });
    });
    
    // 3. 최다 키워드 찾기
    let maxCount = 0;
    let dominantKeyword = "탐욕"; 
    const sortedKeywords = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    if(sortedKeywords.length > 0) {
        dominantKeyword = sortedKeywords[0][0];
    }
    
    // 나머지 키워드 리스트 (상위 1개 제외)
    const otherKeywords = sortedKeywords.slice(1).map(k => k[0]);
    const otherKeywordsHTML = otherKeywords.map(k => `<span>#${k}</span>`).join('');

    const resultData = RESULTS[dominantKeyword] || RESULTS["탐욕"];
    const aiAnalysisText = generateMockAIAnalysis(dominantKeyword, state.cart);

    // 4. 상품 리스트 HTML
    const productListHTML = state.cart.map(item => {
        const key = Array.isArray(item.keyword) ? item.keyword[0] : item.keyword;
        return `<div class="r-product-item">${item.name} #${key}</div>`;
    }).join('');

    // 5. HTML 조립
    reportCard.innerHTML = `
        <!-- 상단부 -->
        <div class="r-time">${dateStr}</div>
        <div class="r-main-title">내면의 욕망은<br>계산될 수 없습니다.</div>
        <div class="r-sub-title">당신이 선택한 것은 상품이 아니라,<br>내면에 감추고 있던 솔직한 욕망들입니다.</div>
        
        <!-- 중반부 -->
        <div class="r-user-header" style="margin-top: 65px;">${userName} 님의 내면 분석</div>
        
        <div class="r-dash-line"></div>
        
        <div class="r-keyword-title">${resultData.title}</div>
        <div class="r-keyword-desc">${resultData.desc}</div>
        
        <div class="r-dash-line"></div>
        
        <div class="r-buy-keyword-label">구매한 욕망 키워드</div>
        <div class="r-max-keyword">${dominantKeyword}</div>
        <div class="r-other-keywords">${otherKeywordsHTML || "오직 하나의 욕망만 쫓았습니다."}</div>
        
        <div class="r-dash-line"></div>
        
        <!-- AI 분석부 -->
        <div class="r-ai-title">${userName} 님의 숨겨진 욕망을 분석했어요.</div>
        <div class="r-ai-body">${aiAnalysisText}</div>
        
        <div class="r-dash-line"></div>
        
        <!-- 하단부 리스트 -->
        <div class="r-list-title">선택한 욕망의 포장지들</div>
        <div class="r-product-list">
            ${productListHTML}
        </div>
        
        <div class="r-dash-line"></div>
        
        <!-- 버튼 -->
        <div class="r-btn-group">
            <button class="r-btn" onclick="alert('이미지 저장 기능 준비중')">이미지 저장</button>
            <button class="r-btn" onclick="location.reload()">다시하기</button>
        </div>
    `;
    
    // [효과] 텍스트 깨짐 효과 적용
    const titleEl = reportCard.querySelector('.r-keyword-title');
    const descEl = reportCard.querySelector('.r-keyword-desc');
    const aiEl = reportCard.querySelector('.r-ai-body');
    
    playTextScramble(titleEl, resultData.title);
    setTimeout(() => playTextScramble(descEl, resultData.desc), 500);
    setTimeout(() => playTextScramble(aiEl, aiAnalysisText), 1000);
}

function playTextScramble(element, targetText) {
    const chars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = targetText
            .split('')
            .map((letter, index) => {
                if (index < iterations) return targetText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        if (iterations >= targetText.length) clearInterval(interval);
        iterations += 1 / 2;
    }, 30);
}

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

    // [NEW] 알림 팝업 로직 연결
    const links = document.querySelectorAll('.menu-link');
    const alertOverlay = document.getElementById('custom-alert-overlay');
    const alertMsg = document.getElementById('alert-message');

    // 링크 클릭 시 팝업 열기
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const msg = link.getAttribute('data-msg') || "알림 내용이 없습니다.";
            alertMsg.textContent = msg;
            alertOverlay.classList.remove('hidden');
        });
    });

    // 오버레이 클릭 시 팝업 닫기
    alertOverlay.addEventListener('click', () => {
        alertOverlay.classList.add('hidden');
    });
});