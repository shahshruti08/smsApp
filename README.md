# SMSAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# Detail
Ag-grid is used to show the grid structure of the data.
For Edit:
Its a inline edit that i use. You click on any cell it will gets edited and then click on outside of that row it will get saved.

For Delete;
There is button for delete theperticular row from database.

For Filter:
There are two input box . You can put the date using datepicker and then click on filter it will filter the rows.


Used angular v9 javascript framwork for front End development.
Used node js for server side development i.e API
Used mongo db for database
# frontEnd Setup

run npm install inside project location
eg: my project location is C:\Users\smamidip\Desktop\sms

C:\Users\smamidip\Desktop\sms>npm install
This will create node_modules inside prokect folder sms

# DbSetup
data folder in the project is mongodump.  Please get the path to data/db

install mongodb at C:\Program Files\MongoDB
go to C:\Program Files\MongoDB\Server\4.2\bin

now please run the below command
mongorestore %path to data/db%

eg: my path for data folder is C:\Users\smamidip\Desktop\sms\data

so command run is: 
mongorestore C:\Users\smamidip\Desktop\sms\data

Now run start.bat  

# Prerequisite
nodejs
npm
mondodb in local
Angular CLI

# Steps to Run
Run start.bat // This will start Mongo db , node server , angular app

Run `http://localhost:4200/` in google chrome

# Note
Scrrenshot is attached for App , Angular Server start and Mongo Start
