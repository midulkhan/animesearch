"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const placeholders = [
    "Attack on Titan",
    "Naruto Shippuden",
    "One Piece",
    "Death Note",
    "Sword Art Online",
  ];

  const handleSubmit = () => {
    router.push(`?search=${search}`);
  };

  return (
    <div className="mt-10">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
