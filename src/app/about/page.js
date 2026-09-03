export const metadata = {
  title: "About Us | Aadhar Interlocks",
  description: "Learn about Aadhar Interlocks, the premier manufacturer of interlocking blocks in Malappuram.",
};

import { CheckCircle2, Factory } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">About Aadhar Interlocks</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Building the foundation of beautiful outdoors across Kerala since our inception in Areacode, Malappuram.</p>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-6">Our Manufacturing Excellence</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Aadhar Interlocks, we pride ourselves on being the leading manufacturer of high-density concrete interlocking pavers and designer patio tiles in the region. 
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Using state-of-the-art hydraulic compression technology, we ensure that every block we produce is free of air pockets, offering unmatched compressive strength (M30-M50 Grade). This makes our pavers highly resistant to heavy loads and the harsh Kerala monsoons.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-[#C2410C]" /> Zero Air Pockets Technology</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-[#C2410C]" /> Weatherproof & Anti-Skid Finish</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-[#C2410C]" /> Factory Direct Pricing</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="h-[400px] w-full rounded-2xl bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center shadow-xl"></div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-3xl p-12 text-center border border-slate-200">
            <Factory className="w-16 h-16 text-[#059669] mx-auto mb-6" />
            <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-4">Visit Our Manufacturing Unit</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              We welcome contractors and homeowners to visit our facility in Areacode, Manjeri Road, to see our production process firsthand and check the quality of our pavers before buying.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
