import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { RootLayout } from '~components/RootLayout/RootLayout';

import '~/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={inter.className}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</div>
	);
}
