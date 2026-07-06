import {
  HomeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/portal/home";
import { QuestionBank } from "@/pages/questions/bank";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Portal Home",
        path: "/",
        element: <Home />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Question Bank",
        path: "/questions",
        element: <QuestionBank />,
      },
    ],
  },
];

export default routes;
