import {
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  PasswordInput,
  Group,
  Checkbox,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import SignUpForm from "./signup-form";

export default function Signup() {
  return (
    <Container size={500} my={40}>
      <Title ta="center" className="font-extrabold">
        Welcome to BoilerBuys!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component="button">
          <Link href="/auth/login">Log In</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <SignUpForm />
      </Paper>
    </Container>
  );
}
