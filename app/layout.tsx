import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://matees.net"),
	title: {
		default: "Maytham Ajam - Software Engineer",
		template: "%s | Maytham Ajam",
	},
	description:
		"Software engineer with 6+ years of experience building full-stack web applications, SaaS products, and systems software. Student at George Mason University.",
	keywords: [
		"software engineer",
		"full stack developer",
		"web developer",
		"react",
		"nextjs",
		"typescript",
		"portfolio",
		"maytham ajam",
		"matees",
	],
	authors: [{ name: "Maytham Ajam", url: "https://matees.net" }],
	creator: "Maytham Ajam",

	openGraph: {
		title: "Maytham Ajam - Software Engineer",
		description:
			"Software engineer with 6+ years of experience building full-stack web applications, SaaS products, and systems software.",
		url: "https://matees.net",
		siteName: "Maytham Ajam",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Maytham Ajam - Software Engineer Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Maytham Ajam - Software Engineer",
		description:
			"Software engineer with 6+ years of experience building full-stack web applications, SaaS products, and systems software.",
		creator: "@ajammaytham",
		images: ["/og-image.jpg"],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	icons: {
		icon: "/icon.svg",
		shortcut: "/icon.svg",
		apple: "/icon.svg",
	},

	alternates: {
		canonical: "https://matees.net",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={nunitoSans.variable}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
