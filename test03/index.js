const data = require('./School');

let School = data.School;
let output = data.output;

const school = new School();

school.on('start', ({ period,message,  time }) => output(`we need to run becouse ${period} is ${message} at ${time}`));

school.startPeriod();