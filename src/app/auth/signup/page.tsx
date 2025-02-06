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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Signup = () => {
  const form = useForm();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [step, setStep] = useState(1);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    await new Promise((res) => setTimeout(res, 3000));
    console.log(values);
    setDialogOpen(true);
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <Card
          className="max-w-150 mx-auto border-neutral-300 animate-in fade-in duration-500"
          key={step}
        >
          <CardHeader>
            <CardTitle>
              {step === 1 ? "Create an account" : "Tell us about you"}
            </CardTitle>
            <CardDescription>
              Fill in your details to be able to submit a report{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {step === 1 ? (
                <>
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
                  <FormFieldWrapper
                    form={form}
                    input={{
                      name: "confirm_password",
                      label: "Confirm Password",
                      type: "password",
                    }}
                  />
                </>
              ) : (
                <>
                  <FormFieldWrapper
                    form={form}
                    input={{
                      name: "name",
                      label: "Name",
                      placeholder: "John Doe",
                    }}
                  />
                  <FormFieldWrapper
                    form={form}
                    input={{
                      name: "level",
                      label: "Level",
                      placeholder: "100L",
                    }}
                  />
                </>
              )}
              <Button
                className="w-full mt-6"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {step === 1 ? "Proceed" : "Sign Up"}
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
              {step !== 1 && (
                <Button
                  variant="ghost"
                  className="self-start mt-2"
                  onClick={() => setStep(step - 1)}
                >
                  Go back
                </Button>
              )}
            </form>
          </CardContent>
          <CardFooter className="font-medium flex-col gap-4 text-center">
            {step === 1 && (
              <>
                <div>
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="hover:underline text-primary"
                  >
                    Login
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
              </>
            )}
          </CardFooter>
        </Card>
      </Form>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-center">
          <DialogTitle>Verify your email</DialogTitle>
          <DialogDescription>
            We sent an email to {form.getValues("email")}. Click the link to get
            started.
          </DialogDescription>
          <DialogFooter className="sm:flex-col text-center gap-2">
            <Button asChild>
              <Link href="/auth/login">Go to login</Link>
            </Button>
            <Button variant="ghost">Resend code</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signup;
