# 방법A) Gradle을 이용해 소스 코드를 컴파일하고 Jar를 만들기
FROM gradle:8.14-jdk21 AS builder
WORKDIR /build

COPY . .
RUN ./gradlew bootJar --no-daemon

# 실행 환경 주입
FROM eclipse-temurin:21-jre
WORKDIR /app

# 빌드 결과물(Jar)만 복사
COPY  --from=builder /build/build/libs/*.jar app.jar

# 스프링 부트 내장 톰캣 포트 기본값으로 설정했음
EXPOSE 8080

CMD ["java", "-jar", "app.jar"]