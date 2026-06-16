# Dokumen Persyaratan Produk (PRD): POS UI

**Versi:** 1.0  
**Status:** [Draft]  
**Pemilik:** [Nama Product Manager]  
**Tanggal:** [2026-06-15]

---

## 1. Ringkasan Eksekutif
### 1.1 Tujuan

membuat aplikasi pos yang bisa di manage dari sisi penjualan dan juga bisa melakukan stok masuk, stok keluar, dan stok opname dan bisa di track hasil dari semua penjualan bisa difilter dari untung dan rugi nya. dan juga ada report secara berkala


### 1.2 Visi & Penyelarasan Strategis
Bagaimana proyek ini selaras dengan tujuan jangka panjang perusahaan atau OKR kuartal saat ini?

---

## 2. Target Audiens & Persona
| Persona | Deskripsi | Tujuan | Masalah Utama |
| :--- | :--- | :--- | :--- |
| [Admin] | Tim operasional internal | Mengelola data pengguna | Pelaporan manual memakan waktu |
| [Operator] | operator | Transaksi yang aman | Latensi tinggi saat checkout |

---

## 3. Persyaratan Fungsional
### 3.1 User Stories
| ID | User Story | Prioritas | Kriteria Penerimaan |
| :--- | :--- | :--- | :--- |
| US-01 | Sebagai user, saya ingin masuk via SSO... | P0 (Wajib) | 1. Berhasil dengan Okta, 2. Muncul MFA |
| US-02 | Sebagai user, saya ingin ekspor laporan... | P1 (Penting) | 1. Format CSV, 2. Maks 50rb baris |

### 3.2 Cakupan (Scope) & Di Luar Cakupan
*   **Dalam Cakupan:** Fitur A, Fitur B, Integrasi dengan Sistem X.
*   **Di Luar Cakupan:** Dukungan Aplikasi Mobile (Fase 2), Migrasi data lama.

---

## 4. Persyaratan Non-Fungsional
*   **Performa:** Pemuatan halaman < 2 detik di bawah 1000 pengguna bersamaan.
*   **Keamanan:** Enkripsi data (AES-256) dan transmisi (TLS 1.3).
*   **Kepatuhan:** Log yang patuh terhadap regulasi GDPR/PDP.
*   **Skalabilitas:** Mendukung penskalaan horizontal untuk microservices.

---

## 5. Arsitektur Teknis & Integrasi
### 5.1 Diagram Sistem

