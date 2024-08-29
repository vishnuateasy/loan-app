"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader } from "./_components/PageHeader";
import { IUser } from "@/models/User";
import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`/api/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Customers</PageHeader>
        {/* <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button> */}
      </div>
      <ProductsTable users={users} />
    </>
  );
}

function ProductsTable({ users }: any) {
  if (users.length === 0) return <p>No products found</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead>Step</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user: IUser) => (
          <TableRow key={user._id}>
            <TableCell>
              <span className="sr-only">Available</span>
              <CheckCircle2 />
            </TableCell>
            <TableCell>{user.mobile}</TableCell>
            <TableCell>{user.step}</TableCell>
            <TableCell>{user.amount}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/${user._id}`}>View</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
