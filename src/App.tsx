import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "./App.css";
import CalculatorSection from "./sections/calculator";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="app-content">
        <CalculatorSection />
      </div>
    </MantineProvider>
  );
}
