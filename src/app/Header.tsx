"use client";

import { Group, Button, Text, Box } from "@mantine/core";
import Link from "next/link";
import { AuthError, User } from "@supabase/supabase-js";
import useSupabaseClient from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export function Header() {
  const supabase = useSupabaseClient();
  const [user, setUser] = useState<User | null>(null);

  const loadUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log(error);
    }

    if (!data) {
      console.log("Unable to load user");
    }

    setUser(data.user);
  };

  const logout = async () => {
    const error = await supabase.auth.signOut();

    if (error instanceof AuthError) {
      console.log(error);
    }

    loadUser();
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Box pb={120}>
      <header className="h-16 px-4 border-b-gray-300">
        <Group justify="space-between" h="100%">
          <Text c="old-gold" size="xl">
            BoilerBuys
          </Text>
          {!user ? (
            <Group>
              <Button variant="default">
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button>
                <Link href="/auth/signup">Sign up</Link>
              </Button>
            </Group>
          ) : (
            <Group>
              <Text>{user.email}</Text>
              <Button onClick={logout} variant="default">
                Log Out
              </Button>
            </Group>
          )}
        </Group>
      </header>
    </Box>
  );
}
