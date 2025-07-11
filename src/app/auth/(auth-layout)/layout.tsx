import AuthRedirect from "@/components/auth/auth-redirect";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <AuthRedirect />
      {children}
    </main>
  );
}