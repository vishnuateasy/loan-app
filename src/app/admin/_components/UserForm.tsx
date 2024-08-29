"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function UserForm({ user }: any) {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={user?.fullName || ""}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Amount</Label>
        <Input
          type="number"
          id="amount"
          name="amount"
          required
          value={user?.amount}
          //   onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">{user?.amount}</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="loanType">Loan Type</Label>
        <Textarea
          id="loanType"
          name="loanType"
          required
          defaultValue={user?.loanType}
        />
      </div>
      {/* <SubmitButton /> */}
    </form>
  );
}
