const fortunes = [
 "Conquer your fears or they will conquer you.",
 "Rivers need springs.",
 "Do not fear what you don't know.",
 "You will have a pleasant surprise.",
 "Whenever possible, keep it simple.",
];
exports.getFortune = () => {
    const fortune = fortunes[Math.floor(Math.random * fortunes.length)];
    return fortune;
}
/**
 *  If you want something to be visible outside of the
 *  module, you have to add it to exports
 */