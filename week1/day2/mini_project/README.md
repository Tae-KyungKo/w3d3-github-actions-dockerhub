# DevOps 용어 카드 소개 사이트 (DevOps Glossary Cards)

토스(Toss) 스타일의 미니멀하고 모던한 디자인 시스템을 적용하여, 복잡한 DevOps 인프라 및 아키텍처 핵심 용어를 직관적인 비유와 실무 명령어를 통해 학습할 수 있도록 설계된 1페이지 정적 웹사이트입니다.

---

## 1. 프로젝트 아키텍처 개요

프로젝트의 투명성과 제약 사항, 구현 스펙을 한눈에 파악할 수 있는 아키텍처 요약 표입니다.

| 항목 | 상세 내용 | 비고 |
| :--- | :--- | :--- |
| **사이트 목적** | DevOps 핵심 용어(Docker, Kubernetes, IaC 등)에 대한 비유적 설명, 실무 예시 명령어, 공식 문서 링크를 직관적인 카드 인터랙션으로 제공하여 학습 효율성 증대 | 1페이지 대시보드 형태 |
| **파일 개수** | **총 3개** (`index.html`, `style.css`, `app.js`) | 외부 종속성 없는 단일 컴포넌트 구조 |
| **외부 API / CDN 사용 여부** | **사용 안 함 (No External Dependency)** | UI 프레임워크(Tailwind, Bootstrap) 및 폰트/아이콘 CDN을 배제한 순수 웹 표준 기술 빌드 |
| **보안 요구 사항 (Secret / Token)**| **요구하지 않음 (No Token Required)** | 완전한 클라이언트 사이드 정적 웹 사이트로, 민감한 API Key나 인증 토큰 노출 위험 없음 |
| **서버 환경** | **Python 3 내장 HTTP 서버** (`http.server`) | 추가 라이브러리(Flask, Django 등) 설치 불필요 |

---

## 2. 로컬 실행 방법 (Execution Guide)

본 프로젝트는 파이썬 3 표준 라이브러리의 내장 웹 서버를 활용하여 네트워크 단절 환경(Offline)이나 별도의 의존성 빌드가 없는 상태에서도 즉시 구동 가능합니다.

** 실행 명령어 ** : mini_project 디렉토리로 이동 -> 터미널에서 `ython3 -m http.server 8000` 실행

** 검증 명령어 ** : `curl -I http://localhost:8000`
** 브라우저 검증 ** : 브라우저에서 http://localhost:8000으로 접속