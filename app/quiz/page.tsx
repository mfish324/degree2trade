"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { quizQuestions, CareerPath } from "@/lib/quizData";

type CareerScores = Record<CareerPath, number>;

const initialScores: CareerScores = {
  electrician: 0,
  nurse: 0,
  emt: 0,
  hvac: 0,
  plumber: 0,
  firefighter: 0,
  solar: 0,
  welder: 0,
  police: 0,
  medicalTech: 0,
  religiousVocations: 0,
  military: 0,
};

// Three color themes that cycle through questions
const colorThemes = [
  {
    bg: "bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950",
    accent: "bg-blue-500",
    accentHover: "hover:border-blue-400/50",
    letterBg: "group-hover:bg-blue-500",
    tileBg: "bg-slate-800/80 hover:bg-blue-900/40",
    tileBorder: "border-blue-500/20 hover:border-blue-400/50",
  },
  {
    bg: "bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950",
    accent: "bg-emerald-500",
    accentHover: "hover:border-emerald-400/50",
    letterBg: "group-hover:bg-emerald-500",
    tileBg: "bg-slate-800/80 hover:bg-emerald-900/40",
    tileBorder: "border-emerald-500/20 hover:border-emerald-400/50",
  },
  {
    bg: "bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950",
    accent: "bg-violet-500",
    accentHover: "hover:border-violet-400/50",
    letterBg: "group-hover:bg-violet-500",
    tileBg: "bg-slate-800/80 hover:bg-violet-900/40",
    tileBorder: "border-violet-500/20 hover:border-violet-400/50",
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<CareerScores>({ ...initialScores });

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Get current color theme (cycles through 3 themes)
  const theme = colorThemes[currentQuestion % 3];

  const handleAnswer = (optionIndex: number) => {
    const option = question.options[optionIndex];

    // Add option scores to career totals
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([career, score]) => {
      newScores[career as CareerPath] += score;
    });
    setScores(newScores);

    // Save answer
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Check if this is the last question
    if (currentQuestion === totalQuestions - 1) {
      // Encode scores and navigate to results
      const encodedScores = encodeURIComponent(JSON.stringify(newScores));
      router.push(`/results?scores=${encodedScores}`);
    } else {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) return;

    // Get the previous question and answer
    const prevQuestion = quizQuestions[currentQuestion - 1];
    const prevAnswerIndex = answers[answers.length - 1];
    const prevOption = prevQuestion.options[prevAnswerIndex];

    // Subtract previous answer scores
    const newScores = { ...scores };
    Object.entries(prevOption.scores).forEach(([career, score]) => {
      newScores[career as CareerPath] -= score;
    });
    setScores(newScores);

    // Remove the last answer
    setAnswers(answers.slice(0, -1));

    // Go back one question
    setCurrentQuestion(currentQuestion - 1);
  };

  const optionLetters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg}`}>
      {/* Header */}
      <header className="border-b border-surface-light/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <div className="text-text-secondary text-sm">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-surface/50 h-2">
        <div
          className={`${theme.accent} h-2 transition-all duration-300 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {question.question}
        </h1>
        <p className="text-text-secondary mb-8">
          Choose the option that best describes you
        </p>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={`q${currentQuestion}-opt${index}`}
              onClick={() => handleAnswer(index)}
              className={`w-full flex items-center gap-4 p-4 ${theme.tileBg} border ${theme.tileBorder} rounded-lg transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-slate-500/50`}
            >
              <div className={`w-10 h-10 rounded-full bg-surface-light flex items-center justify-center font-semibold text-text-secondary ${theme.letterBg} group-hover:text-white transition-colors shrink-0`}>
                {optionLetters[index]}
              </div>
              <span className="text-text-primary">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentQuestion === 0
                ? "bg-surface text-text-muted cursor-not-allowed"
                : "bg-surface hover:bg-surface-light text-text-secondary"
            }`}
          >
            Back
          </button>
          <div className="text-text-muted text-sm">
            {currentQuestion + 1} / {totalQuestions}
          </div>
        </div>
      </main>
    </div>
  );
}
