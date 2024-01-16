/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total OPD",
    amount: "53",
    discription: "di wilayah Kabupaten Pasuruan",
    icon: DollarSign,
  },
  {
    label: "Total OPD",
    amount: "53",
    discription: "di wilayah Kabupaten Pasuruan",
    icon: DollarSign,
  },
  {
    label: "Total OPD",
    amount: "53",
    discription: "di wilayah Kabupaten Pasuruan",
    icon: DollarSign,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Capaian Kinerja</p>

          <BarChart />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">
            Timeline Penyusunan Dokumen Perencanaan
          </p>
          <ul>
            <li>Januari : Ranwal Renja</li>
            <li>Februari : Forum OPD</li>
            <li>Maret : Rankhir Renja</li>
          </ul>
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
