import POSLayout from '@/layouts/pos-layout'
import ProductCatalog from './components/product-catalog'
import CartPanel from './components/cart-panel'

function POSPage() {
  return (
    <POSLayout>
      <div className="flex h-full">
        <div className="flex-1 min-w-0 overflow-hidden">
          <ProductCatalog />
        </div>
        <div className="w-80 xl:w-96 shrink-0">
          <CartPanel />
        </div>
      </div>
    </POSLayout>
  )
}

export default POSPage
