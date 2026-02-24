import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    Label: "Email",
    Value: "acunakylebenedict@gmail.com",
    clickable: false,
  },
  {
    icon: Phone,
    Label: "Mobile Number",
    Value: "0966 599 2791",
    clickable: false,
  },
  {
    icon: MapPin,
    Label: "Location",
    Value: "Pagsanjan Laguna",
    clickable: false,
  },
  {
    icon: Facebook,
    Label: "Facebook",
    Value: "Kyle",
    href: "https://www.facebook.com/share/17u19Ugqiv/?mibextid=wwXIfr",
    clickable: true,
  },
  {
    icon: Linkedin,
    Label: "LinkedIn",
    Value: "Kyle Benedict S. Acuña",
    href: "http://linkedin.com/in/kyle-benedict-acuña-872038342",
    clickable: true,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Lets build{" "}
            <span className="font-serif italic font-normal text-white">
              Something Great.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Feel free to reach out through the Contact Me button above.
          </p>
        </div>

      </div>
    </section>
  );
};