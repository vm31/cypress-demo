# cypress-demo
npm init
npm install cypress --save-dev
npx cypress open
create e2e test cases as spec files 
create commands.ts file that will have common methods , that can be called as "cy."
fixtures folder --> test data
support folder ---> 
Commands.ts cypress cutom commonly commands that can be called "cy."
utils.ts commonly used methods that has selectors and test data as method parameters 
e2e.ts need this for mochawesome reporter integration
index.ts file serves as the entry point for your support files, global event handler or test related initialization logic
mochawesome reporter is configured such that it generates reports as html file after run
npm i --save-dev @types/js-yaml
npm i --save-dev @types
----------------
sping http-server as below:
npm intall -g http-server
npx http-server
----------------




