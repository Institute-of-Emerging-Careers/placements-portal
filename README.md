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
