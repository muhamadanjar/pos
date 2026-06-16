import type { MenuItem } from "@/types/menu";

export const MENU_ITEMS: MenuItem[] = [
    { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
    {
        label: 'Sales & Orders',
        icon: 'shopping-cart',
        children: [
            { label: 'Transactions', href: '/transactions', icon: 'receipt' },
            { label: 'Orders', href: '/orders', icon: 'package' },
            { label: 'Invoices', href: '/invoices', icon: 'file-text' },
        ],
    },
    { label: 'Pos', href: '/pos', icon: 'store' },
    {
        label: 'Inventory',
        icon: 'box',
        children: [
            { label: 'Overview', href: '/inventory', icon: 'layout-dashboard' },
            { label: 'Products', href: '/inventory/products', icon: 'package-2' },
            { label: 'Categories', href: '/inventory/categories', icon: 'folder' },
            { label: 'Stock', href: '/inventory/stock', icon: 'warehouse' },
        ],
    },
    {
        label: 'Reports & Analytics',
        icon: 'bar-chart-3',
        children: [
            { label: 'Sales Reports', href: '/reports', icon: 'line-chart' },
            { label: 'Analytics', href: '/reports/analytics', icon: 'activity' },
            { label: 'Inventory Reports', href: '/reports/inventory', icon: 'pie-chart' },
        ],
    },
    { label: 'Settings', href: '/settings', icon: 'settings' },
]