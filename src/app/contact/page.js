export const metadata = {
  title: "Contact Us | Aadhar Interlocks",
  description: "Get in touch with Aadhar Interlocks in Areacode, Malappuram for estimates and inquiries.",
};

import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-12 md:py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">We are here to help you plan your next paving project.</p>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-2xl font-poppins font-bold text-slate-900 mb-6">Get In Touch</h3>
                <p className="text-slate-600 mb-8">Whether you need a quick estimate or have questions about our manufacturing process, our team is ready to assist.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C2410C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Our Location</h3>
                    <p className="text-slate-600 mt-1">Areacode - Manjeri Road,<br/>Malappuram District, Kerala 673639</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Phone className="text-[#C2410C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600 mt-1">+91 00000 00000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Clock className="text-[#C2410C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Working Hours</h3>
                    <p className="text-slate-600 mt-1">Mon - Sat: 9:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                <h3 className="text-2xl font-poppins font-bold text-slate-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Your Name</label>
                      <input type="text" className="w-full border-slate-300 rounded-md shadow-sm border p-3 focus:ring-[#C2410C] focus:border-[#C2410C]" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input type="tel" className="w-full border-slate-300 rounded-md shadow-sm border p-3 focus:ring-[#C2410C] focus:border-[#C2410C]" placeholder="+91" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Product of Interest</label>
                    <select className="w-full border-slate-300 rounded-md shadow-sm border p-3 focus:ring-[#C2410C] focus:border-[#C2410C]">
                      <option>Unipave (Zig-Zag)</option>
                      <option>Hexagonal Pavers</option>
                      <option>I-Shape Blocks</option>
                      <option>Designer Tiles</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea rows={4} className="w-full border-slate-300 rounded-md shadow-sm border p-3 focus:ring-[#C2410C] focus:border-[#C2410C]" placeholder="Tell us about your project area and requirements..."></textarea>
                  </div>
                  <Button type="button" className="w-full bg-[#C2410C] hover:bg-[#9a330a] text-white h-12 text-lg font-bold">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-96 w-full bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5422894563875!2d76.04289841480415!3d11.221151691993437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba645d94711dbf5%3A0xb35384f936eebc82!2sAreacode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709214431234!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}
