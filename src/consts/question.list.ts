import { QuestionCategory } from "../types";

interface QuestionCategoryInfo {
  value: QuestionCategory;
  name: string;
}

const questionCategoryList: QuestionCategoryInfo[] = [
  {
    value: QuestionCategory.REACT,
    name: "react",
  },
  {
    value: QuestionCategory.HOOKS,
    name: "hooks",
  },
  {
    value: QuestionCategory.DOM,
    name: "DOM",
  },
  {
    value: QuestionCategory.JSX,
    name: "JSX",
  },
  {
    value: QuestionCategory.PROPS,
    name: "props",
  },
];

export { questionCategoryList, type QuestionCategoryInfo };
