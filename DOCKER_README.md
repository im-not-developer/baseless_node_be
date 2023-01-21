- image_dir=docker-compose_setting_doc
- 아주 간단한 문서(공유를 목적으로 만들었으며, 추후 완성도를 높힐 예정👍)
  `docker-compose`를 이용한 `postgreSQL`과 `pgAdmin`를 세팅을 하기 위한 문서

## 환경 구성

#### docker-compose.yml`파일 생성

`docker-compose.yml`파일을 생성하는데, `POSTGRES_PASSWORD`,`POSTGRES_USER`는 환경변수(.env)에 넣고 `${POSTGRES_USER}` 형태로 사용해도 된다.

```
version: "3"

services:
  postgres-db:
    image: postgres:alpine
    restart: always
    container_name: baseless-postgresql
    env_file: .env
    environment:
      - POSTGRES_USER=custom_psql
      - POSTGRES_PASSWORD=custom_psql
      - POSTGRES_INITDB_ARGS="--encoding=UTF-8"
      - POSTGRES_DB=baseless_database
    volumes:
      - ./docker-volumes/postgres:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - postgres

  pgadmin:
    container_name: baseless-pgadmin
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL:-pgadmin4@pgadmin.org}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD:-custompassword}
      PGADMIN_CONFIG_SERVER_MODE: "False"
    volumes:
      - ./docker-volumes/pgadmin:/var/lib/pgadmin

    ports:
      - "${PGADMIN_PORT:-5050}:80"
    networks:
      - postgres
    restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
  postgres:
  pgadmin:

```

#### volumes 저장할 폴더 생성

현재 위치에 `docker-volumes` 디렉토리를 생성한다.

## 실행 및 접속 확인

##### 실행 명령어

`$ docker-compose up -d`

##### 컨테이너 확인

`$ docker ps -a`

##### postgreSQL container 접속

`$ docker exec -it baseless-postgresql bash`

해당 컨테니어 내에서 `postgreSQL`로 접속을 하기 위해서 아래의 명령어를 사용
`$ psql -U custom_psql -d baseless_database`

여기서 접속이 안된다면, 정상적으로 계정이 생성이 안됬을 수 있음.
정상적으로 생성이 되었다면 데이터베이스에 접속이 되었을 텐데 `\du` 명령어를 이용해서 계정정보를 확인 할 수 있다.

#### pgAdmin

브라우저에서 `http://127.0.0.1:5050`에 접속하여, 왼쪽 서버목록에서 `Severs`를 우클릭하여 `Register / Server` 선택

`Name`은 개인이 확인 할 수 있도록 정하고 `Connection`에서 아래와 같이 입력한다.

```
Host name / address : host.docker.internal
Port : 5432
Maintenance database : baseless_database
Username : custom_psql
Password : custom_psql
```

`Save` 버튼을 클릭하면 정상적으로 로그인이 가능

각 컨테이너들을 사용하지 않을 경우에는 `$ docker-compose down` 명령어로 종료하면 된다.
