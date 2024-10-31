"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./submitButton";
import { useActionState, useState } from "react";
// import { useFormState } from "@conform-to/react/context";
import { SettingsAction } from "../actions";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingsSchema } from "../lib/zodSchema";
import { format } from "path";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { UploadDropzone } from "../lib/uploadthing";
import { toast } from "sonner";

interface iAppProps {
  fullName: string;
  email: string;
  profileImage: string;
}

export function SettingForm({ email, fullName, profileImage }: iAppProps) {
  const [lastResult, action] = useFormState(SettingsAction, undefined);
  const [CurrentProfileImage, setCurrentprofileImage] = useState(profileImage);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: settingsSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const HandleDeleteImage = () => {
    setCurrentprofileImage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings!</CardDescription>
      </CardHeader>

      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <CardContent className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Label>Full Name</Label>
            <Input
              name={fields.fullName.name}
              key={fields.fullName.key}
              defaultValue={fullName}
              placeholder="Muhammad Adil"
            />
            <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Email</Label>
            <Input disabled defaultValue={email} placeholder="test@test.com" />
          </div>
          <div className="grid gap-y-5">
            <Label>Profile Image</Label>
            <Input type="hidden" name={fields.profileImage.name} key={fields.profileImage.key} value={CurrentProfileImage}/>
            {CurrentProfileImage ? (
              <div className="relative size-16">
                <img
                  src={CurrentProfileImage}
                  alt="Profile Image"
                  className="size-16 rounded-lg"
                ></img>
                <Button
                  onClick={HandleDeleteImage}
                  variant="destructive"
                  size="icon"
                  type="button"
                  className="absolute -top-3 -right-3 size-6"
                >
                  <X className="size-4" />
                </Button>
              </div>
            ) : (
              <UploadDropzone onClientUploadComplete={(res)=>{
                setCurrentprofileImage(res[0].url)
                toast.success("Profile image has been uploaded");
              }}
              onUploadError={(error)=>{
                console.log("Something went wrong",error);
                toast.error(error.message);
              }}
              
              endpoint="imageUploader"/>
            )}
            <p className="text-red-500 text-sm">{fields.profileImage.errors}</p>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Save Changes" />
        </CardFooter>
      </form>
    </Card>
  );
}
