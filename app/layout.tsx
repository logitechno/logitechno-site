import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
export const runtime = 'edge';
import "./styles/globals.css";

const Roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Техно",
	icons: {
		icon: '/static/logitechno.jpg',
		shortcut: '/static/logitechno.jpg',
		apple: '/static/logitechno.jpg'
	},
	openGraph: {
		title: 'Техно',
		description: 'Человек, ананас, нано кодер',
		url: 'https://logitechno.ru',
		siteName: 'logitechno.ru',
		images: 'https://logitechno.ru/static/logitechno.jpg'
	},
	twitter: {
		card: 'summary'
	},
	other: {
		'theme-color': '#0b5000'
	}
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={Roboto.className}>{children}</body>
		</html>
	);
}
