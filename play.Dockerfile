FROM hseeberger/scala-sbt:11.0.12_1.5.5_2.13.6

RUN apt-get update && \
    apt-get install -y --no-install-recommends openjfx


WORKDIR /backend
ADD . /backend
EXPOSE 9000

CMD sbt run
