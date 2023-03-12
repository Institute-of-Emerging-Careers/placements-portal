# IEC Placements Portal
This is a Placements portal for the Institute of Emerging Careers
###### Author: Rohan Hussain

## Package Versions
Most are mentioned in package json.
Package | Version
--- | ---
NodeJS | `v18`
MariaDB | `v10.11.2`

## How to set up for development
### Step 1: Install Docker Desktop
It is available for Linux, Mac, and Windows [here](https://docs.docker.com/engine/install/).
### Step 2: Clone git repository
`git clone https://github.com/Institute-of-Emerging-Careers/placements-portal.git`
### Step 3: Frontend `webapp`
The webapp is the frontend of the application writiten in NextJS-Typescript. Simply run the `dockerDevStart.sh` script **from inside the webapp directory**:
```
cd webapp
./dockerDevStart.sh
```
The first run may be slow because an image will be built from the ground up, so be patient; subsequent runs will be very fast due to docker's layering.
The frontend server will run on port `3010`. 
#### Why use docker in development?
This way all developers, those working on Mac as well as those working on Windows/Linux, will all be running their code in the same OS environment (Linux Alpine) even in development.

### Step 4: Backend
Enter to the `backend` directory.
```
cd backend
```
Create a file named `.env` containing the following values:
```
MYSQL_ROOT_PASSWORD: "password123"
MYSQL_DATABASE: "placements_database"
MYSQL_USERNAME: "root"
MYSQL_HOST: "mariadb"
```
Then, while inside the `backend` directory, run the `./dockerDevStart.sh` script. The first run will take time as the docker image of mariadb will also be fetched. Subsequent runs will be faster due to layering.

You should see the following text in the console in the end. You may have to re-run the script once again to see it:
```
Connection has been established successfully.

Listening on port 3020
```
Visit ```localhost:3020```. You should see `Hello World`. `nodemon` is running, so if you go to `backend/src/server.js` and change the response from `Hello World` to something else, you will see the change without restarting the server manually.

#### How to access mariadb cli
Mariadb is running inside its own docker container. You need to launch a shell inside the container to access the mariadb cli. Launch docker desktop to see a list of running containers:
![image](https://user-images.githubusercontent.com/34311857/224539640-27f1feda-0a6d-419e-8173-c17c07462288.png)
`Backend` contains two containers currently, one running mariadb and the other running our code. We need to launch a shell inside the mariadb container. CLick on the `mariadb-1` container (it may be named differently on your system). You can see the logs of this container here. This is another advantage of using docker containers. The logs of mariadb and our app will not get mixed.
![image](https://user-images.githubusercontent.com/34311857/224540018-9e64cf68-37c9-4c8e-ba7a-1e6c8ca56a99.png)

Go to the terminal tab and here you can run
```
mariadb -u root -p
```
to log in using the CLI. 

Confirm that the database whose name you mentioned in the `.env` file exists by running:
```
SHOW DATABASES;
```
If it does not exist, create it now. 

##### Important
- Once the database is created, also create a table inside the database. 
- Now close the backend container group using Docker Desktop or by pressing `Ctrl+C` in the terminal where the shell script was running
- Now start it again by running the `./dockerDevStart.sh` script. 
- Now once again log into the mariadb cli and confirm that restarting the container did not wipe the database and table.
