package docker.practice.demo.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloDockerController {

    @CrossOrigin(origins = "*")
    @GetMapping("/api/hello")
    public Map<String, Object> getBackendData() {
        Map<String, Object> responseData = new HashMap<>();

        // 프론트엔드 웹 화면으로 전달할 실제 비즈니스 데이터 가공
        responseData.clear();
        responseData.put("status", "success");
        responseData.put("message", "Hello, 3-Tier Docker Compose World!");
        responseData.put("architecture", "Web(Nginx) - WAS(Spring Boot) - DB(PostgreSQL)");
        responseData.put("serverTime", System.currentTimeMillis());

        return responseData; // 스프링 부트가 내장된 Jackson 라이브러리를 통해 이 Map을 JSON 문자열로 자동 변환하여 쏴줍니다.
    }
}
