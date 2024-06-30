import "@mantine/core/styles.css";
import { MantineProvider, AppShell, Center } from "@mantine/core";
import { theme } from "./theme";
import "./App.css";
import CalculatorSection from "./sections/calculator";
import JunkSection from "./sections/junk";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Home from "./sections/home";

export default function App() {
  const [opened] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppShell
          title="Junk Project"
          withBorder
          padding={"md"}
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header>
            <div>Logo</div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/calculator">Calculator</Link>
              <Link to="/junk">Junk</Link>
            </nav>
          </AppShell.Header>
          <Center>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/calculator" Component={CalculatorSection} />
              <Route path="/junk" Component={JunkSection} />
            </Routes>
          </Center>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}
