import { Routes, Route } from "react-router-dom";
import routes from "@/routes";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-aws-bg p-4">
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
