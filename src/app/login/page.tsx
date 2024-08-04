"use client";
//import { login, signup } from "./actions";
import { Anchor, Paper, Title, Text, Container, Button } from "@mantine/core";

import { FaMicrosoft } from "react-icons/fa";

export default function Login() {
  const handleLogin = () => {};
  return (
    <Container size={420} my={40}>
      <Title ta="center" className="font-extrabold">
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text>Sign in using your Purdue outlook account</Text>
        <Button
          fullWidth
          mt="sm"
          leftSection={<FaMicrosoft />}
          onClick={handleLogin}
        >
          Sign in to Outlook
        </Button>
      </Paper>
    </Container>
  );
}
