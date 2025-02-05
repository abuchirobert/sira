"use client";
import React, { useState } from "react";
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type Mode = "forgot" | "verify" | "reset" | "success";

const Page = () => {
  const [mode, setMode] = useState<Mode>("forgot");

  return (
    <>
      {mode === "forgot" && <ForgotPassword setMode={setMode} />}
      {mode === "verify" && <VerifyOTP setMode={setMode} />}
      {mode === "reset" && <ResetPassword setMode={setMode} />}
      {mode === "success" && (
        <>
          <Card className="max-w-150 m-auto border-none shadow-none animate-in fade-in duration-500">
            <CardHeader className="text-center">
              <CardTitle>Password changed</CardTitle>
              <CardDescription>
                Your password has been changed succesfully
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/auth/login">Back to Login</Link>
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
    </>
  );
};

const ForgotPassword: React.FC<{
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}> = ({ setMode }) => {
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(values);
    setMode("verify");
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <Card className="max-w-150 mx-auto border-neutral-300 animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle>Forgot password?</CardTitle>
            <CardDescription>
              Please enter the email associated with your account
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
              <Button
                className="w-full mt-6"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Send OTP{" "}
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

const VerifyOTP: React.FC<{
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}> = ({ setMode }) => {
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(values);

    setMode("reset");
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <Card className="max-w-150 mx-auto border-neutral-300 animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle>Please check your email</CardTitle>
            <CardDescription>
              We have sent a code to your email address. Enter the code below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormFieldWrapper
                form={form}
                input={{ name: "otp" }}
                Control={({ field }) => (
                  <InputOTP
                    maxLength={6}
                    containerClassName="justify-center"
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />

              <Button
                className="w-full mt-6"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Verify OTP
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

const ResetPassword: React.FC<{
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}> = ({ setMode }) => {
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(values);

    setMode("success");
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <Card className="max-w-150 mx-auto border-neutral-300 animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle>Reset password</CardTitle>
            <CardDescription>
              Enter new password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormFieldWrapper
                form={form}
                input={{
                  name: "password",
                  label: "New Password",
                }}
              />
              <FormFieldWrapper
                form={form}
                input={{
                  name: "confirm_password",
                  label: "Confirm New Password",
                }}
              />
              <Button
                className="w-full mt-6"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Reset password
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

export default Page;
