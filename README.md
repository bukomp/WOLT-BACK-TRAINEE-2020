# WOLT-BACK-TRAINEE-2020
Simple server project created specially for job application. 

**Task:**
 
Create a REST API endpoint that allows searching restaurants. 
API needs to accept three parameters:
    
    q: query string. Full or partial match for the string is searched from name, 
    description and tags fields. A minimum length for the query string is one character.
    
    lat: latitude coordinate (customer's location)
    
    lon : longitude coordinate (customer's location)
    
API should return restaurant (objects) which match 
the given query string and are closer than 3 kilometers from coordinates.

## Installation

1. Get and deploy files
2. In deployment folder run `npm i` command
3. Check (and modify if needed) config file (config.js)
4. In deployment folder run one of 3 commands
    * To launch server run `npm start`
    * To launch server with automatic restarting after every change run `npm run watch`
    * To execute all tests run `npm run test`