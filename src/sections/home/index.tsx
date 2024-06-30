import { Title } from "@mantine/core";

export default function Home() {
  return (
    <Title
      order={1}
      style={{
        paddingTop: "5rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      This is home
    </Title>
  );
}
