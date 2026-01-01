import type { CreateAlphaFormProps } from "./create-alpha-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { alphaService } from "../alpha-service";

export default function useCreateAlpha(pr: CreateAlphaFormProps) {
  const [message, setMessage] = useState<string>("");
  const schema = z.object({
    name: z.string().min(1, "name is required"),
    price: z
      .number()
      .min(0, "Price must be at least 0")
      .max(2000000000, "Price must be at max 2000000000"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 1.23,
    },
  });

  const onSubmit = async (body: z.infer<typeof schema>) => {
    try {
      console.log(`create alpha: ${JSON.stringify(body)}`);
      const res = await alphaService.createAlpha(body);
      console.log(res);

      setMessage("Alpha created successfully");
      pr.refreshAlphas();
    } catch (error) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update alpha";

      setMessage(errorMessage);
    }
  };

  return {
    message,
    setMessage,
    form,
    onSubmit,
  };
}
