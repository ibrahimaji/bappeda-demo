/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "OPD",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "renstra",
    header: "Renstra"
  },
  {
    accessorKey: "renja",
    header: "Renja"
  },
  {
    accessorKey: "baforumopd",
    header: "BA Forum OPD"
  }
];

const data: Payment[] = [
  {
    name: "Dishub",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Perkim",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Binamarga",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Dinas Pertanian",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Dinas Koperasi",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Dinas Pariwisata",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "PU SDA",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "DLH",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "BPBD",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Disperindag",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Dinas Peternakan",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Kominfo",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "Dinas Perikanan",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "BKPSDM",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  },
  {
    name: "BPKPD",
    renstra: "Sudah",
    renja: "Belum",
    baforumopd: "Sudah"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Kelengkapan Dokumen Perencanaan" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
