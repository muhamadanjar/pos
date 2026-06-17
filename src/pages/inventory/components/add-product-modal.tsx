import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { AddProductInput } from '../store/product'
import { useAddProduct } from '../hooks/use-products'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Icon from '@/components/icons'

type AddProductModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddProductModal({ open, onOpenChange }: AddProductModalProps) {
  const form = useForm<AddProductInput>({
    defaultValues: {
      name: '',
      sku: '',
      category_id: '',
      category: '',
      price: 0,
      stock: 0,
      status: 'active',
    },
  })

  const { mutate: addProduct, isPending } = useAddProduct()

  const onSubmit = (data: AddProductInput) => {
    addProduct(data, {
      onSuccess: () => {
        toast.success('Produk berhasil ditambahkan')
        form.reset()
        onOpenChange(false)
      },
      onError: () => {
        toast.error('Gagal menambahkan produk')
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Produk Baru</DialogTitle>
        </DialogHeader>

        <DialogBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="sku"
                rules={{ required: 'SKU harus diisi' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input placeholder="SKU-001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                rules={{ required: 'Nama produk harus diisi' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Produk</FormLabel>
                    <FormControl>
                      <Input placeholder="Nasi Goreng" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                rules={{ required: 'Kategori harus diisi' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <FormControl>
                      <Input placeholder="Makanan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                rules={{ required: 'Harga harus diisi', min: 0 }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga (Rp)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="25000" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                rules={{ required: 'Stok harus diisi', min: 0 }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stok</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="10" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full px-3 py-2 rounded-lg border border-ds-outline-variant text-sm">
                        <option value="active">Aktif</option>
                        <option value="inactive">Tidak Aktif</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button onClick={form.handleSubmit(onSubmit)} disabled={isPending}>
            {isPending && <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />}
            Simpan Produk
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
