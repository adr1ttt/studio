"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventBookingSchema, type EventBookingFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import type { Event } from "@/lib/types";

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
  
  const form = useForm<EventBookingFormValues>({
    resolver: zodResolver(eventBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      tickets: 1,
    },
  });

  function onSubmit(data: EventBookingFormValues) {
    console.log(data);
    toast({
      title: "Registration Successful!",
      description: `You've booked ${data.tickets} ticket(s) for ${event.name}. Check your email for confirmation.`,
    });
    // Here you would typically call an API to process the booking
    // For now, we just show a toast and close the dialog
    form.reset();
  }

  return (
    <Dialog>
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
               <DialogClose asChild>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
               </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
