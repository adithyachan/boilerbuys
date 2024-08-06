import { Anchor, Paper, Title, Text, Container } from "@mantine/core";
import { LoginForm } from "@/app/auth/login/login-form";

export default function Login() {
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
        <LoginForm />
      </Paper>
    </Container>
  );
}
