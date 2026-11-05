
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Tickets from "./pages/Tickets";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

function PlaceholderPage({ title }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8">
      <h1 className="text-2xl font-bold text-slate-900">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        This page is under development.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tickets" element={<Tickets />} />

          <Route
            path="/customers"
            element={<PlaceholderPage title="Customers" />}
          />

          <Route
            path="/ai-assistant"
            element={<PlaceholderPage title="AI Assistant" />}
          />

          <Route
            path="/analytics"
            element={<PlaceholderPage title="Analytics" />}
          />

          <Route
            path="/settings"
            element={<PlaceholderPage title="Settings" />}
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
