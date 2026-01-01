import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "./auth-service";

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInSchema = z.object({
    email: z.email("email must follow pattern prefix@domain"),
    password: z.string().min(1, "password is required"),
  });

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = async (data: z.infer<typeof signInSchema>) => {
    console.log(`sign in data: ${JSON.stringify(data)}`);

    // try {
    //   const res = await authService.signIn(data.email, data.password);
    //   console.log(res);

    // } catch (error: any) {
    //   console.log(error);
    //   const errorMessage =
    //     error?.response?.data?.message || error?.message || "Login failed!";

    //   setError(errorMessage);
    // }
  };

  return {
    isLoading,
    error,
    signInForm,
    signInSchema,
    onSignIn,
  };
}
