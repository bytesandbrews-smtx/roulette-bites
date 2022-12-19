# Overview

Roulette-Bites is a restaurant randomization tool to reduce analysis paralysis for hungry people around San Marcos.

# Features

- Lightweight, server-side processing
- Fast, accurate restaurant options

# Diagrams

## Data Flow Diagram

![Data Flow Diagram](/img/data-flow-diagram.png)

# Testing (local)

1. Clone Repository and change into directory
2. Run `npm install`
3. Run `npm start`
4. Visit [http://localhost:3000](http://localhost:3000)
5. Issue `CTRL+C` in your terminal to terminate npm

# Deployment (AWS cloud)

1. Clone Repository and change into directory
2. Run `npm install`
3. Set AWS environment variables
    1. AWS_ACCESS_KEY_ID
    2. AWS_SECRET_ACCESS_KEY
4. Run `npx sls deploy`
5. Visit the URL endpoint output in your terminal
5. Run `npx sls remove` to clean up all deployed AWS resources