FROM cypress/included:3.4.1

ARG CYPRESS_KEY

#ARG Cannot be passed into entrypoint. So anv ENV variables needs to be set:
ENV CYPRESS_KEY=${CYPRESS_KEY}

WORKDIR /App
COPY ./ ./

RUN npm install
ENTRYPOINT sleep 10; $(npm bin)/cypress run --config baseUrl=http://api:80,video=false --record --key "${CYPRESS_KEY}"