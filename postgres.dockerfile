FROM postgres:15.1-alpine

LABEL author="junior"
LABEL description="Postgres Image"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/