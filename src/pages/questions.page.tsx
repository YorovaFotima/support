import { useEffect, useState } from "react";
import { QuestionDto } from "../types";

function QuestionsPage() {
  const [questions, setQuestions] = useState<QuestionDto[]>([]);

  useEffect(() => {
    const existingQuestionsJson = localStorage.getItem('questions');
    const existingQuestions: QuestionDto[] = existingQuestionsJson ? JSON.parse(existingQuestionsJson) : null;
    existingQuestions && setQuestions(existingQuestions)
  },[])
  
  return <>QuestionsPage</>;
}

export { QuestionsPage };
