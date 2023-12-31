"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-2 w-3/4 mx-auto p-4 border-b-2">
      <div className="flex justify-center items-center gap-4">
        <h2
          className="font-bold text-6xl cursor-pointer text-[#441eae] max-sm:text-4xl"
          onClick={() => router.push("/admin")}
        >
          Robotize
        </h2>
      </div>
      <Link
        href="/admin/create"
        className="bg-robotize text-white p-2 rounded-lg"
      >
        Create Article
      </Link>
      <div>
        <input
          type="text"
          value=""
          placeholder="Busca el titulo maricon"
          className="rounded-lg border-2 border-robotize px-4"
        />
      </div>
    </div>
  );
}