```mermaid
erDiagram
  outlets ||--o{ products : "jual"
  outlets ||--o{ stock_movements : "catat"
  outlets ||--o{ stock_opnames : "lakukan"
  outlets ||--o{ sales : "buat"
  
  categories ||--o{ products : "kelompok"
  suppliers ||--o{ products : "suplai"
  suppliers ||--o{ purchase_orders : "terima"
  
  products ||--o{ product_variants : "punya"
  products ||--o{ product_units : "satuan"
  
  product_variants ||--o{ stock_ledger : "pantau"
  product_variants ||--o{ stock_movement_items : "masuk/keluar"
  product_variants ||--o{ stock_opname_items : "opname"
  product_variants ||--o{ sale_items : "dijual"
  product_variants ||--o{ purchase_order_items : "dipesan"
  
  stock_movements ||--o{ stock_movement_items : "detail"
  stock_opnames ||--o{ stock_opname_items : "detail"
  sales ||--o{ sale_items : "detail"
  purchase_orders ||--o{ purchase_order_items : "detail"
  
  users ||--o{ stock_movements : "buat"
  users ||--o{ stock_opnames : "buat"
  users ||--o{ sales : "kasir"

  outlets {
    bigserial id PK
    varchar name
    varchar code UK
    text address
    boolean is_active
    timestamptz created_at
  }

  categories {
    bigserial id PK
    bigint parent_id FK
    varchar name
    varchar slug UK
    int sort_order
  }

  suppliers {
    bigserial id PK
    varchar name
    varchar code UK
    varchar phone
    text address
    boolean is_active
  }

  users {
    bigserial id PK
    bigint outlet_id FK
    varchar name
    varchar email UK
    varchar role
    boolean is_active
  }

  products {
    bigserial id PK
    bigint category_id FK
    bigint supplier_id FK
    varchar name
    varchar sku UK
    varchar barcode
    varchar unit_base
    numeric cost_price
    numeric sell_price
    boolean has_variants
    boolean is_active
  }

  product_variants {
    bigserial id PK
    bigint product_id FK
    varchar sku UK
    varchar barcode
    jsonb attributes
    numeric cost_price
    numeric sell_price
    boolean is_active
  }

  product_units {
    bigserial id PK
    bigint product_id FK
    varchar unit_name
    numeric conversion_factor
    boolean is_default
  }

  stock_ledger {
    bigserial id PK
    bigint outlet_id FK
    bigint variant_id FK
    numeric qty_on_hand
    numeric qty_reserved
    numeric qty_available
    numeric reorder_point
    timestamptz last_updated
  }

  stock_movements {
    bigserial id PK
    bigint outlet_id FK
    bigint created_by FK
    varchar ref_number UK
    varchar movement_type
    varchar status
    bigint ref_id
    varchar ref_type
    text notes
    timestamptz movement_date
    timestamptz created_at
  }

  stock_movement_items {
    bigserial id PK
    bigint movement_id FK
    bigint variant_id FK
    numeric qty_before
    numeric qty_change
    numeric qty_after
    numeric unit_cost
    varchar unit_name
    numeric conversion_factor
  }

  stock_opnames {
    bigserial id PK
    bigint outlet_id FK
    bigint created_by FK
    varchar ref_number UK
    varchar status
    timestamptz opname_date
    timestamptz submitted_at
    timestamptz approved_at
    text notes
  }

  stock_opname_items {
    bigserial id PK
    bigint opname_id FK
    bigint variant_id FK
    numeric qty_system
    numeric qty_physical
    numeric qty_difference
    numeric unit_cost
    text notes
  }

  sales {
    bigserial id PK
    bigint outlet_id FK
    bigint cashier_id FK
    varchar invoice_number UK
    varchar payment_method
    varchar status
    numeric subtotal
    numeric discount_amount
    numeric tax_amount
    numeric total_amount
    numeric amount_paid
    numeric change_amount
    timestamptz sale_date
  }

  sale_items {
    bigserial id PK
    bigint sale_id FK
    bigint variant_id FK
    varchar unit_name
    numeric qty
    numeric unit_price
    numeric discount_pct
    numeric subtotal
  }

  purchase_orders {
    bigserial id PK
    bigint outlet_id FK
    bigint supplier_id FK
    bigint created_by FK
    varchar po_number UK
    varchar status
    numeric total_amount
    timestamptz order_date
    timestamptz expected_date
    timestamptz received_date
  }

  purchase_order_items {
    bigserial id PK
    bigint po_id FK
    bigint variant_id FK
    numeric qty_ordered
    numeric qty_received
    numeric unit_cost
    numeric subtotal
  }

```

#### Diagram Master Data
```mermaid
erDiagram
  outlets {
    bigserial id PK
    varchar name
    varchar code UK
    text address
    boolean is_active
  }
  users {
    bigserial id PK
    bigint outlet_id FK
    varchar name
    varchar email UK
    user_role role
    boolean is_active
  }
  categories {
    bigserial id PK
    bigint parent_id FK
    varchar name
    varchar slug UK
    int sort_order
  }
  suppliers {
    bigserial id PK
    varchar name
    varchar code UK
    varchar phone
    boolean is_active
  }
  products {
    bigserial id PK
    bigint category_id FK
    bigint supplier_id FK
    varchar name
    varchar sku UK
    varchar barcode
    varchar unit_base
    numeric cost_price
    numeric sell_price
    boolean has_variants
    boolean is_active
  }
  product_variants {
    bigserial id PK
    bigint product_id FK
    varchar sku UK
    varchar barcode
    jsonb attributes
    numeric cost_price
    numeric sell_price
    boolean is_active
  }
  product_units {
    bigserial id PK
    bigint product_id FK
    varchar unit_name
    numeric conversion_factor
    boolean is_default
  }

  outlets ||--o{ users : "miliki"
  categories ||--o{ categories : "parent"
  categories ||--o{ products : "kelompokkan"
  suppliers ||--o{ products : "suplai"
  products ||--o{ product_variants : "punya"
  products ||--o{ product_units : "satuan"


```

