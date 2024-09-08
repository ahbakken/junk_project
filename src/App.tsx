import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  Center,
  Flex,
  NavLink,
} from "@mantine/core";
import { theme } from "./theme";
import "./App.css";
import CalculatorSection from "./sections/calculator";
import JunkSection from "./sections/junk";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Home from "./sections/home";
import {
  IconHome,
  IconCalculator,
  IconPaw,
  IconPokeball,
} from "@tabler/icons-react";
import PokemonSection from "./sections/pokemon";

export default function App() {
  const [opened] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppShell
          title="Junk Project"
          withBorder
          padding={"md"}
          header={{ height: 55 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header>
            <Flex justify="flex-start" align="center" direction="row">
              <NavLink
                component={Link}
                to="/"
                label="Home"
                style={{ width: "15%" }}
                leftSection={<IconHome size="2rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/calculator"
                label="Calculator"
                style={{ width: "15%" }}
                leftSection={<IconCalculator size="2rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/junk"
                label="Junk"
                style={{ width: "15%" }}
                leftSection={<IconPaw size="2rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/pokemon"
                label="Pokemon"
                style={{ width: "15%" }}
                leftSection={<IconPokeball size="2rem" stroke={1.5} />}
              />
            </Flex>
          </AppShell.Header>
          <Center>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<CalculatorSection />} />
              <Route path="/junk" element={<JunkSection />} />
              <Route path="/pokemon" element={<PokemonSection />} />
            </Routes>
          </Center>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}
