"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventBookingSchema, type EventBookingFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import type { Event } from "@/lib/types";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/actions/auth";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EventBookingFormProps {
  event: Event;
  children: React.ReactNode;
}

export function EventBookingForm({ event, children }: EventBookingFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<EventBookingFormValues>({
    resolver: zodResolver(eventBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      tickets: 1,
    },
  });

  async function handleOpenChange(open: boolean) {
    if (open) {
      const isAuth = await getSession();
      if (!isAuth) {
        router.push('/login?callbackUrl=/events');
        return;
      }
    }
    setIsOpen(open);
  }

  function onSubmit(data: EventBookingFormValues) {
    console.log(data);
    toast({
      title: "Registration Successful!",
      description: `You've booked ${data.tickets} ticket(s) for ${event.name}. Check your email for confirmation.`,
    });
    setIsOpen(false);
    form.reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Register for {event.name}</DialogTitle>
          <DialogDescription>
            Complete the form below to secure your spot.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tickets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Tickets</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" max="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
                <Button type="submit" className="w-full">Book Now</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
