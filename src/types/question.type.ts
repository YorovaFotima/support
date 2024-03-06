import { QuestionCategory } from "./question-category.enum";

interface AddQuestionDto {
  title: string;
  description: string;
  category: QuestionCategory;
}

interface QuestionDto {
  id: number;
  title: string;
  description: string;
  category: QuestionCategory;
}

export type { AddQuestionDto, QuestionDto }
