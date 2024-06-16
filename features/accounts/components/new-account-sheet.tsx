import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "@/components/ui/sheet";
// import { Sheet } from "lucide-react";
import { useNewAccount } from "../hooks/use-new-accounts";
import { AccountForm } from "./account-form";
import { useCreateAccount } from "../api/use-create-account";

export default function NewAccountSheet() {
  const { isOpen, onClose } = useNewAccount();
  const mutation = useCreateAccount();
  const handleSubmit = (values: any) => {
    // console.log(values);
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <Sheet onOpenChange={onClose} open={isOpen}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transition
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          defaultValues={{
            name: "",
          }}
          disable={mutation.isPending}
          onSubmit={handleSubmit}
        />
      </SheetContent>
    </Sheet>
  );
}
