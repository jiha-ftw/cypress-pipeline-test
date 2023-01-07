# .NET/Cypress containerized tests

## Run tests on local

### Run Api
```
cd CoreApi
dotnet run
```

### Run cypress tests
```
cd cypress.io
npm install
npx cypress run --config baseUrl=http://localhost:5170
```

(Alter base URL/port if needed.)

## Run tests in container on local
This will run [docker-compose.yml](docker-compose.yml) which has references to the [Api Docker file](CoreApi/Dockerfile) and the [Cypress Docker file](cypress.io/Dockerfile).
Ofc, [Docker](https://docs.docker.com/get-docker/) is needed for this to work.

Apparently, `compose up` does not accept the `--build-arg`, so passing an argument needs to happen like this (or use environment variables).
`CYPRESS_KEY` is passed as value for `--key` on `cypress run`, needed for publishing test runs to a Cypress project.
```
docker-compose build --build-arg CYPRESS_KEY=""
docker-compose up --abort-on-container-exit
```
API container will exit when cypress container exits.

## Run tests in Azure pipeline
[pipeline.yml](pipeline.yml)

## Run tests in Github Actions
[run-tests.yml](.github/workflows/run-tests.yml)
