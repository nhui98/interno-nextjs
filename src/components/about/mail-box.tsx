"use client";

import { FormEvent } from "react";
import Container from "../container";
import Button from "../button";
import { ArrowRightIcon } from "../icons/arrow";

export default function MailBox() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="mt-52">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-serif text-6xl">
          Creative project? Let&apos;s have a productive talk.
        </h2>
        <form onSubmit={onSubmit} className="mx-auto mt-[77px] max-w-3xl">
          <div className="flex gap-x-10">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-[#000] py-4 outline-none"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[#000] py-4 outline-none"
              />
            </div>
          </div>

          <div className="mt-[57px]">
            <textarea
              rows={10}
              placeholder="Hello I am interested in..."
              className="w-full resize-none border-b border-[#000] outline-none"
            />
          </div>

          <div className="mt-[77px] flex justify-center">
            <Button.Primary
              buttonText="Send Now"
              icon={
                <ArrowRightIcon className="h-6 w-6 fill-brown" type="submit" />
              }
            />
          </div>
        </form>
      </Container>
    </section>
  );
}
