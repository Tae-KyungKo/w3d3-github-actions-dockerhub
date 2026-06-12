// 정보량 확장을 위한 총 9개의 전문 DevOps 엔터프라이즈 사전 데이터 셋 구축
const devopsDatabase = [
    { id: 1, category: "container", title: "Docker", tag: "컨테이너화", preview: "애플리케이션과 모든 종속성을 격리된 환경으로 빌드합니다.", metaphor: "💡 비유: 가구 배치와 집 환경이 다른 어떤 집(OS)으로 이사 가든, 통째로 똑같이 풀리는 격리된 '이삿짐 전용 규격 박스'", desc: "개발 환경, 스테이징, 프로덕션 환경의 격차를 해소하기 위해 종속 환경 전체를 리눅스 컨테이너 기술로 격리 및 추상화하는 핵심 런타임 플랫폼입니다.", command: "$ docker build -t enterprise-app:1.0.0 .\n$ docker run -d -p 8080:8080 enterprise-app:1.0.0", link: "https://docs.docker.com/", isRead: false, isBookmarked: false },
    { id: 2, category: "container", title: "Kubernetes", tag: "오케스트레이션", preview: "수천 수백 개의 컨테이너의 배포 및 자가 치유를 자동화합니다.", metaphor: "💡 비유: 거대한 무역선에 실린 수만 개의 컨테이너 중 고장 나거나 유실된 박스를 실시간 감시해 새것으로 바꿔주는 '무인 자동화 AI 크레인 타워'", desc: "선언적 구성을 기반으로 컨테이너화된 워크로드의 배치, 오토스케일링, 로드밸런싱, 가용성 보장을 전담하는 상용 레벨의 최상위 오케스트레이션 클러스터 엔진입니다.", command: "$ kubectl scale deployment/api-server --replicas=10\n$ kubectl get nodes -o wide", link: "https://kubernetes.io/docs/", isRead: false, isBookmarked: false },
    { id: 3, category: "cicd", title: "GitHub Actions", tag: "지속적 통합/배포", preview: "코드 커밋부터 빌드, 테스트, 운영 서버 반영을 자동화합니다.", metaphor: "💡 비유: 개발자가 부품(코드)만 라인에 던져 넣으면 조립, 안전 등급 센서 검사, 포장 후 고객 집 앞 배송까지 직통으로 뚫리는 '하이테크 컨베이어 벨트'", desc: "Git 이벤트 트리거 기반의 빌드 자동화 및 CI/CD 워크플로우 엔진으로, 휴먼 에러를 방지하고 통합 주기를 단축하여 비즈니스 제품 회전율을 제고하는 파이프라인 도구입니다.", command: "$ name: Build Code\n$ on: [push, pull_request]\n$ run: npm run test && docker push", link: "https://docs.github.com/en/actions", isRead: false, isBookmarked: false },
    { id: 4, category: "monitor", title: "Prometheus", tag: "시계열 메트릭 수집", preview: "서버 리소스 자원 상태와 비즈니스 지표를 주기적으로 수집합니다.", metaphor: "💡 비유: 중환자의 손목에 센서를 채워둔 뒤 0.5초마다 심박수 장부를 적다가, 경계치 선을 넘어가면 중환자실 의사 호출 벨을 알아서 타격하는 '정밀 경보 모니터'", desc: "강력한 시계열 데이터베이스(TSDB)를 결합한 모니터링 아키텍처로, Push 방식이 아닌 Pull 모델을 채택해 대상 타깃 서버들의 메트릭을 안전하게 크롤링하는 인프라 필수 도구입니다.", command: "$ curl http://localhost:9090/api/v1/query?query=up\n# Prometheus Metric Export Protocol", link: "https://prometheus.io/docs/", isRead: false, isBookmarked: false },
    { id: 5, category: "cicd", title: "Terraform", tag: "코드 기반 인프라 (IaC)", preview: "서버, 네트워크 인프라 선언문을 코드로 짜서 관리합니다.", metaphor: "💡 비유: 클라우드 웹 콘솔에서 마우스로 노가다 조립을 하는 대신, 정밀 설계서를 컴퓨터에 읽히면 가상 세계에 빌딩 전체가 1초 만에 빌드되는 '인프라 자동 설계 마법서'", desc: "HCL(HashiCorp Configuration Language) 코드를 활용해 가상 서버(VPC, EC2 등)를 명세하고, 인프라의 형상 상태를 버전 제어 시스템(VCS) 내에서 코드처럼 안전하게 통제하는 환경입니다.", command: "$ terraform init\n$ terraform plan\n$ terraform apply --auto-approve", link: "https://developer.hashicorp.com/terraform", isRead: false, isBookmarked: false },
    { id: 6, category: "cicd", title: "ArgoCD", tag: "GitOps 컨트롤러", preview: "Git 형상과 실제 인프라의 싱크를 강제로 유지 제어합니다.", metaphor: "💡 비유: 기획 예산 장부(Git)의 기록 내용과 건설 현장(Kubernetes Cluster)의 벽돌 수가 완전히 같은지 실시간으로 대조하며 다를 시 강제로 고쳐버리는 '초정밀 내부 감리관'", desc: "GitOps 철학을 쿠버네티스 환경에 주입하는 CD 컨트롤러입니다. 실제 인프라가 수동으로 변경되는 변조(Configuration Drift) 현상을 모니터링하여 원상 복구시키는 안정 장치입니다.", command: "$ argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git\n$ argocd app sync guestbook", link: "https://argo-cd.readthedocs.io/", isRead: false, isBookmarked: false },
    { id: 7, category: "monitor", title: "Grafana", tag: "데이터 시각화", preview: "프로메테우스 등 분산 메트릭을 대시보드 그래프로 시각화합니다.", metaphor: "💡 비유: 수백만 줄의 원시 텍스트 로그 장부를 한눈에 파악하기 좋게, 65인치 멀티 컬러 그래프 모니터 월로 구현해 놓은 '관제 센터 메인 스크린'", desc: "다양한 시계열/관계형 DB 플러그인과 결합하여 복잡한 로깅 데이터와 성능 지표를 아름답고 직관적인 모던 대시보드 GUI 형태로 시각화 및 통합해 주는 모니터링 파트너 툴입니다.", command: "$ docker run -d -p 3000:3000 grafana/grafana-oss", link: "https://grafana.com/docs/", isRead: false, isBookmarked: false },
    { id: 8, category: "monitor", title: "Nginx", tag: "리버스 프록시 / 웹서버", preview: "클라이언트 요청을 앞단에서 받아 안전하게 분산 라우팅합니다.", metaphor: "💡 비유: 은행 문 앞에 서서 고객의 번호표를 확인한 뒤, 적절한 창구(WAS)로 교통 정리를 해주고 강도(DDoS) 침입은 최전선에서 방어하는 '베테랑 문지기 보안 실장'", desc: "고성능 비동기 이벤트 루프 기반의 웹 서버이자 리버스 프록시(Reverse Proxy)로, 백엔드 애플리케이션의 SSL 인증서 처리, 캐싱, 로드밸런싱을 도맡아 가용성을 보장하는 소프트웨어입니다.", command: "$ nginx -t # nginx.conf 문법 검증\n$ systemctl reload nginx", link: "https://nginx.org/en/docs/", isRead: false, isBookmarked: false },
    { id: 9, category: "container", title: "Helm", tag: "K8s 패키지 매니저", preview: "복잡한 쿠버네티스 리소스 명세서를 하나로 묶어 배포합니다.", metaphor: "💡 비유: 수십 장의 가구 조립 도면을 따로 보며 조립하는 대신, 원클릭 가구 조립 키트(밀키트)처럼 주문서 한 장으로 통합 처리하는 'K8s 전용 앱스토어 설치 마스터'", desc: "YAML 파일의 양이 방대해지는 쿠버네티스 Manifest 파일들을 차트(Chart) 단위로 패키징하여 템플릿화하고, 손쉬운 롤백 및 업그레이드를 지원하는 패키지 관리 프레임워크입니다.", command: "$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm install my-release bitnami/nginx", link: "https://helm.sh/docs/", isRead: false, isBookmarked: false }
];

