FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root

EXPOSE 3306

COPY ./create_database.sql /docker-entrypoint-initdb.d/
