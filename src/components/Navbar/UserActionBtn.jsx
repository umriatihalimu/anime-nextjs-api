import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionBtn = async () => {
  // ambil data user dari githubnya dari route.js
  const user = await authUserSession();
  const actLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex flex-row  gap-2 me-2 justify-between text-primary  text-sm">
      {user ? (
        <Link
          href="/users/dashboard"
          className="px-2 py-0.5 rounded bg-gray-700 hover:bg-slate-600 items-center flex"
        >
          Dashboard
        </Link>
      ) : null}
      {/* signin di href itu bawaan */}
      <Link href={actionURL}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 hover:text-slate-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Link>
    </div>
  );
};
export default UserActionBtn;
