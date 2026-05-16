import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Van Tuan | Backend Software Engineer",
  description:
    "Backend Software Engineer portfolio for Le Van Tuan, focused on Spring Boot, microservices, Kafka, Redis, PostgreSQL, Docker, Kubernetes, and scalable transactional systems.",
  openGraph: {
    title: "Le Van Tuan | Backend Software Engineer",
    description:
      "A polished, responsive, SEO-friendly backend engineer portfolio built with Next.js.",
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
