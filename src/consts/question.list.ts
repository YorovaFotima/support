import { QuestionCategory } from "../types";

interface QuestionCategoryInfo {
  value: QuestionCategory;
  name: string;
}

const questionCategoryList: QuestionCategoryInfo[] = [
  {
    value: QuestionCategory.TECHNICAL_SUPPORT,
    name: "Technical Support",
  },
  {
    value: QuestionCategory.PRODUCT_INQUIRIES,
    name: "Product or Service Inquiries",
  },
  {
    value: QuestionCategory.ACCOUNT_ASSISTANCE,
    name: "Account Assistance",
  },
  {
    value: QuestionCategory.TROUBLESHOOTING,
    name: "Troubleshooting",
  },
  {
    value: QuestionCategory.FEEDBACK_SUGGESTIONS,
    name: "Feedback and Suggestions",
  },
  {
    value: QuestionCategory.OTHER,
    name: "Other",
  },
];

export { questionCategoryList, type QuestionCategoryInfo};
