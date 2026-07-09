import { Home } from "@/pages/portal/home";
import { QuestionBank } from "@/pages/questions/bank";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/questions", element: <QuestionBank /> },
];

export default routes;
