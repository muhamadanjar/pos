import { useState, useMemo } from 'react'
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, type ColumnDef } from '@tanstack/react-table'
import DashboardLayout from '@/layouts/dashboard-layout'
import { DataGrid } from '@/components/ui/datagrid'
import { DataGridColumnHeader } from '@/components/ui/datagrid-column-header'
import { DataGridPagination } from '@/components/ui/datagrid-pagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/icons'
import { cn } from '@/lib/utils'
import type { Product } from './store/product'
import useProductStore from './store/product'
import { useProducts } from './hooks/use-products'
import AddProductModal from './components/add-product-modal'
import { DataGridTable } from '#components/ui/datagrid-table'
import { Card, CardTable } from '#components/ui/card'



function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

export default function ProductsPage() {
  const [addOpen, setAddOpen] = useState(false)
  const { data = [], isLoading } = useProducts()
  const search = useProductStore((s) => s.search)
  const setSearch = useProductStore((s) => s.setSearch)

  const filtered = useMemo(
    () =>
      search.trim()
        ? data.filter(
            (p) =>
              p.name.toLowerCase().includes(search.toLowerCase()) ||
              p.sku.toLowerCase().includes(search.toLowerCase()) ||
              p.category.toLowerCase().includes(search.toLowerCase())
          )
        : data,
    [data, search]
  )

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'sku',
        meta: { headerTitle: 'SKU', cellClassName: 'font-mono text-xs' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="SKU" />,
      },
      {
        accessorKey: 'name',
        meta: { headerTitle: 'Nama Produk' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="Nama Produk" />,
      },
      {
        accessorKey: 'category',
        meta: { headerTitle: 'Kategori' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="Kategori" />,
      },
      {
        accessorKey: 'price',
        meta: { headerTitle: 'Harga', cellClassName: 'text-right' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="Harga" />,
        cell: ({ row }) => <div className="text-right text-sm font-medium">{formatPrice(row.original.price)}</div>,
      },
      {
        accessorKey: 'stock',
        meta: { headerTitle: 'Stok', cellClassName: 'text-center' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="Stok" />,
        cell: ({ row }) => {
          const stock = row.original.stock
          return (
            <div className={cn('text-center text-sm font-medium', stock === 0 && 'text-ds-error', stock < 10 && stock > 0 && 'text-ds-secondary')}>
              {stock}
            </div>
          )
        },
      },
      {
        accessorKey: 'status',
        meta: { headerTitle: 'Status' },
        header: ({ column }) => <DataGridColumnHeader column={column} title="Status" />,
        cell: ({ row }) => {
          const status = row.original.status
          return (
            <Badge variant={status === 'active' ? 'primary' : 'secondary'} className={status === 'active' ? 'bg-ds-secondary-container text-ds-secondary' : 'bg-ds-surface-high text-ds-on-surface-variant'}>
              {status === 'active' ? 'Aktif' : 'Tidak Aktif'}
            </Badge>
          )
        },
      },
    ],
    []
  )

  const table = useReactTable({
    data: filtered,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <DashboardLayout title="Produk" subtitle="Kelola daftar produk di toko Anda">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 max-w-sm">
          <Input
            placeholder="Cari produk, SKU, atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm"
          />
        </div>
        <Button onClick={() => setAddOpen(true)} className="bg-ds-primary text-ds-on-primary hover:bg-ds-primary/90 gap-2">
          <Icon name="plus" className="w-4 h-4" />
          Tambah Produk
        </Button>
      </div>

        <DataGrid table={table} recordCount={filtered.length} isLoading={isLoading}>
          <Card>
            <CardTable>
              <DataGridTable/>
            </CardTable>
            <div className="mt-6">
              <DataGridPagination />
            </div>
          </Card>
        </DataGrid>

     

      <AddProductModal open={addOpen} onOpenChange={setAddOpen} />
    </DashboardLayout>
  )
}
