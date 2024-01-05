# Food Truck
Assignment

## Requirements:

You can write a web API that returns a set of food trucks. 
You can write a web frontend that visualizes the nearby food trucks for a given place. 
You can create a CLI that lets us get the names of all the taco trucks in the city. 
You can create system that spits out a container with a placeholder webpage featuring the name of each food truck to help their marketing efforts. 
You're not limited by these ideas at all, but hopefully those are enough help spark your own creativity. San Francisco's food truck open dataset is located here and there is an endpoint with a CSV dump of the latest data here. We've also included a copy of the data in this repo as well.

## Project Structure

### Mysql Database script

./db-script/init.sql

This directory is for the database initialization. Just run the sql script with any mysql client tool.

### Python script for data initialize

./python-script

This dirctory is for sync data from csv file to mysql by using Python script.


### Frontend Code

./html-frontend

This diretory is a standard react js project. See package.json for dependency.

```
yarn install // install dependency

yarn start // run dev

```

Open http://localhost:3000/facility in browser to check the page.


### Backend Code

./app-backend

This diretory is a standard spring boot project. See Readme.md inside the project.

Using Maven to run the code.


Get the names of all the taco truck

curl http://127.0.0.1:8080/app-backend/trucks

