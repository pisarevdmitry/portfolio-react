# PortfolioApp.


### for dev. 
1. install dependensies
2. in file  server/config/config.json add yours MongoDB database and smtp credentials;
3. run command "make:admin" (creates a user record (login:admin, password: 123 ));
4. run command "npm run start:dev"

### for prod. 
1. install dependensies
2. in file  server/config/config.json add yours MongoDB database and smtp credentials;
3. run command "npm run build:prod"
4. place yours build files inside server/public
5. run command "npm run start"