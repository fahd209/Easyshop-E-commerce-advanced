FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY target/easyshop-capstone-starter-0.0.1-SNAPSHOT.jar /app/my-springboot-app.jar
COPY src/main/resources/application.properties /app/application.properties

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/my-springboot-app.jar"]