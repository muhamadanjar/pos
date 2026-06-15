import type { ReactElement } from 'react'
import POSPage from '@/pages/pos'
import DashboardPage from '@/pages/dashboard'
import SettingsPage from '@/pages/settings'
import InventoryDashboard from '@/pages/inventory'
import ReportPage from '@/pages/reports'


import { Navigate, Route, Routes } from 'react-router'

export const AppRoutingSetup = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/pos" element={<POSPage />} />
            <Route path="/inventory" element={<InventoryDashboard />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}