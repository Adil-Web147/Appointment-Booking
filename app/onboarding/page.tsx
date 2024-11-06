"use client";
import { Button } from "@/components/ui/button";
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
import { useFormState } from "react-dom";
import { OnboardingAction  } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../lib/zodSchema";
import { SubmitButton } from "../component/submitButton";

export default function OnboardingRoute() {
  const [lastResult, action] = useFormState(OnboardingAction, undefined);
  const [from, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <form id={from.id} onSubmit={from.onSubmit} action={action} noValidate>
          <CardHeader>
            <CardTitle>
              Welcome to Cal<span className="text-primary">Marshal</span>
            </CardTitle>
            <CardDescription>
              We need the following information to set up your profile!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                placeholder="Muhammad Adil"
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
              ></Input>
              <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
            </div>
            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span
                  className="inline-flex items-center px-3 rounded-l-md border-r-0
                        border-muted bg-muted text-sm text-muted-foreground"
                >
                  MuhammadAdil.com/
                </span>
                <Input
                  placeholder="example-user-1"
                  className="rounded-l-none"
                  name={fields.userName.name}
                  defaultValue={fields.userName.initialValue}
                  key={fields.userName.key}
                />
              </div>
              <p className="text-red-500 text-sm">{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" className="w-full"/>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
console.log("hello");