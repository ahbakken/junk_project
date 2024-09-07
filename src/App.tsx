import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  Center,
  Group,
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
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header>
            <Group>
              <NavLink
                component={Link}
                to="/"
                label="Home"
                style={{ width: "15%" }}
                leftSection={<IconHome size="1rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/calculator"
                label="Calculator"
                style={{ width: "15%" }}
                leftSection={<IconCalculator size="1rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/junk"
                label="Junk"
                style={{ width: "15%" }}
                leftSection={<IconPaw size="1rem" stroke={1.5} />}
              />
              <NavLink
                component={Link}
                to="/pokemon"
                label="Pokemon"
                style={{ width: "15%" }}
                leftSection={<IconPokeball size="1rem" stroke={1.5} />}
              />
            </Group>
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
