import LoginPage from "@/components/loginPage/LoginPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center text-white my-20">Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}