#### Diagram Management Stock
```mermaid
erDiagram
  outlets {
    bigserial id PK
    varchar name
  }
  users {
    bigserial id PK
    varchar name
    user_role role
  }
  product_variants {
    bigserial id PK
    varchar sku UK
    jsonb attributes
  }
  stock_ledger {
    bigserial id PK
    bigint outlet_id FK
    bigint variant_id FK
    numeric qty_on_hand
    numeric qty_reserved
    numeric qty_available
    numeric reorder_point
    timestamptz last_updated
  }
  stock_movements {
    bigserial id PK
    bigint outlet_id FK
    bigint created_by FK
    varchar ref_number UK
    movement_type movement_type
    movement_status status
    bigint ref_id
    varchar ref_type
    timestamptz movement_date
  }
  stock_movement_items {
    bigserial id PK
    bigint movement_id FK
    bigint variant_id FK
    numeric qty_before
    numeric qty_change
    numeric qty_after
    numeric unit_cost
    varchar unit_name
    numeric conversion_factor
  }
  stock_opnames {
    bigserial id PK
    bigint outlet_id FK
    bigint created_by FK
    varchar ref_number UK
    opname_status status
    timestamptz opname_date
    timestamptz approved_at
  }
  stock_opname_items {
    bigserial id PK
    bigint opname_id FK
    bigint variant_id FK
    numeric qty_system
    numeric qty_physical
    numeric qty_difference
    numeric unit_cost
  }

  outlets ||--o{ stock_ledger : "pantau"
  outlets ||--o{ stock_movements : "catat"
  outlets ||--o{ stock_opnames : "lakukan"
  users ||--o{ stock_movements : "buat"
  users ||--o{ stock_opnames : "buat"
  product_variants ||--o{ stock_ledger : "stok"
  product_variants ||--o{ stock_movement_items : "digerakkan"
  product_variants ||--o{ stock_opname_items : "dihitung"
  stock_movements ||--o{ stock_movement_items : "detail"
  stock_opnames ||--o{ stock_opname_items : "detail"

```

#### Diagram Transaksi Penjualan
```mermaid
erDiagram
  outlets {
    bigserial id PK
    varchar name
  }
  users {
    bigserial id PK
    varchar name
    user_role role
  }
  suppliers {
    bigserial id PK
    varchar name
    varchar code UK
  }
  product_variants {
    bigserial id PK
    varchar sku UK
    jsonb attributes
    numeric sell_price
  }
  sales {
    bigserial id PK
    bigint outlet_id FK
    bigint cashier_id FK
    varchar invoice_number UK
    payment_method payment_method
    sale_status status
    numeric subtotal
    numeric discount_amount
    numeric tax_amount
    numeric total_amount
    numeric amount_paid
    numeric change_amount
    timestamptz sale_date
  }
  sale_items {
    bigserial id PK
    bigint sale_id FK
    bigint variant_id FK
    varchar unit_name
    numeric qty
    numeric unit_price
    numeric discount_pct
    numeric subtotal
  }
  purchase_orders {
    bigserial id PK
    bigint outlet_id FK
    bigint supplier_id FK
    bigint created_by FK
    varchar po_number UK
    po_status status
    numeric total_amount
    timestamptz order_date
    date expected_date
    timestamptz received_date
  }
  purchase_order_items {
    bigserial id PK
    bigint po_id FK
    bigint variant_id FK
    varchar unit_name
    numeric qty_ordered
    numeric qty_received
    numeric unit_cost
    numeric subtotal
  }

  outlets ||--o{ sales : "buat"
  outlets ||--o{ purchase_orders : "pesan"
  users ||--o{ sales : "kasir"
  users ||--o{ purchase_orders : "buat"
  suppliers ||--o{ purchase_orders : "terima"
  sales ||--o{ sale_items : "detail"
  purchase_orders ||--o{ purchase_order_items : "detail"
  product_variants ||--o{ sale_items : "dijual"
  product_variants ||--o{ purchase_order_items : "dipesan"

```
  

### 5.2 Dependensi Eksternal
*   Payment Gateway Pihak Ketiga (Xendit/Midtrans).
*   API Layanan Pelanggan Internal.

---

## 6. Pengalaman Pengguna (UX) & Desain
*   **Alur Pengguna:** [Tautan ke Diagram Alur Pengguna]
*   **Wireframes/Figma:** [Tautan ke Prototipe Desain]
*   **Prinsip Desain:** Konsisten dengan Design System Perusahaan.

---

## 7. Metrik Keberhasilan (KPI)
*   **Tingkat Adopsi:** % pengguna yang menyelesaikan onboarding dalam 7 hari.
*   **Efisiensi:** Pengurangan pemrosesan tiket manual sebesar 30%.
*   **Stabilitas:** 99,9% Uptime untuk layanan inti.

---

## 8. Roadmap & Rencana Rilis
*   **Milestone 1:** MVP Beta (Q3 2026)
*   **Milestone 2:** Rilis Penuh (Q4 2026)

---

## 9. Risiko & Asumsi
*   **Asumsi:** Tim API internal menyelesaikan layanan autentikasi pada bulan Juli.
*   **Risiko:** Potensi penundaan dalam audit keamanan pihak ketiga.