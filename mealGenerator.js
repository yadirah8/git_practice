const pronouns = ["You", "She", "He", "They"];
const verbs = [ "should try", "must have", "can't have"];
const foods = ["rice","beans","plantain","pasta"];
const days = ["today", "tomorrow", "next week", "next weekend"]
const generator = () => {
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const verb = verbs[Math.floor(Math.random() * pronouns.length)];
    const food = foods[Math.floor(Math.random() * pronouns.length)];
    const day = days[Math.floor(Math.random() * pronouns.length)];
    let message = `${pronoun} ${verb} ${food} ${day}`
    console.log(message);
};

generator();
