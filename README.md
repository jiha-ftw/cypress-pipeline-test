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

## Run tests in container
This will run [docker-compose.yml](docker-compose.yml)
```
docker compose up --abort-on-container-exit
```
API container will exit when cypress container exits.

## Run tests in Azure pipeline
[pipeline.yml](pipeline.yml)

## Run tests in Github Actions
[run-tests.yml](.github/workflows/run-tests.yml)
