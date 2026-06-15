import type { ReactElement } from 'react'
import POSPage from '@/pages/pos'
import DashboardPage from '@/pages/dashboard'
import { Navigate, Route, Routes } from 'react-router'

export const AppRoutingSetup = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/pos" element={<POSPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}