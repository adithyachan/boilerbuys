"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import { loginSchema, signUpSchema } from "@/utils/validation";
import { ZodError, ZodIssue } from "zod";
import { LoginError, SignUpError } from "@/types/error";

export async function login(
  prevState: { errors: LoginError[] },
  formData: FormData,
): Promise<{ errors: LoginError[] }> {
  const supabase = createClient();
  console.log(formData);
  try {
    const data = loginSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      const e: LoginError = { code: "auth", message: error.message };
      return { errors: [e] };
    }

    revalidatePath("/");
    redirect("/");
  } catch (e) {
    console.log(e);
    if (e instanceof ZodError) {
      return {
        errors: e.issues.map((issue: ZodIssue): LoginError => {
          if (issue.path[0] == "email" || issue.path[0] == "password") {
            return { code: issue.path[0], message: issue.message };
          }

          return { code: "other", message: issue.message };
        }),
      };
    }

    return { errors: [{ code: "network", message: (e as Error).message }] };
  }
}

export async function signup(
  prevState: { errors: SignUpError[] },
  formData: FormData,
): Promise<{ errors: SignUpError[] }> {
  const supabase = createClient();
  try {
    const data = signUpSchema.parse({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    });

    const { error } = await supabase.auth.signUp(data);

    if (error) {
      const e: SignUpError = { code: "auth", message: error.message };
      return { errors: [e] };
    }

    revalidatePath("/");
    redirect("/");
  } catch (e) {
    console.log(e);
    if (e instanceof ZodError) {
      return {
        errors: e.issues.map((issue: ZodIssue): SignUpError => {
          if (
            issue.path[0] == "email" ||
            issue.path[0] == "password" ||
            issue.path[0] == "firstname" ||
            issue.path[0] == "lastname" ||
            issue.path[0] == "confirm"
          ) {
            return { code: issue.path[0], message: issue.message };
          }

          return { code: "other", message: issue.message };
        }),
      };
    }

    return { errors: [{ code: "network", message: (e as Error).message }] };
  }
}
