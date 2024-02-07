const { markov, MarkovMachine } = require("./markov");

test("Test Input", function () {
    let testInput = new MarkovMachine("the cat in the hat");
    expect(testInput.words).toContain("cat");
});

test("Test Map Keys", function () {
    let mm = new MarkovMachine("the cat in the hat");
    const mmKeysArray = Array.from(mm.chains.keys());
    expect(mmKeysArray).toContain("hat");
});
