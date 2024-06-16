import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "@/components/ui/sheet";
// import { Sheet } from "lucide-react";

import { AccountForm } from "./account-form";
import { useCreateAccount } from "../api/use-create-account";
import { useOpenAccount } from "../hooks/use-open-account";
import { useGetAccount } from "../api/use-get-account";

export default function EditAccountSheet() {
  const { isOpen, onClose, id } = useOpenAccount();
  const mutation = useCreateAccount();
  const accountQuery = useGetAccount(id);
  const handleSubmit = (values: any) => {
    // console.log(values);
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  const defaultData = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
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
          defaultValues={defaultData}
          disable={mutation.isPending}
          onSubmit={handleSubmit}
        />
      </SheetContent>
    </Sheet>
  );
}
