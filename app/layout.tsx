import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext";
import { FollowProvider } from "@/app/context/FollowContext";

export const metadata = {
  title: "Profile Dashboard",
  description: "Mini profile dashboard app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <FollowProvider>{children}</FollowProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
