import Head from 'next/head';

import { APP } from '~constants/APP';

interface MetaProps {
	title: string;
	description?: string;
	children: React.ReactNode;
}

export function Meta({ title, description, children }: MetaProps) {
	return (
		<>
			<Head>
				<title>{`${title} | ${APP.name}`}</title>
				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:title" content={`${title} | Rivne Climat`} />
						<meta name="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			{children}
		</>
	);
}
