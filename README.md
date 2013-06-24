This is an assignment for node.js.

@author Nikhil Ranjan (niklabh811@gmail.com)

Project is generated using exbress binary.

Installation:

git clone https://github.com/niklabh/nodejsassignment.git
cd ./nodejsassignment && npm install

Run:

node app.js

Custom logging(XYZ DATE URL SERVED):
file: app.js line: 18,51

Any request will produce log on console.
e.g. http://localhost:3000

Custom Error Handler:
file app.js line: 12,56
file routes/index.js line: 11
file routes/middleware.js

to use error handler issue following request:  http://localhost/error

Diffrent Node Environment(NODE_ENV):
file app.js line: 27,35
to use run app with: >NODE_ENV=production nodepp.js