import { z } from "zod";

export const eventBookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  tickets: z.coerce.number().min(1, { message: "Please select at least 1 ticket." }).max(10, { message: "You can book a maximum of 10 tickets." }),
});

export type EventBookingFormValues = z.infer<typeof eventBookingSchema>;


export const membershipSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }).max(15),
});

export type MembershipFormValues = z.infer<typeof membershipSchema>;


export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
