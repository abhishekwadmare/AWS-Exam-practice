import { Routes, Route } from "react-router-dom";
import { Dashboard, ExamLayout } from "@/layouts";
import { ExamTake } from "@/pages/exam/take";

function App() {
  return (
    <Routes>
      <Route path="/exam/:examId" element={<ExamLayout />}>
        <Route index element={<ExamTake />} />
      </Route>
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
