"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { membershipSchema, type MembershipFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/actions/auth";

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
import { MagneticHover } from "@/components/ui/magnetic-hover";

interface MembershipFormProps {
  selectedTier: {
    name: string;
    price: string;
    period: string;
  };
}

export function MembershipForm({ selectedTier }: MembershipFormProps) {
  const { toast } = useToast();
  
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: MembershipFormValues) {
    const isAuth = await getSession();
    if (!isAuth) {
      router.push("/login?callbackUrl=/membership");
      return;
    }

    toast({
      title: "Subscription successful!",
      description: "Welcome to the family! We've sent a confirmation to your email.",
    });
    form.reset();
  }

  return (
    <div className="p-8 md:p-12 lg:p-16">
      <div className="mb-12">
        <h3 className="font-headline text-4xl font-bold tracking-tight text-white mb-4">Join the Penya</h3>
        <p className="text-foreground/70 text-xl font-medium">Fill in your details to become a premium member.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-foreground/90 font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
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
                  <Input placeholder="your.email@example.com" {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-foreground/90 font-medium">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 ..." {...field} className="h-16 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary backdrop-blur-sm text-lg rounded-xl transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MagneticHover strength={15} className="pt-6">
             <Button type="submit" className="w-full h-16 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-xl border-none hover:scale-[1.02]">
               Subscribe for {selectedTier.price}{selectedTier.period} ({selectedTier.name})
             </Button>
          </MagneticHover>
        </form>
      </Form>
      <div className="mt-10 text-center">
         <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            By clicking "Subscribe", you agree to our 
            <Link href="#" className="underline hover:text-white ml-2 transition-colors">Terms of Service</Link> 
            <br className="mt-1"/>and will be redirected to our secure payment gateway.
          </p>
      </div>
    </div>
  );
}
