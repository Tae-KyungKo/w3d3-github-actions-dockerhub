# ktCloud-native
KT Cloud native 3rd - for lecture



| 확인 항목 | 값 |
| :--- | :--- |
| os | mac OS |
| repository URL | https://github.com/Tae-KyungKo/w3d3-github-actions-dockerhub.git |
| git action build 실패 확인 | github action 상에서 빌드가 안됨 |
| 찾은 원인 | 스크립트 파일에 실행 권한이 없음 |
| 문제 파일 경로 | week3/day3/labs/quality-gates|
| 문제 파일 개수 | 3개 |
| 문제 파일 | dast-health-check.sh, run-all-local.sh, sast-scan.sh, unit-test.sh| 
| 실행한 명령어 | git update-index --chmod=+x week3/day3/labs/quality-gates/*.sh |
| 실행 결과 | Git Action 빌드 성공 |

스프링부트 웹 서버를 docker로 띄울 땐 꼭 빌드와 실행환경 이미지를 신경쓰자