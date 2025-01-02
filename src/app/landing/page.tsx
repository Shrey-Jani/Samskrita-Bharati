"use client";
import Link from "next/link";
import React from "react";
export default function home() {
  return (
    <>
      <div>
        <h1 className="instruct">Instructions for the Quiz</h1>
        <div className="para">
          <p>* Each question will have multiple-choice options.</p>
          <p>* Select the most accurate answer. </p>
          <p>
            * Review your answer before moving to the next question, as changes
            may not be allowed.{" "}
          </p>
          <p>
            * Correct answers earn points, while incorrect answers do not affect
            your score.
          </p>
          <p>* Aim for the highest score possible!</p>
          <p>
            * Complete the quiz * within the allocated time to avoid missing any
            questions
          </p>
          <p>
            {" "}
            * There is no pause option during the quiz. * Use the Next button to
            proceed to the next question.
          </p>
          <p>
            * You can use the Back button to revisit the previous question (if
            allowed).
          </p>
          <p>
            {" "}
            * After answering all the questions, click Submit to view your
            score.
          </p>
          <p>* You cannot make changes after submitting the quiz.</p>
          <p>
            * Enjoy the Quiz! This is a fun and engaging way to test your
            knowledge—relax and do your best!
          </p>
        </div>
        <button className="strt">
          <Link href="/quiz">Start</Link>
        </button>
      </div>
    </>
  );
}
