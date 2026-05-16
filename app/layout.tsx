import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Van Tuan | Backend Software Engineer",
  description:
    "Portfolio của Tuấn (Le Van Tuan) - Backend Software Engineer, tập trung vào Spring Boot, microservices, Kafka, Redis, PostgreSQL và hệ thống giao dịch quy mô lớn.",
  openGraph: {
    title: "Le Van Tuan | Backend Software Engineer",
    description:
      "Portfolio của Tuấn: backend engineer portfolio tối ưu SEO, responsive, xây dựng bằng Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
