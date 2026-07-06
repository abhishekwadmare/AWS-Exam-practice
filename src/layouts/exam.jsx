import { Outlet } from "react-router-dom";

export function ExamLayout() {
  return (
    <div className="min-h-screen bg-aws-bg text-aws-text font-sans">
      <Outlet />
    </div>
  );
}

ExamLayout.displayName = "/src/layouts/exam.jsx";

export default ExamLayout;
