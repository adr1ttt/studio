"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticHover } from "@/components/ui/magnetic-hover";

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
      <div className="mb-12">
        <h3 className="font-headline text-4xl font-bold tracking-tight text-white mb-4">Send a Message</h3>
        <p className="text-foreground/70 text-xl font-medium">Prefer writing? Drop us a secure line below.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-foreground/90 font-medium">Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
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
                <FormLabel className="text-lg text-foreground/90 font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-foreground/90 font-medium">Subject</FormLabel>
                <FormControl>
                  <Input placeholder="What is this regarding?" {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-foreground/90 font-medium">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message here..." 
                    {...field} 
                    className="min-h-[180px] resize-y bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl pt-5 transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MagneticHover strength={15} className="pt-6">
             <Button type="submit" className="w-full h-16 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-xl border-none hover:scale-[1.02]">
               Send Message
             </Button>
          </MagneticHover>
        </form>
      </Form>
    </div>
  );
}
