import { Button } from "@/components/ui/button";
import { Ban, PlusCircle } from "lucide-react";
import Link from "next/link";

interface iAppProps {
    title:string;
    descriptrion:string;
    buttonText:string;
    href:string;
}


export function EmptyState({buttonText,descriptrion,href,title}:iAppProps) {
  return (
    <div
      className="flex flex-col flex-1 h-full items-center justify-center
        rounded-md border border-dashed p-8 text-center animate-in fade-in-50"
    >
       <div className="flex items-center justify-center size-20 rounded-full bg-primary/10 ">
       <Ban className="size-10 text-primary"/>
       </div>
       <h1 className="mt-6 text-xl font-semibold">{title}</h1>
       <p className="mb-8 mt-2 text-sm text-muted-foreground max-w-xs  mx-auto">{descriptrion}</p>
       <Button asChild>
        <Link href={href}>
        <PlusCircle className="mr-2 size-4"/>
        {buttonText}
        </Link>
       </Button>
    </div>
  );
}