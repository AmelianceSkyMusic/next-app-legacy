import s from './MainLayout.module.css';

interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<main className={s.MainLayout}>
			<div className={s.container}>{children}</div>
		</main>
	);
}
