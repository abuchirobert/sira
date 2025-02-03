import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <section className="bg-primary flex flex-col gap-4 items-center text-center text-white">
      <h2 className="text-3xl">Subscribe to get updates from us</h2>
      <form className="flex ">
        <Input
          type="email"
          placeholder="Email"
          className="md:w-100 bg-white text-black rounded-e-none"
        />
        <Button
          type="submit"
          className="bg-orange-500 rounded-s-none hover:bg-orange-600"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default NewsLetter;
