import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { UpdateAlphaDialogProps } from "./update-alpha-dialog";
import { alphaService } from "../alpha-service";

export default function useUpdateAlpha(pr: UpdateAlphaDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const updateSchema = z.object({
    name: z.string().min(1, "name is required"),
    price: z
      .number()
      .min(0, "Price must be at least 0")
      .max(2000000000, "Price must be at max 2000000000"),
  });

  const updateForm = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: "???",
      price: 1.11,
    },
  });

  const onSubmit = async (data: z.infer<typeof updateSchema>) => {
    console.log(`update data: ${JSON.stringify(data)}`);

    try {
      const res = await alphaService.updateAlpha(pr.alphaId, data);
      console.log(res);
      setMessage("Alpha updated successfully");

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

  useEffect(() => {
    if (!isOpen) return;
    (async () => {
      try {
        const res = await alphaService.getAlpha(pr.alphaId);

        console.log(res);
        updateForm.setValue("name", res.data.name);
        updateForm.setValue("price", res.data.price);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    message,
    updateSchema,
    updateForm,
    onSubmit,
  };
}
