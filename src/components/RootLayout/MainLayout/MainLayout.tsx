import s from './MainLayout.module.css';

interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<header className={s.MainLayout}>
			<div className={s.container}>{children}</div>
		</header>
	);
}
