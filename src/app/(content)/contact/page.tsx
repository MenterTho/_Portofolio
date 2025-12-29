"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Send, Github, Phone } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useToast } from "@/src/hook/use_toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Message sent",
      description: "Thanks for reaching out! I will get back to you soon.",
    });

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-secondary/30 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Get In <span className="text-primary text-glow">Touch</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or wanna collaborate? Feel free to reach out!
          Im always open to discussing new ideas or opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail />}
                title="Email"
                value="tuantho.work@gmail.com"
                href="mailto:tuantho.work@gmail.com"
              />

              <ContactItem
                icon={<Phone />}
                title="Phone"
                value="(+84) 837 164 112"
                href="tel:+84837164112"
              />

              <ContactItem
                icon={<MapPin />}
                title="Location"
                value="Dang Thuy Tram, Binh Thanh, Ho Chi Minh City, Vietnam"
              />
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://www.linkedin.com/in/tuantho"
                  icon={<Linkedin />}
                />
                <SocialLink
                  href="https://github.com/MenterTho"
                  icon={<Github />}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-card p-8 rounded-xl shadow-md border"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send Me A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Name" name="name" placeholder="Tuan Tho..." />
              <Input
                label="Your Email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
              <Textarea
                label="Your Message"
                name="message"
                placeholder="Talking something..."
              />

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {href ? (
          <a
            href={href}
            className="text-muted-foreground hover:text-primary transition"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3 rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        {...props}
        rows={4}
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
