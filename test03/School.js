const Event = require('events');

const output = data => console.log(data);

class School extends Event{
    startPeriod(){
        output('class started!');
        setTimeout(() => {
            this.emit('start', {period:'1st', time: '08:30AM.', message: "period ended"});
        },1000)
}
}

module.exports = { School, output };