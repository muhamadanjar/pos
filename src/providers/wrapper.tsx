import QueryProvider from './query-client'
import AuthProvider from './auth'

export default function WrapperProvider({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </AuthProvider>
    )
}
