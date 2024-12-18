import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
