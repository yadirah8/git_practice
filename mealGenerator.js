const messages = ["You are having rice today", "You are eating beans", "You should try pasta tonight"];

const generator = () => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

generator();
