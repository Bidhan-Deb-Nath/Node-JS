const file_system = require('fs');
const quotes = {};
quotes.all_quotes = () => {
    const file_content = file_system.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
    const array_of_quotes = file_content.split(/\r?\n/);
    return array_of_quotes;
}
module.exports = quotes;