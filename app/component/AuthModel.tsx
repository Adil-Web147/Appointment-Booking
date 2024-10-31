import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "../lib/auth";
import google from "next-auth/providers/google";
import { GitHubAuthButton, GoogleAuthButton } from "./submitButton";

export function AuthModel(){
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try For Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:mx-w-[360px]">
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <h4 className="text-3xl font-semibold">
                    Calen<span className="text-primary">Adil</span></h4>
                </DialogHeader>

                <div className="flex flex-col mt-5 gap-2">
                    <form action={async()=>{
                        "use server"
                        await signIn("google");
                    }} className="w-full">
                        <GoogleAuthButton/>
                    </form>
                    <form action={async()=>{
                        "use server"
                        await signIn("github");
                    }}>
                    <GitHubAuthButton/>
                    </form>
                    
                </div>
            </DialogContent>
        </Dialog>
    )
}