import QueryProvider from './query-client'
import AuthProvider from './auth'
import SettingProvider from './setting'

export default function WrapperProvider({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <SettingProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
            </SettingProvider>
        </AuthProvider>
    )
}
