"use client";
import { useEffect, useState } from "react";
import { PageHeader } from "../_components/PageHeader";
import { UserForm } from "../_components/UserForm";

export default async function ViewUserPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageHeader>View User</PageHeader>
      <UserForm user={user} />
    </>
  );
}
