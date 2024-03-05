import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";
import { AuthProvider } from "./stroe/AuthContext";
import { CardProvider } from './stroe/CardContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CardProvider>
            <div className="flex p-5 h-screen relative">
              <SideBar/>
              {children}
            </div>
          </CardProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
