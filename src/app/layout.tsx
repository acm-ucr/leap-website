import "./globals.css";
import { Krub } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const krub = Krub({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--krub-font",
});

export const metadata = {
  title: "UCR LEAP",
  description: "Create by ACM@UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={krub.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
