const quotes = {
    _life: ['We cannot become what we want by remaining what we are', 'You will never be ready, just start', 'Wherever life plants you, bloom with grace'],
    _love: ['The best thing to hold onto in life is each other', 'You are all the thoughts in my head and all the love in my heart', 'You are my sun, my moon and all of my stars'],
    _friendship: ['Stay close to people who feel like sunlight', 'Anything is possible when you have the right people there to support you', 'One best friend changes a million things'],

    get life(){
        return this._life;
    },

    set life(newQuote){
        this._life.push(newQuote);
    },

    get love(){
        return this._love;
    },

    set love(newQuote){
        this._love.push(newQuote);
    },

    get friendship(){
        return this._friendship;
    },

    set friendship(newQuote){
        this._friendship.push(newQuote);
    },

    randomQuote(){
        let quoteArr = []
        const ranNum = Math.floor(Math.random() * 3);
        if (ranNum === 0){
            quoteArr = this.life;
            console.log("We have selected life and the message is...");
        } else if (ranNum === 1){
            quoteArr = this.love;
            console.log("We have selected love and the message is...");
        } else {
            quoteArr = this.friendship;
            console.log("We have selected friendship and the message is...");
        }
        //console.log(quoteArr);
        return (quoteArr[Math.floor(Math.random() * quoteArr.length)]);
    }
};

console.log("Welcome to Kiki's Message Generation Program!\n");

/* If you want to add a quote to either life, love or friendship,
uncomment the following two lines and replace quotes.life with the 
desired topic (quotes.life , quotes.love , quotes.friendship) and 
the quote within the quotation marks. 

quotes.life = 'This is a quote i am adding to life';
*/

console.log('"'+quotes.randomQuote()+'"');