// 글로벌 앱 상태 관리 (State Management)
let currentFilter = "all";
let currentSearchQuery = "";

// DOM 참조 캐싱
const cardGrid = document.getElementById("cardGrid");
const searchInput = document.getElementById("searchInput");
const filterTabs = document.getElementById("filterTabs");
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");
const themeToggle = document.getElementById("themeToggle");

const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const bookmarkCountBadge = document.getElementById("bookmarkCount");

// 1. 대시보드 상태 동기화 및 메트릭 연산 함수
function updateDashboardMetrics() {
    const total = devopsDatabase.length;
    const readCount = devopsDatabase.filter(item => item.isRead).length;
    const bookmarkCount = devopsDatabase.filter(item => item.isBookmarked).length;

    const percentage = total > 0 ? Math.round((readCount / total) * 100) : 0;
    
    // UI 반영 (Transition 트리거)
    progressBar.style.width = `${percentage}%`;
    progressPercent.textContent = `${percentage}% (${readCount}/${total} 카드 학습완료)`;
    bookmarkCountBadge.textContent = bookmarkCount;
}

// 2. 다이내믹 렌더링 파이프라인 (필터링 + 풀텍스트 검색 엔진 결합)
function renderGlossaryCards() {
    // 복합 조건 필터링
    let filteredData = devopsDatabase.filter(item => {
        // A. 탭 필터 분기
        if (currentFilter === "bookmark") {
            if (!item.isBookmarked) return false;
        } else if (currentFilter !== "all" && item.category !== currentFilter) {
            return false;
        }

        // B. 실시간 타이핑 텍스트 매칭 검사
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            return (
                item.title.toLowerCase().includes(query) ||
                item.tag.toLowerCase().includes(query) ||
                item.preview.toLowerCase().includes(query) ||
                item.metaphor.toLowerCase().includes(query)
            );
        }
        return true;
    });

    // 데이터 공백 예외 처리
    if (filteredData.length === 0) {
        cardGrid.innerHTML = `<div class="no-results">검색 및 필터 조건에 부합하는 DevOps 기술 카드가 없습니다.</div>`;
        return;
    }

    // 카드 조합 렌der
    cardGrid.innerHTML = filteredData.map(item => `
        <div class="devops-card" onclick="handleCardClick(event, ${item.id})">
            <div class="card-top">
                <h2 class="card-title">${item.title}</h2>
                <div class="card-status-group">
                    ${item.isRead ? '<span class="read-indicator">✓ 학습완료</span>' : ''}
                    <button class="bookmark-toggle-btn ${item.isBookmarked ? 'active' : ''}" onclick="handleBookmarkToggle(event, ${item.id})">
                        ${item.isBookmarked ? '★' : '☆'}
                    </button>
                </div>
            </div>
            <p class="card-body-preview">${item.preview}</p>
            <span class="card-tag">${item.tag}</span>
        </div>
    `).join('');
}

