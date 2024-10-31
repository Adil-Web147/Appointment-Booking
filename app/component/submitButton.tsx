"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

interface iAppProps{
    text:string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    className?:string;
}

export function SubmitButton({text ,variant,className}:iAppProps){
    const {pending}=useFormStatus();
    return(
        <>
        {pending? (
            <Button disabled variant="outline" className={cn("w-fit",className)}>
                <Loader2 className="size-4 mr-2 animate-spin"/>Please Wait
            </Button>
        ):(
            <Button type="submit" variant={variant} className={cn("w-fit",className)}>{text}</Button>
        )
        }
        </>
    )
}

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image
            src="/google.svg"
            className="mr-2"
            width={20}
            height={2}
            alt="Google logo"
          />
          Sign with Google
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image
            src="/github.svg"
            className="mr-2"
            width={20}
            height={2}
            alt="GitHub logo"
          />
          Sign with GitHub
        </Button>
      )}
    </>
  );
}
