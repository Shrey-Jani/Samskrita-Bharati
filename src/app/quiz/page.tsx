"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import questionsData from "@/app/data/questions.json";
import "@/app/styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  epic: string;
  image?: string; // Optional property for image
}

// Function to shuffle the array
const shuffleArray = (array: Question[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsLeft, setQuestionsLeft] = useState(questionsData.length);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questionsData.length).fill("")
  );
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    // Shuffle questions when the component is mounted
    const shuffled = shuffleArray([...questionsData]);
    setShuffledQuestions(shuffled);

    // Play background music
    const audio = new Audio("/audio/background-music.mp3");
    audio.loop = true;
    audio.play().catch((err) => console.error("Audio play error:", err));

    return () => {
      audio.pause();
    };
  }, []);

  const handleSelectAnswer = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (
      selectedAnswers[currentQuestion] ===
      shuffledQuestions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }
    setQuestionsLeft(questionsLeft - 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    router.push("/"); // Navigate to the welcome page ("/")
  };

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div className="quiz-complete">
        <h2>Your score: {score}</h2>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  <div className="quiz-wrapper">
    <div className="quiz-container">{/* Your quiz content goes here */}</div>

    <div className="back">
      <button onClick={handleBack} disabled={currentQuestion === 0}>
        <i className="fas fa-arrow-left"></i>{" "}
      </button>
      <button
        onClick={handleSubmit}
        disabled={!selectedAnswers[currentQuestion]}
      >
        <i className="fas fa-arrow-right"></i>{" "}
      </button>
    </div>
  </div>;

  return (
    <div className="quiz-container bg">
      <p>Questions left: {questionsLeft}</p>
      <h2>Question {currentQuestion + 1}:</h2>
      <p></p>
      <p>{shuffledQuestions[currentQuestion]?.question}</p>
      {shuffledQuestions[currentQuestion]?.image && (
        <Image
          src={`${shuffledQuestions[currentQuestion].image}`}
          alt="Related to question"
          className="question-image"
          width={249}
          height={171}
        />
      )}

      <div className="option-div">
        {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedAnswers[currentQuestion] === option}
              onChange={() => handleSelectAnswer(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>

      <button
        className="submit"
        onClick={handleSubmit}
        disabled={!selectedAnswers[currentQuestion]}
      >
        <i className="">Submit</i>{" "}
      </button>
    </div>
  );
};

export default Quiz;
