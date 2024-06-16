// "use server"

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/data-table";

export async function DataTableBox({}: { accounts?: any }) {
  // const data = await getData();
  const accountsQuery = useGetAccounts();
  const accounts = accountsQuery.data || [];
  return (
    <div className="container mx-auto py-10">
      <DataTable
        onDelete={() => {}}
        disable
        columns={columns}
        data={accounts}
      />
    </div>
  );
}
