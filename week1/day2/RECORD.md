
| 확인 항목 | 값 |
| :--- | :--- |
| command | python3 -m http.server 8000 |
| 경로 | ktCloud-native/week1/day2|
| 포트 | 8000 |
| HTTP 상태 코드 | `curl -I http://localhost:8000``curl http://localhost:8000` |
| server log excerpt | `Serving HTTP on :: port 8000 (http://[::]:8000/) ...::1 - ` `- [12/Jun/2026 09:31:57] "GET / HTTP/1.1" 200 -::1 - `|
