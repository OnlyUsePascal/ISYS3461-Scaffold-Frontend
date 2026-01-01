import { useAuthStore } from "@/stores/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "./auth-service";
import { useNavigate } from "react-router";

export default function useSignIn() {
  const { signIn } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const schema = z.object({
    email: z.email("email must follow pattern prefix@domain"),
    password: z.string().min(1, "password is required"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      // sign in & get token
      const signInRes = (
        await authService.signIn({
          username: data.email,
          password: data.password,
        })
      ).data;
      console.log(signInRes);

      // fetch user
      const userRes = (await authService.getMyProfile(signInRes.token)).data;
      console.log(userRes);

      // store user info, token
      signIn(signInRes.token, {
        id: userRes.id,
        email: userRes.name,
        role: "ADMIN",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      const errorMessage = err instanceof Error ? err.message : "Login failed!";

      setError(errorMessage);
    }
  };

  return {
    error,
    form,
    onSubmit,
  };
}
