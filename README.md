# xld-microservice-boilerplate
XLD Microservice boilerplate.

## Setup

1. Install packages
        
        npm run install

        yarn install

2. Setup git submodule

        git submodule update --init --recursive

3. Setup .env and config files.

4. Setup database
        
        yarn typeorm:show
        
        yarn typeorm:run

5. Setup husky
        
        yarn prepare

## Local Development

1. Start dev
        
        yarn start:dev

## Production Setup

1. Build
        
        yarn build

2. Start

        yarn start


## Docker

1. Setup .env or config database host
        
-  for mac

        DB_HOST = docker.for.mac.host.internal

1. Build Image

        docker build . -t xld-microservice-boilerplate

2. Run Image

        docker run -p 8000:8000 xld-microservice-boilerplate
