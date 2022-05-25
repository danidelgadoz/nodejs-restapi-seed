FROM postgres:11.5-alpine

ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_DB=blogdb
ENV POSTGRES_USER=postgres

EXPOSE 5432

# docker build -f ./.docker/postgres.dockerfile -t postgres-db .
# docker run -p 5432:5432 --name my-postgres-db postgres-db