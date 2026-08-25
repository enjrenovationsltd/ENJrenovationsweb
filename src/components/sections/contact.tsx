"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitQuoteRequest, type QuoteFormState } from "@/app/actions";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const initialState: QuoteFormState = { status: "idle" };

export function Contact({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const [state, formAction, pending] = useActionState(
    submitQuoteRequest,
    initialState
  );

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-walnut py-24 text-surface sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            Get in touch
          </p>
          <Heading className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get a free quote.
          </Heading>
          <p className="mt-5 max-w-md text-surface/80">
            Tell us about your project and we&apos;ll get back to you with a
            clear, honest quote.
          </p>

          <div className="mt-10 space-y-4 text-surface/85">
            <a
              href="tel:+15879849310"
              className="flex items-center gap-3 hover:text-brass"
            >
              <Phone className="size-5 text-brass" />
              (587) 984-9310
            </a>
            <a
              href="sms:+15879849310"
              className="flex items-center gap-3 hover:text-brass"
            >
              <MessageCircle className="size-5 text-brass" />
              Text Us
            </a>
            <a
              href="mailto:enjrenovationsltd@gmail.com"
              className="flex items-center gap-3 hover:text-brass"
            >
              <Mail className="size-5 text-brass" />
              enjrenovationsltd@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-brass" />
              Edmonton, Alberta
            </div>
          </div>
        </Reveal>

        <Reveal className="delay-150 rounded-lg bg-surface p-7 sm:p-9">
          {state.status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <CheckCircle2 className="size-10 text-moss" />
              <p className="text-lg font-semibold text-ink">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ink">
                    Name
                  </Label>
                  <Input id="name" name="name" required placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-ink">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(780) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-ink">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-ink">
                  Project type
                </Label>
                <Select name="service">
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                    <SelectItem value="bathroom">
                      Bathroom Renovation
                    </SelectItem>
                    <SelectItem value="full-home">
                      Full Home Renovation
                    </SelectItem>
                    <SelectItem value="flooring">
                      Flooring Installation
                    </SelectItem>
                    <SelectItem value="tile">Tile Work</SelectItem>
                    <SelectItem value="drywall">Drywall</SelectItem>
                    <SelectItem value="cabinetry">
                      Custom Cabinetry / Cabinet Repair
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-ink">
                  Project details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your project..."
                />
              </div>

              {state.status === "error" && (
                <p className="text-sm font-medium text-destructive">
                  {state.message}
                </p>
              )}

              <Button
                type="submit"
                disabled={pending}
                size="lg"
                className="w-full bg-gradient-to-b from-moss to-moss-dark text-surface shadow-md shadow-moss/25 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-moss/30"
              >
                {pending ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
