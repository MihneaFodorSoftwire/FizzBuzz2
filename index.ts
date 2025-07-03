function fizzbuzz(): void {
    for (let i = 1; i <= 100; i++) {
        let segments: string[] = [];
        let isWord: boolean = false;
        if (i % 3 == 0) {
            isWord = true;
            segments.push("Fizz");
        }
        if (i % 5 == 0) {
            isWord = true;
            segments.push("Buzz");
        }
        if (isWord) {
            console.log(segments.join(""));
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();
