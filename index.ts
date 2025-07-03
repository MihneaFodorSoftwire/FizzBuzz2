import * as readline from 'readline';

function popall(segments: string[]): void {
    const length: number = segments.length;
    for (let j = 0; j < length; j++) {
        segments.pop();
    }
}

export function fizzbuzz(maxNumber: number = 100, numberList: number[] = [3, 5, 7, 11, 13, 17]): string {
    const mySet: Set<number> = new Set<number>();
    let last: string = null;
    for (let j = 0; j < numberList.length; j++) {
        mySet.add(numberList[j]);
    }
    for (let i = 1; i <= maxNumber; i++) {
        const segments: string[] = [];
        let isFezz: boolean = false;
        if (mySet.has(3) && i % 3 == 0) {
            segments.push("Fizz");
        }
        if (mySet.has(13) && i % 13 == 0) {
            isFezz = true;
            segments.push("Fezz");
        }
        if (mySet.has(5) && i % 5 == 0) {
            segments.push("Buzz");
        }
        if (mySet.has(7) && i % 7 == 0) {
            segments.push("Bang");
        }
        if (mySet.has(11) && i % 11 == 0) {
            popall(segments);
            if (isFezz) {
                segments.push("Fezz");
            }
            segments.push("Bong");
        }
        if (mySet.has(17) && i % 17 == 0) {
            segments.reverse();
        }
        if (segments.length > 0) {
            console.log(segments.join(""));
        } else {
            console.log(i);
        }
        if (i == maxNumber) {
            last = segments.join("");
        }
    }
    return last;
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
            } else {
                const numberList: number[] = rules.split(" ").filter(Boolean).map(part => parseInt(part, 10));
                fizzbuzz(maxNumber, numberList);
            }
            rl.close();
            });
    } else {
        console.log("Number must be greater than 0.");
        rl.close();
    }
})
