import { QueryProvider } from '@/providers/query-client'

import './globals.scss'
import { Layout } from '@/components/layout/layout'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<QueryProvider>
			<Layout>{children}</Layout>
		</QueryProvider>
	)
}
