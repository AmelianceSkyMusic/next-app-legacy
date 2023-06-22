import type React from 'react';

import { FooterLayout } from './FooterLayout/FooterLayout';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { MainLayout } from './MainLayout/MainLayout';

import s from './RootLayout.module.css';

interface RootLayoutProps {
	children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className={s.RootLayout}>
			<FooterLayout />
			<MainLayout>{children}</MainLayout>
			<HeaderLayout />
		</div>
	);
}
