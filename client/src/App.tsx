/**
 * Signal Field application shell: light-first technical case study with an accessible optional dark inspection mode.
 */
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <Home />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
