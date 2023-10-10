/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import IndeterminateCheckbox from "./IndeterminateCheckbox/indeterminateCheckbox.component";
import Tag from "./Tag/tag.component";
import Infor from "./Infor/infor.component";
import Selection from "./Selection/selection.component";
import Pagination from "./Pagination/pagination.component";
import TableProps from "./table.interface";
import Trash from "./Trash/trash.component";
import selectedNFTsStore from "@/stores/selectNFTs.store";
import { NFTType } from "@/types/types";
import PriceCols from "./Price/priceCols.component";

function TableComponent(props: TableProps) {
  const [rowSelection, setRowSelection] = useState({});
  const { value, checkbox, remove, onValueChange } = props;

  const selectedNFTs = useSyncExternalStore(
    selectedNFTsStore.subscribe,
    selectedNFTsStore.getSnapshot,
    () => new Map()
  );

  useEffect(() => {
    let _rowSelected = {};
    value.forEach((item, index) => {
      if (selectedNFTs.has(item.id)) {
        (_rowSelected as any)[index] = true;
      }
    });
    setRowSelection(_rowSelected);
  }, [selectedNFTs]);

  const columns = useMemo<ColumnDef<NFTType>[]>(
    () => [
      {
        id: "Name",
        header: ({ table }) => {
          return (
            <div className='w-full flex flex-row items-center justify-start gap-3'>
              {checkbox && (
                <IndeterminateCheckbox
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              )}
              <span className='table-header'>Name</span>
            </div>
          );
        },
        cell: ({ row }: any) => {
          const { title, image, description } = row.original;
          return (
            <div className='flex flex-row items-center gap-3'>
              {checkbox && (
                <IndeterminateCheckbox
                  {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                    value: row.original,
                  }}
                />
              )}
              <Infor image={image} title={title} description={description} />
            </div>
          );
        },
      },
      {
        id: "Tag",
        header: () => {
          return <span className='table-header'>Tag</span>;
        },
        cell: ({ row }: any) => {
          const { status, badge } = row.original;
          return <Tag status={status} badge={badge} />;
        },
      },
      {
        id: "price",
        header: () => {
          return <span className='table-header'>Price</span>;
        },
        cell: ({ row }: any) => {
          const { price, priceStart, priceEnd, id } = row.original;
          return (
            <div className='flex flex-row items-center justify-between'>
              <PriceCols
                price={price}
                priceStart={priceStart}
                priceEnd={priceEnd}
              />
              {remove && <Trash id={id} />}
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: value,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className='w-full rounded-lg border border-light-300'>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {value.length !== 0 && (
        <Pagination
          prevOnClick={table.previousPage}
          prevDisable={!table.getCanPreviousPage()}
          nextClick={() => table.nextPage()}
          nextDisable={!table.getCanNextPage()}
          pageIndex={table.getState().pagination.pageIndex + 1}
          totalPage={table.getPageCount()}
          table={table}
        />
      )}

      {value.length === 0 ? <Selection /> : null}
    </div>
  );
}

export default TableComponent;
