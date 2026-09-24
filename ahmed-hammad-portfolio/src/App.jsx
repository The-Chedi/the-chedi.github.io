import Header from "./components/Header";
import About from "./components/About";
import CurrentRole from "./components/CurrentRole";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-6">
        <About />
        <CurrentRole />
        <Experience />
        <Awards />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}