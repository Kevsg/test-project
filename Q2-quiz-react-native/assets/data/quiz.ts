export type QuestionType = {
    question: string;
    choices: string[];
    correctAnswer: number;
};

const questions: QuestionType[] = [
    {
        "question": "What is the capital of Japan?",
        "choices": ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        "correctAnswer": 1
    },
    {
        "question": "Who wrote '1984'?",
        "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
        "correctAnswer": 0
    },
    {
        "question": "Which planet is closest to the sun?",
        "choices": ["Venus", "Earth", "Mercury", "Mars"],
        "correctAnswer": 2
    },
    {
        "question": "What is the largest mammal in the world?",
        "choices": ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        "correctAnswer": 2
    },
    {
        "question": "Who painted the Sistine Chapel ceiling?",
        "choices": ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        "correctAnswer": 2
    },
    {
        "question": "In which year did World War I begin?",
        "choices": ["1912", "1914", "1916", "1918"],
        "correctAnswer": 1
    },
    {
        "question": "What is the chemical symbol for hydrogen?",
        "choices": ["H", "He", "O", "C"],
        "correctAnswer": 0
    },
    {
        "question": "Which country is the largest by area?",
        "choices": ["Canada", "China", "USA", "Russia"],
        "correctAnswer": 3
    },
    {
        "question": "Who is the author of 'Harry Potter'?",
        "choices": ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Suzanne Collins"],
        "correctAnswer": 0
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "choices": ["Gold", "Iron", "Diamond", "Quartz"],
        "correctAnswer": 2
    },
    {
        "question": "What is the square root of 64?",
        "choices": ["6", "7", "8", "9"],
        "correctAnswer": 2
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "choices": ["Earth", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": 1
    },
    {
        "question": "What does CPU stand for?",
        "choices": ["Central Processing Unit", "Computer Personal Unit", "Central Programming Unit", "Computer Processing Unit"],
        "correctAnswer": 0
    },
    {
        "question": "Who discovered penicillin?",
        "choices": ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"],
        "correctAnswer": 2
    },
    {
        "question": "What is the capital of Canada?",
        "choices": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        "correctAnswer": 3
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "choices": ["Gold", "Oxygen", "Silver", "Iron"],
        "correctAnswer": 1
    },
    {
        "question": "What is the largest ocean on Earth?",
        "choices": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "correctAnswer": 3
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "choices": ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        "correctAnswer": 0
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "choices": ["Tomato", "Onion", "Avocado", "Pepper"],
        "correctAnswer": 2
    },
    {
        "question": "What year did the Titanic sink?",
        "choices": ["1905", "1912", "1918", "1923"],
        "correctAnswer": 1
    },
    {
        "question": "What is the smallest planet in our solar system?",
        "choices": ["Venus", "Mars", "Mercury", "Pluto"],
        "correctAnswer": 2
    },
    {
        "question": "What is the currency of Japan?",
        "choices": ["Yuan", "Won", "Dollar", "Yen"],
        "correctAnswer": 3
    },
    {
        "question": "Who invented the telephone?",
        "choices": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        "correctAnswer": 0
    },
    {
        "question": "What does DNA stand for?",
        "choices": ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Deoxyribonuclein Acid", "Deoxyribonucleus Acid"],
        "correctAnswer": 0
    },
    {
        "question": "What is the most spoken language in the world?",
        "choices": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        "correctAnswer": 2
    },
    {
        "question": "Who painted the Mona Lisa?",
        "choices": ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
        "correctAnswer": 2
    },
    {
        "question": "What is the capital of Italy?",
        "choices": ["Rome", "Florence", "Venice", "Milan"],
        "correctAnswer": 0
    },
    {
        "question": "Who is known as the father of the computer?",
        "choices": ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        "correctAnswer": 1
    },
    {
        "question": "What does HTTP stand for?",
        "choices": ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Path", "HyperText Transmission Path"],
        "correctAnswer": 0
    },
    {
        "question": "Which company developed the Java programming language?",
        "choices": ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of a GPU in a computer?",
        "choices": ["Central processing", "Graphics processing", "Data storage", "Network communication"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a popular cloud storage service?",
        "choices": ["Dropbox", "Excel", "Photoshop", "Outlook"],
        "correctAnswer": 0
    },
    {
        "question": "What does AI stand for?",
        "choices": ["Artificial Insight", "Automatic Intelligence", "Artificial Intelligence", "Automated Insight"],
        "correctAnswer": 2
    },
    {
        "question": "Which company created the iPhone?",
        "choices": ["Google", "Microsoft", "Samsung", "Apple"],
        "correctAnswer": 3
    },
    {
        "question": "What year was the World Wide Web invented?",
        "choices": ["1985", "1989", "1991", "1995"],
        "correctAnswer": 1
    },
    {
        "question": "What does USB stand for?",
        "choices": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "Universal Serial Byte"],
        "correctAnswer": 0
    },
    {
        "question": "What is the name of the first electronic general-purpose computer?",
        "choices": ["ENIAC", "UNIVAC", "IBM 701", "Z3"],
        "correctAnswer": 0
    },
    {
        "question": "Who was the first person to walk on the moon?",
        "choices": ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins", "Neil Armstrong"],
        "correctAnswer": 3
    },
    {
        "question": "What is the chemical symbol for gold?",
        "choices": ["Au", "Ag", "Fe", "Pb"],
        "correctAnswer": 0
    },
    {
        "question": "Which company is known for its search engine?",
        "choices": ["Apple", "Microsoft", "Google", "Amazon"],
        "correctAnswer": 2
    },
    {
        "question": "What does HTML stand for?",
        "choices": ["HyperText Markup Language", "HyperText Machine Language", "HyperText Marking Language", "HyperText Markup Listing"],
        "correctAnswer": 0
    },
    {
        "question": "What is the largest planet in our solar system?",
        "choices": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "correctAnswer": 1
    },
    {
        "question": "Who wrote 'The Great Gatsby'?",
        "choices": ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        "correctAnswer": 1
    }
];

function shuffleArray(array: QuestionType[] | String[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function shuffleChoice(questionItem: QuestionType): QuestionType {
    let correctAnswer = questionItem.choices[questionItem.correctAnswer]
    let newChoices = shuffleArray(questionItem.choices)
    let newCorrectAnswer = newChoices.findIndex((val) => val === correctAnswer);

    return {
        question: questionItem.question,
        choices: newChoices as string[],
        correctAnswer: newCorrectAnswer
    }
}

export const generateQuiz = () => {
    //TODOS: Random the quiz
    const shuffleQuestion = shuffleArray(questions);
    const generatedQuiz = shuffleQuestion.map(q => shuffleChoice(q as QuestionType));
    return generatedQuiz.slice(0, 20)
}


