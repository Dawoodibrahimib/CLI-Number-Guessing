import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const askGuess = (randomNumber, attemptsLeft) => {
    rl.question(chalk.cyan("\nGuess the number: "), (guess) => {
        const userGuess = parseInt(guess);

        if (isNaN(userGuess)) {
            console.log(chalk.red("Please enter a valid number."));
            return askGuess(randomNumber, attemptsLeft); // Restart for invalid input
        }

        if (userGuess === randomNumber) {
            console.log(chalk.green("\nCongratulations! You guessed the number correctly!\n"));
            rl.close();
        } else {
            attemptsLeft--;
            if (attemptsLeft === 0) {
                console.log(chalk.red(`\nSorry, you're out of attempts. The number was ${randomNumber}.\n`));
                rl.close();
            } else {
                // Provide hints
                if (userGuess < randomNumber) {
                    console.log(chalk.yellow("Too low! Try a higher number."));
                } else {
                    console.log(chalk.yellow("Too high! Try a lower number."));
                }

                // Extra hint: Check if the guess is within 5 of the number
                if (Math.abs(userGuess - randomNumber) <= 5) {
                    console.log(chalk.blue("You're very close!"));
                }

                console.log(chalk.magenta(`Attempts left: ${attemptsLeft}\n`));
                askGuess(randomNumber, attemptsLeft); // Ask for another guess
            }
        }
    });
};

const startGame = () => {
    console.clear(); // Clears the console for a cleaner restart
    console.log(chalk.blue("\nWelcome to the Number Guessing Game!\n\nI'm thinking of a number between 1 and 100.\n"));

    const randomNumber = getRandomNumber(1, 100);

    console.log(chalk.magenta.bold("\nPlease Select the Difficulty Level\n"));
    console.log(chalk.yellow.bold("1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)"));

    rl.question("\nEnter your choice (1/2/3): ", (choice) => {
        const selectedChoice = parseInt(choice);

        // Validate the user's input
        if (selectedChoice < 1 || selectedChoice > 3 || isNaN(selectedChoice)) {
            console.log(chalk.red("\nInvalid choice. Please enter a valid option (1/2/3)."));
            return startGame(); // Restart the game
        }

        // Set number of attempts based on difficulty
        let attempts;
        if (selectedChoice === 1) {
            attempts = 10;
        } else if (selectedChoice === 2) {
            attempts = 5;
        } else if (selectedChoice === 3) {
            attempts = 3;
        }
        

        console.log(chalk.green(`\nYou have ${attempts} attempts. Good luck!\n`));
        askGuess(randomNumber, attempts);
    });
};

// Start the game for the first time
startGame();
