"use client";
import { FormFieldWrapper } from "@/components/form-elements";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(values);
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <Card className="max-w-150 mx-auto border-neutral-300 animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Log in to report facility issues in your department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormFieldWrapper
                form={form}
                input={{
                  name: "email",
                  label: "Email",
                  placeholder: "example@gmail.com",
                }}
              />
              <FormFieldWrapper
                form={form}
                input={{
                  name: "password",
                  label: "Password",
                  type: "password",
                }}
              />
              <Link
                href="/auth/reset-password"
                className="text-primary hover:underline block w-fit ml-auto text-sm"
              >
                Forgot password?
              </Link>
              <Button
                className="w-full mt-6"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Log In{" "}
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="font-medium flex-col gap-4 text-center">
            <div>
              Don&apos; have an account?{" "}
              <Link
                href="/auth/signup"
                className="hover:underline text-primary"
              >
                Sign up
              </Link>
            </div>
            <div className="flex self-stretch items-center gap-4">
              <hr className="grow border-neutral-300" />
              Or
              <hr className="grow border-neutral-300" />
            </div>
            <Button variant="outline">
              Continue with <img src="/images/google.svg" alt="Google" />
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
