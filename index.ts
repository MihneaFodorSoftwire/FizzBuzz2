import * as readline from 'readline';

function popall(segments: string[]): void {
    const length: number = segments.length;
    for (let j = 0; j < length; j++) {
        segments.pop();
    }
}

function fizzbuzz(maxNumber: number = 100, numberList: number[] = [3, 5, 7, 11, 13, 17]): void {
    const myMap: Map<number, number> = new Map();
    for (let j = 0; j < numberList.length; j++) {
        myMap.set(numberList[j], 1);
    }
    for (let i = 1; i <= maxNumber; i++) {
        const segments: string[] = [];
        let isWord: boolean = false;
        let isFezz: boolean = false;
        if (myMap.has(3) && i % 3 == 0) {
            isWord = true;
            segments.push("Fizz");
        }
        if (myMap.has(13) && i % 13 == 0) {
            isWord = true;
            isFezz = true;
            segments.push("Fezz");
        }
        if (myMap.has(5) && i % 5 == 0) {
            isWord = true;
            segments.push("Buzz");
        }
        if (myMap.has(7) && i % 7 == 0) {
            isWord = true;
            segments.push("Bang");
        }
        if (myMap.has(11) && i % 11 == 0) {
            isWord = true;
            popall(segments);
            if (isFezz) {
                segments.push("Fezz");
            }
            segments.push("Bong");
        }
        if (myMap.has(17) && i % 17 == 0) {
            segments.reverse();
        }
        if (isWord) {
            console.log(segments.join(""));
        } else {
            console.log(i);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("MaxNumber:", (limit: string) => {
    const maxNumber = parseInt(limit, 10);
    if (maxNumber > 0) {
        rl.question("List of rules (3 5 7 11 13 17) (ex: 3 5 will give the classic fizz buzz rules):",
            (rules: string) => {
            if (rules.length == 0) {
                console.log("No rules found, applying all rules.");
                fizzbuzz(maxNumber);
                rl.close();
            }
            const parts: string[] = rules.split(" ");
            const numberList: number[] = [];
            for (let i = 0; i < parts.length; i++) {
                numberList[i] = parseInt(parts[i], 10);
            }
            fizzbuzz(maxNumber, numberList);
            rl.close();
            });
    } else {
        console.log("Number must be greater than 0.");
        rl.close();
    }
})
