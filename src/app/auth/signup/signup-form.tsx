"use client";
import { TextInput, PasswordInput, Group, Anchor, Button } from "@mantine/core";
import { useFormStatus, useFormState } from "react-dom";
import { useActionState, useEffect } from "react";
import { signup } from "@/app/auth/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" fullWidth mt="xl" disabled={pending}>
      Sign up
    </Button>
  );
};

export default function SignUpForm() {
  const [state, formAction] = useFormState(signup, { errors: [] });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form action={formAction}>
      <Group>
        <TextInput
          name="firstname"
          label="First Name"
          placeholder="Purdue"
          required
        />
        <TextInput
          name="lastname"
          label="Last Name"
          placeholder="Pete"
          required
        />
      </Group>
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
      <PasswordInput
        name="confirm"
        label="Confirm password"
        placeholder="Confirm your password"
        required
        mt="md"
      />
      <SubmitButton />
    </form>
  );
}
