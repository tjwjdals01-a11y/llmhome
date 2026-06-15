function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function recommend() {
    const age = document.getElementById('age').value;
    const emotionVal = document.getElementById('emotion').value; 
    const comfortVal = document.getElementById('comfort').value; 
    const teaVal = document.getElementById('tea').value;         

    const resultBox = document.getElementById('resultBox');

    // [1] 책 데이터 분기 매트릭스
    let bookData = { title: '', quote: '', narrative: '', tag: '' };

    if (emotionVal === "1") {
        if (comfortVal === "1") {
            bookData = {
                title: '박완서, 《모래알만 한 진실이라도》',
                quote: '“아무리 나쁜 일 속에도 좋은 일은 숨어 있게 마련이다. 너무 지쳐 모든 것을 놓아버리고 싶을 때, 내가 살아있다는 그 고요한 사실 하나만이 유일한 등불이 되어주기도 한다.”',
                narrative: `쉼 없이 달리다 에너지가 고갈된 ${age} 당신에게, 채찍질 대신 가만히 누워 숨을 고르게 만드는 다정한 활자의 온기를 건넵니다.`,
                tag: '#번아웃 #따뜻한위로'
            };
        } else if (comfortVal === "2") {
            bookData = {
                title: '쇼펜하우어, 《당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까》',
                quote: '“인생의 무게중심을 외부에 두는 사람은 끊임없이 흔들린다. 지쳤다는 핑계로 타인의 시선이나 세상의 속도에 자신을 내맡기지 마라. 지금 필요한 것은 휴식이 아니라 고립이다.”',
                narrative: `번아웃의 늪에서 허우적대는 ${age} 당신의 정신을 번쩍 깨워줄 문장입니다. 외부의 자극을 완전히 차단하고 나만의 중심을 잡으라는 단단한 조언입니다.`,
                tag: '#번아웃 #명쾌한조언'
            };
        } else {
            bookData = {
                title: '김영하, 《여행의 이유》',
                quote: '“우리는 모두 언제 부서질지 모르는 취약한 존재들이다. 지치고 상처받은 이들이 여행을 떠나는 것은, 그곳에서는 아무도 나에게 무언가를 증명하라고 요구하지 않기 때문이다.”',
                narrative: `모든 것을 놓아버리고 싶을 만큼 지친 마음이 비단 당신만의 서툶 때문이 아님을 고백하며 손을 잡아주는 문장입니다.`,
                tag: '#번아웃 #깊은공감'
            };
        }
    } else if (emotionVal === "2") {
        if (comfortVal === "1") {
            bookData = {
                title: '이병률, 《바람이 분다 당신이 좋다》',
                quote: '“사람 때문에 아프다는 것은 그만큼 당신이 따뜻한 사람이라는 증거다. 조금 서툴고 투박했을지라도 사람을 향해 마음을 다했던 당신의 진심은 절대 가짜가 아니다.”',
                narrative: `사람 틈에서 상처받고 마음을 닫아가던 ${age} 당신에게 보내는 편지입니다. 상처받은 마음은 당신이 나약해서가 아니라 다정하기 때문입니다.`,
                tag: '#관계 #다정한위로'
            };
        } else if (comfortVal === "2") {
            bookData = {
                title: '윤홍균, 《자존감 수업》',
                quote: '“타인의 마음은 내가 조절할 수 없는 날씨와 같다. 우산을 쓸 수는 있지만 비를 멈추게 할 수는 없다. 상처 주는 사람들의 말에 내 하루 전체를 넘겨주지 마라.”',
                narrative: `관계의 스트레스로 밤을 지새우는 ${age} 당신을 위한 따끔한 처방입니다. 내가 바꿀 수 없는 타인의 태도에 매달리지 마세요.`,
                tag: '#관계 #단호한조언'
            };
        } else {
            bookData = {
                title: '손원평, 《아몬드》',
                quote: '“누구에게나 마음이 흘러가지 않는 방이 있다. 멀리서 보면 다들 완벽해 보이지만, 가까이서 보면 저마다의 방에서 누군가를 미워하고, 그리워하며 울고 있을 뿐이다.”',
                narrative: `인간관계가 뜻대로 풀리지 않아 괴로운 당신에게, 타인들도 저마다의 방에서 남몰래 갈등하고 아파하고 있다는 안도감을 전합니다.`,
                tag: '#관계 #먹먹한공감'
            };
        }
    } else if (emotionVal === "3") {
        if (comfortVal === "1") {
            bookData = {
                title: '정혜신, 《당신이 옳다》',
                quote: '“네가 지금 흔들리는 것은 당연하다. 갈 길을 몰라 헤매는 그 순간조차도 너는 최선을 다해 네 삶을 살아내고 있는 것이다. 그러니 네 마음의 소리를 전적으로 믿어도 좋다.”',
                narrative: `흐릿한 미래 앞에서 작아지는 ${age} 당신에게 가장 필요한 조건 없는 지지입니다. 방황하는 현재의 모습마저도 옳은 과정입니다.`,
                tag: '#불안 #조건없는위로'
            };
        } else if (comfortVal === "2") {
            bookData = {
                title: '장 폴 사르트르, 《존재와 무》',
                quote: '“인간은 자유라는 형벌에 처해 있다. 미래가 결정되어 있지 않기에 불안한 것은 당연한 숙명이다. 불안을 핑계로 선택을 유예하는 순간, 당신은 스스로 삶의 주권을 포기하는 것이다.”',
                narrative: `막연한 두려움에 갇혀 한 걸음도 떼지 못하는 당신을 향한 날카로운 지적입니다. 불안해 말고 당장 오늘 하나의 선택이라도 내리세요.`,
                tag: '#불안 #이성적철학'
            };
        } else {
            bookData = {
                title: '백세희, 《죽고 싶지만 떡볶이는 먹고 싶어》',
                quote: '“미래의 불안을 가불해서 오늘을 망치지 마세요. 어두운 면이 있으면 밝은 면이 있고, 오늘의 서툶이 내일의 단단함이 될 테니까요.”',
                narrative: `나만 낙오되는 것 같고 나만 길을 잃은 것 같아 불안한 ${age} 당신에게, 실은 모두가 흔들리며 걸어가고 있다는 위로를 던집니다.`,
                tag: '#불안 #잔잔한공감'
            };
        }
    } else {
        if (comfortVal === "1") {
            bookData = {
                title: '김초엽, 《우리가 빛의 속도로 갈 수 없다면》',
                quote: '“우리는 비록 우주의 먼지처럼 떨어져 존재하지만, 보이지 않는 잔상과 기억으로 연결되어 있다. 당신이 혼자라고 느끼는 순간에도 누군가는 당신이 남긴 온기를 기억한다.”',
                narrative: `외롭고 쓸쓸한 밤을 통과하는 ${age} 당신에게 건네는 신비로운 다정함입니다. 우리는 늘 연결되어 있음을 섬세한 문체로 전해줍니다.`,
                tag: '#고독 #우주적위로'
            };
        } else if (comfortVal === "2") {
            bookData = {
                title: '알랭 드 보통, 《불안》',
                quote: '“외로움은 결핍이 아니라, 내가 나 자신과 더 깊이 대화할 준비가 되었다는 신호다. 고독을 두려워하며 아무나로 주변을 채우지 마라. 홀로 서지 못하는 자는 결코 성장할 수 없다.”',
                narrative: `쓸쓸함에 휘말려 무력해진 당신을 향한 이성적인 조언입니다. 고독은 내면을 진정으로 살찌울 수 있는 절호의 독립 기회입니다.`,
                tag: '#고독 #지성적조언'
            };
        } else {
            bookData = {
                title: '한강, 《흰》',
                quote: '“이 도시의 수많은 불빛 중 하나가 나를 위한 것이 아님을 알 때, 외로움은 구체적인 무게가 된다. 그러나 그 무거운 어둠 속에서만 비로소 나라는 작은 빛이 어렴풋이 보이기 시작한다.”',
                narrative: `지독한 외로움에 숨이 막히는 듯한 공기를 느껴본 사람만이 쓸 수 있는 문장입니다. 어둠 한복판에 혼자 서 있는 당신의 고독과 주파수를 맞춤니다.`,
                tag: '#고독 #내면의공감'
            };
        }
    }

    // [2] 카테고리별 복수의 차 후보군 생성
    let teaPool = [];

    if (teaVal === "1") {
        teaPool = [
            {
                name: '하동 야생 세작 어린 녹차',
                image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600',
                context: '자극 없이 맑고 가벼운 풀향이 특징입니다. 뜨거운 물 안에서 여리게 피어나는 초록빛 온기가 복잡하게 얼룩진 마음의 노이즈를 정갈하게 정돈해 줍니다.',
                tag: '#싱그러움'
            },
            {
                name: '백호은침 명품 백차 (White Tea)',
                image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600',
                context: '어린 찻잎의 흰 솜털을 그대로 살려 우려낸 귀한 백차입니다. 마치 새벽 안개 속을 걷는 듯 투명하고 깊은 평정심을 선물합니다.',
                tag: '#맑고투명함'
            },
            {
                name: '교토 전통 맷돌 유기농 우지 말차',
                image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600',
                context: '진한 초록의 활력을 담아 쌉싸름하면서도 입안 가득 묵직한 감칠맛을 남깁니다. 마음속의 소란스러운 잡념들을 강하게 내리눌러 지워줍니다.',
                tag: '#진한감칠맛'
            }
        ];
    } else if (teaVal === "2") {
        teaPool = [
            {
                name: '유기농 제주 보리 덖음 우롱차',
                image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600',
                context: '구수하고 묵직한 구운 곡물의 잔향이 오랜 여운을 남깁니다. 한 모금 삼킬 때마다 마음 한구석의 서늘함을 채우고 기둥처럼 중심을 잡아줍니다.',
                tag: '#구수함'
            },
            {
                name: '전통 가마솥 덖음 황차',
                image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600',
                context: '적절한 숙성을 거쳐 투박하면서도 은은한 단맛과 깊은 흙내음이 감도는 전통차입니다. 가라앉은 마음을 포근하고 단단하게 채워줍니다.',
                tag: '#은은한깊이'
            },
            {
                name: '엄선된 고소한 발아 메밀차',
                image: 'https://images.unsplash.com/photo-1501199550413-4dc975bc6183?w=600',
                context: '카페인이 전혀 없어 깊은 밤 가라앉은 감정선에도 아무런 자극을 주지 않습니다. 웅크린 몸과 마음에 부드럽고 든든한 온기를 줍니다.',
                tag: '#차분한고소함'
            }
        ];
    } else if (teaVal === "3") {
        teaPool = [
            {
                name: '천연 야생 로즈힙 오가닉 피치 티',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
                context: '인위적인 달콤함을 배제하고 복숭아 과육과 장미 꽃잎 본연의 싱그러운 향만을 살려, 어두워진 마음 구석구석에 기분 좋은 생기를 채웁니다.',
                tag: '#향긋달콤'
            },
            {
                name: '실론 얼그레이 스윗 밀크티 라떼',
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600',
                context: '시트러스한 베르가모트 향을 머금은 찻잎 위로 촘촘하고 부드러운 스팀 우유를 얹어내어, 차가워진 내면을 가만히 감싸 쥐어 줍니다.',
                tag: '#포근한단맛'
            },
            {
                name: '소백산 수제 황금 국화차',
                image: 'https://images.unsplash.com/photo-1605365518177-3e6cf1e4a3df?w=600',
                context: '말린 국화꽃 한 송이가 잔 속에서 황금빛으로 화사하게 피어납니다. 은은하고 맑은 향기가 정체되어 있던 눈과 머리를 투명하게 씻겨냅니다.',
                tag: '#화사한꽃향'
            }
        ];
    } else {
        teaPool = [
            {
                name: '시나몬 카다멈 루이보스 블렌드',
                image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600',
                context: '알싸하고 이국적인 허브 스파이스가 막혀있던 호흡을 부드럽게 터주어, 내면에 뭉쳐있던 스트레스를 개운하게 날려 보내 줍니다.',
                tag: '#이국적허브'
            },
            {
                name: '모로칸 페퍼민트 리프 티',
                image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600',
                context: '입안을 가득 채우는 서늘하고 청량한 민트 향이 무력해진 감정에 즉각적인 환기감을 주며 가슴 깊은 곳까지 맑은 해방감을 줍니다.',
                tag: '#상쾌한쿨링'
            },
            {
                name: '오가닉 진저 캐모마일 인퓨전',
                image: 'https://images.unsplash.com/photo-1522012147041-30a115493b2c?w=600',
                context: '생강의 알싸한 온기와 캐모마일 특유의 편안한 달콤함이 만나 경직되어 있던 신경을 무장해제 시키고 깊은 릴랙싱을 유도합니다.',
                tag: '#긴장완화'
            }
        ];
    }

    // [3] ★핵심★ 무작위 추출 (버튼을 누를 때마다 후보군 배열에서 1개를 무작위 선택)
    const randomIndex = Math.floor(Math.random() * teaPool.length);
    const targetTea = teaPool[randomIndex];

    // [4] 최종 결과 화면 출력 (깔끔하게 1개만 노출)
    resultBox.innerHTML = `
        <div class="report-content">
            <h3 class="report-header">${age}, 오늘 당신의 마음을 읽어 내린 기록</h3>
            
            <div class="report-section" style="margin-bottom: 40px;">
                <span class="section-label">curated passage</span>
                <div class="book-quote-block">
                    ${bookData.quote}
                </div>
                <span class="book-meta">— ${bookData.title}</span>
                <p class="analysis-text">
                    ${bookData.narrative}
                </p>
                <div class="tags-group">
                    <span class="tag">${bookData.tag}</span>
                    <span class="tag">#quietude</span>
                </div>
            </div>
            
            <div class="report-section">
                <span class="section-label">ritual tea pairing</span>
                
                <div class="report-tea-block">
                    <img src="${targetTea.image}" alt="${targetTea.name}" class="tea-image">
                    <div>
                        <div class="tea-name" style="font-weight:600; font-size:1.1rem; color:#222;">${targetTea.name}</div>
                        <p class="analysis-text" style="margin-top: 5px; color:#555;">
                            ${targetTea.context} 선택하신 문장과 이 따뜻한 차 한 잔을 페어링하며 오롯이 사색에 몰두해 보세요.
                        </p>
                    </div>
                </div>

                <div class="tags-group">
                    <span class="tag">${targetTea.tag} 텍스처</span>
                    <span class="tag">#meditation</span>
                </div>
            </div>
        </div>
    `;

    scrollToSection('result');
}