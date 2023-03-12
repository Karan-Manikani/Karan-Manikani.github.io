import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ContactScreen from "./screens/ContactScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen flex flex-col justify-between text-darkGray bg-offWhite dark:bg-darkGray dark:text-offWhite">
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/resume" element={<ResumeScreen />}></Route>
            <Route path="/projects" element={<ProjectsScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
          </Routes>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
