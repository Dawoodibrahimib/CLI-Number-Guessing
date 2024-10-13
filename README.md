
# Number Guessing Game

This is a simple CLI-based Number Guessing Game implemented using Node.js and Chalk for colored outputs. 
The game gives you multiple difficulty levels to choose from and provides a hint system to help you guess the number.

## Features

- Choose from three difficulty levels:
    - **Easy** (10 guesses)
    - **Medium** (5 guesses)
    - **Hard** (3 guesses)
- Random number generation between 1 and 100.
- Provides hints whether your guess is higher or lower than the actual number.
- Restarts the game if invalid input is entered.
- Colored console output for a more engaging experience.
  
## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd number-guessing-game
```

2. Install the required dependencies:

```bash
npm install
```

## How to Play

1. Start the game:

```bash
node index.js
```

2. Select a difficulty level (1 for Easy, 2 for Medium, 3 for Hard).
3. Guess the number. If your guess is wrong, you'll receive a hint whether the number is higher or lower.
4. The game continues until you guess the correct number or run out of guesses based on your selected difficulty.

## Roadmap

This project is inspired by the [Number Guessing Game Roadmap](https://roadmap.sh/projects/number-guessing-game). 

Feel free to contribute or suggest any improvements!

## License

This project is open-source and available under the [MIT License](LICENSE).
