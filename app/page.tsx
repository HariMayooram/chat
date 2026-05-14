import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/server";
import { LandingPage } from "@/components/landing-page";
import { PublicLayout } from "@/components/public-layout";

export default async function RootPage() {
  const user = await getCurrentUser();
  if (user) redirect("/chat");

  return (
    <PublicLayout>
      <LandingPage />
    </PublicLayout>
  );
}
