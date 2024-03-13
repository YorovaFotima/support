import { createBrowserRouter } from "react-router-dom";
import {
  AddQuestionPage,
  DashboardPage,
  QuestionPage,
  QuestionsPage,
} from "./pages";
import { Layout } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/questions",
        element: <QuestionsPage />,
      },
      {
        path: "/question",
        element: <QuestionPage />,
      },
      {
        path: "/add-question",
        element: <AddQuestionPage />,
      },
    
    ],
  },
]);

export { router };
