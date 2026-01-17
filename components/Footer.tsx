"use client";
import { Camera, Instagram, Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#001429] text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Camera className="h-8 w-8" />
              <span className="font-display text-2xl font-bold">
                ZAZZMATAZ STUDIO
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Eaststreet Galleria Shop No. 7 , Bassment eaststreet Camp 41101
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/signature"
                  className="hover:text-white transition-colors"
                >
                  Signature Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Fashion Photography</li>
              <li>Event Coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={16} /> <span>+91 9832424210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> <span>zazzmatazphotostudio@gmail.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href="hhttps://www.instagram.com/zazzmataz_studio?igsh=MWN1OTlsYTY0Ymk3bg=="
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/17oy6Hwt8N/"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Capture Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
