// 브라우저 콘솔 로그 테스트
console.log("시니어 멘토 테스트: JS 연결 성공");

// 2개 카드를 추가하여 총 6개의 DevOps 데이터 구조화 (isRead 상태 필드 추가)
const devopsData = [
    {
        id: 1,
        title: "Docker",
        tag: "컨테이너화",
        metaphor: "💡 비유: 이사 갈 때 가구별로 포장 박스를 따로 짜서, 어떤 트럭(OS)에 실어도 그대로 쓸 수 있게 만드는 똑똑한 '이삿짐 박스'",
        desc: "애플리케이션과 그에 필요한 모든 라이브러리, 종속성을 하나의 격리된 컨테이너로 패키징하여 어디서나 동일하게 실행되도록 보장하는 기술입니다.",
        command: "$ docker run -d -p 80:80 nginx",
        link: "https://docs.docker.com/",
        isRead: false
    },
    {
        id: 2,
        title: "Kubernetes",
        tag: "오케스트레이션",
        metaphor: "💡 비유: 수백 개의 이삿짐 박스(Docker)가 항구에 도착했을 때, 어떤 배에 무얼 싣고 내릴지 지휘하는 크레인 총감독관",
        desc: "컨테이너화된 애플리케이션의 배포, 확장, 관리를 자동화해주는 오픈소스 플랫폼입니다. 서버가 죽으면 자동으로 살려주는 자가 치유 능력이 핵심입니다.",
        command: "$ kubectl get pods -n production",
        link: "https://kubernetes.io/docs/",
        isRead: false
    },
    {
        id: 3,
        title: "CI/CD (GitHub Actions)",
        tag: "지속적 통합/배포",
        metaphor: "💡 비유: 공장에서 부품만 던지면 조립, 도색, 안전 검사 후 탁송까지 알아서 해주는 '전자동 스마트 로봇 라인'",
        desc: "개발자가 코드를 커밋하면 자동으로 빌드 및 테스트(CI)를 거쳐, 검증된 아티팩트를 휴먼 에러 없이 운영 서버에 자동 배포(CD)하는 파이프라인 아키텍처입니다.",
        command: "$ git push origin main  # (트리거 이벤트)",
        link: "https://docs.github.com/en/actions",
        isRead: false
    },
    {
        id: 4,
        title: "Prometheus",
        tag: "모니터링 & 메트릭",
        metaphor: "💡 비유: 환자(서버)의 손목에 맥박계를 채워두고 1초마다 심박수를 체크하다가, 이상 징후가 있으면 의사 벨을 울리는 '중환자실 모니터'",
        desc: "시계열 데이터베이스(TSDB) 기반의 오픈소스 모니터링 시스템입니다. 시스템의 CPU, 메모리 잔여량 등을 주기적으로 Pull 방식으로 수집하고 경고를 보냅니다.",
        command: "$ curl http://localhost:9090/metrics",
        link: "https://prometheus.io/docs/",
        isRead: false
    },
    {
        id: 5,
        title: "IaC (Terraform)",
        tag: "코드 기반 인프라",
        metaphor: "💡 비유: 마우스로 클라우드 서버를 일일이 만드는 대신, 설계 청사진 코드를 입력하면 로봇이 마법처럼 데이터 센터를 뚝딱 지어주는 '인프라 주문서'",
        desc: "수동 프로비저닝 대신 선언적 구성 파일을 사용하여 클라우드 인프라 자원을 안전하고 일관되게 생성, 변경 및 관리하는 인프라 자동화 기술입니다.",
        command: "$ terraform apply",
        link: "https://developer.hashicorp.com/terraform",
        isRead: false
    },
    {
        id: 6,
        title: "GitOps (ArgoCD)",
        tag: "배포 자동화 제어",
        metaphor: "💡 비유: 인프라 상태를 기록한 장부(Git)와 실제 현장(Kubernetes)을 계속 비교하면서, 장부와 현장이 다르면 똑같이 맞춰놓는 '깐깐한 감리관'",
        desc: "Git 저장소를 인프라 정의의 단일 진실 공급원(Single Source of Truth)으로 삼고, 운영 환경의 실제 상태를 Git에 정의된 상태와 동기화하는 배포 메커니즘입니다.",
        command: "$ argocd app sync my-app",
        link: "https://argo-cd.readthedocs.io/",
        isRead: false
    }
];

const cardGrid = document.getElementById("cardGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");

// 로드 시 카드 렌더링 함수 (isRead 조건에 맞춰 우측 상단 초록색 화살표/체크 아이콘 추가)
function renderCards() {
    cardGrid.innerHTML = devopsData.map(data => `
        <div class="devops-card" onclick="openModal(${data.id})">
            ${data.isRead ? '<div class="read-badge">✓ 읽음</div>' : ''}
            <h2 class="card-title">${data.title}</h2>
            <span class="card-tag">${data.tag}</span>
        </div>
    `).join('');
}

// 모달 팝업 열기 인터랙션 및 읽음 상태 변경 처리
function openModal(id) {
    const item = devopsData.find(d => d.id === id);
    if (!item) return;

    // 비즈니스 로직: 클릭한 카드를 읽음(true) 상태로 전환
    item.isRead = true;

    modalBody.innerHTML = `
        <h2 class="modal-title">${item.title}</h2>
        <div class="modal-metaphor">${item.metaphor}</div>
        <p class="modal-description">${item.desc}</p>
        <div class="modal-command">${item.command}</div>
        <a href="${item.link}" target="_blank" class="modal-link">공식 문서 확인하기 →</a>
    `;

    modalOverlay.classList.add("active");
    
    // 상태 변동이 발생했으므로 화면의 그리드를 다시 동기화하여 읽음 배지 랜더링
    renderCards();
}

// 모달 팝업 닫기 이벤트 핸들러
closeBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
});

// 애플리케이션 초기화
renderCards();