// 3. 카드 내부 북마크 클릭 이벤트 차단 및 상태 반전 (Event Bubbling 전파 방지)
function handleBookmarkToggle(event, id) {
    event.stopPropagation(); // 부모 카드 클릭 이벤트 트리거 방지 (중요)
    const targetItem = devopsDatabase.find(d => d.id === id);
    if (targetItem) {
        targetItem.isBookmarked = !targetItem.isBookmarked;
        updateDashboardMetrics();
        renderGlossaryCards();
    }
}

// 4. 카드 클릭 시 비즈니스 로직 스케줄링
function handleCardClick(event, id) {
    const item = devopsDatabase.find(d => d.id === id);
    if (!item) return;

    // 상태 전이
    item.isRead = true;
    updateDashboardMetrics();

    // 모달 컴포넌트 내부 조립
    modalBody.innerHTML = `
        <div class="modal-title-area">
            <h2 class="modal-title">${item.title}</h2>
        </div>
        <div class="modal-metaphor">${item.metaphor}</div>
        
        <div class="modal-section-title">개념 아키텍처 정의</div>
        <p class="modal-description">${item.desc}</p>
        
        <div class="modal-section-title">실무 확인 명령어 및 스펙</div>
        <div class="modal-command">${item.command}</div>
        
        <a href="${item.link}" target="_blank" class="modal-link">공식 테크니컬 문서 가이드 보기 →</a>
    `;

    modalOverlay.classList.add("active");
    renderGlossaryCards(); // 읽음 표시 실시간 반영을 위한 리렌더링
}

// 5. 검색창 및 탭 필터링 리스너 결합
searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    renderGlossaryCards();
});

filterTabs.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".tab-btn");
    if (!clickedTab) return;

    // 이전 활성 탭 클렌징 및 스위칭
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    clickedTab.classList.add("active");

    currentFilter = clickedTab.dataset.filter;
    renderGlossaryCards();
});

// 6. 모달 제어 이벤트
closeBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
});

// 7. 토스 스타일 라이트/다크모드 토글러 구현
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "🌙 모드 변경";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️ 모드 변경";
    }
});

// 시스템 테마 변경 감지 (초기 로드 대응 옵션)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️ 모드 변경";
}

// 앱 초기 진입점 실행 (Bootstrap App)
updateDashboardMetrics();
renderGlossaryCards();