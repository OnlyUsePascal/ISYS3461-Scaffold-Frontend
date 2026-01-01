import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import useUpdateAlpha from "./use-update-alpha";

export interface UpdateAlphaDialogProps {
  alphaId: string;
  refreshAlphas: () => Promise<void>;
}

export default function UpdateAlphaDialog(pr: UpdateAlphaDialogProps) {
  const { isOpen, setIsOpen, message, updateSchema, updateForm, onSubmit } =
    useUpdateAlpha(pr);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-blue-100" variant="outline">
          Update
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Property {pr.alphaId}</DialogTitle>
        </DialogHeader>

        <Form {...updateForm}>
          <form
            onSubmit={updateForm.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            <FormField
              control={updateForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={updateForm.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>Status: {message}</div>

            <DialogFooter>
              <div className="flex justify-between w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => updateForm.reset()}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Update!</Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
