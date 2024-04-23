const mathLibrary = require('./Lib/math');
const quotesLibrary = require('./Lib/Quotes');

const app = {};


app.config = {
    time_between_quotes: 1000, // Time in milliseconds between quotes.    
};

app.print_all_quotes = () => {
    const all_quote = quotesLibrary.all_quotes();

    const number_of_quotes = all_quote.length;
    const ramdom_number = mathLibrary.get_random_number(1, number_of_quotes);
    const selected_quotes = all_quote[ramdom_number - 1];
    console.log(`${selected_quotes}`);
}

app.indefinite_loop = () => setInterval(app.print_all_quotes, app.config.time_between_quotes);

app.indefinite_loop()
