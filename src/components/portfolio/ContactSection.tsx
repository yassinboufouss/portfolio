import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { showSuccess, showError, showLoading, dismissToast } from "@/utils/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

// 1. Define the schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const toastId = showLoading("Sending message...");

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      dismissToast(toastId);
      showSuccess("Thank you for your message! I will get back to you shortly.");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      dismissToast(toastId);
      showError("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-lg text-muted-foreground mb-10">
          Have a project idea or just want to say hello? Send me a message!
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow-xl bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Project Inquiry, Collaboration, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell me about your project..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full group" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;