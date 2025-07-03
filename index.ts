function popall(segments: string[]): void {
    const length: number = segments.length;
    for (let j = 0; j < length; j++) {
        segments.pop();
    }
}

function fizzbuzz(): void {
    for (let i = 1; i <= 300; i++) {
        const segments: string[] = [];
        let isWord: boolean = false;
        let isFezz: boolean = false;
        if (i % 3 == 0) {
            isWord = true;
            segments.push("Fizz");
        }
        if (i % 13 == 0) {
            isWord = true;
            isFezz = true;
            segments.push("Fezz");
        }
        if (i % 5 == 0) {
            isWord = true;
            segments.push("Buzz");
        }
        if (i % 7 == 0) {
            isWord = true;
            segments.push("Bang");
        }
        if (i % 11 == 0) {
            isWord = true;
            popall(segments);
            if (isFezz) {
                segments.push("Fezz");
            }
            segments.push("Bong");
        }
        if (i % 17 == 0) {
            segments.reverse();
        }
        if (isWord) {
            console.log(segments.join(""));
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();
