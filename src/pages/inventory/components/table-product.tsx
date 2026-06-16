import {} from "@tanstack/react-query"
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, type ColumnDef } from  "@tanstack/react-table"
import { useMemo, useState } from "react"
import type { Product } from "../store/product";
import useProductStore from "../store/product"


export default function ProductTable() {
    const columns = useMemo<ColumnDef<Product>[]>(() => [
        {
            id: "id",
            cell: (cell) => cell.row.original.id
        },
        {
            id: "name",
            cell: (cell) => cell.row.original.name
        },
        {
            id: "price",
            cell: (cell) => cell.row.original.name,
        }
    ], []);

    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });
    const search = useProductStore((s) => s.search)

    console.log(search)


    const table = useReactTable({
        columns,
        data: [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination, 
        state: {
            pagination,
        },

    });



    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                            )}
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}
