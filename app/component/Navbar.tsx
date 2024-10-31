import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AuthModel } from "./AuthModel";


export function Navbar() {
   return (
      <div className="flex py-5 items-center justify-between">
         <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h4 className="text-3xl font-semibold">Calen<span className="text-blue-500">Adil</span></h4>
         </Link>
         <AuthModel/>
      </div>
   );
}
