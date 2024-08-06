"use client";
import { TextInput, PasswordInput, Group, Anchor, Button } from "@mantine/core";
import { useFormStatus, useFormState } from "react-dom";
import { useActionState, useEffect } from "react";
import { login } from "@/app/auth/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" fullWidth mt="xl" disabled={pending}>
      Sign in
    </Button>
  );
};

export function LoginForm() {
  const [state, formAction] = useFormState(login, { errors: [] });

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <form action={formAction}>
      <TextInput
        name="email"
        label="Email"
        placeholder="pete@purdue.edu"
        required
      />
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Your password"
        required
        mt="md"
      />
      <Group justify="right" mt="lg">
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <SubmitButton />
    </form>
  );
}
