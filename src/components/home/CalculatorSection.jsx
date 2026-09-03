"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/utils";

export default function CalculatorSection() {
  const [area, setArea] = useState("");
  const [areaUnit, setAreaUnit] = useState("sqft");
  const [thickness, setThickness] = useState("60");
  
  const calculateEstimate = () => {
    if (!area) return 0;
    const sqft = areaUnit === "cents" ? parseFloat(area) * 435.6 : parseFloat(area);
    return Math.ceil(sqft * 3.5);
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-poppins text-4xl font-bold mb-6">Plan Your Project</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Use our quick estimator to find out exactly how many interlocking blocks you need for your driveway or courtyard.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-[#FFD100]">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Measure your Area</h4>
                  <p className="text-slate-400">Enter your total area in Square Feet or Cents.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <Card className="bg-white text-slate-900 shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50 border-b pb-6">
                <CardTitle className="text-2xl font-poppins text-center text-[#FFD100]">Tile Quantity Estimator</CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Unit</label>
                    <div className="flex rounded-md shadow-sm">
                      <button onClick={() => setAreaUnit("sqft")} className={`flex-1 py-2 text-sm font-medium border rounded-l-md ${areaUnit === "sqft" ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300'}`}>Sq Ft</button>
                      <button onClick={() => setAreaUnit("cents")} className={`flex-1 py-2 text-sm font-medium border-t border-b border-r rounded-r-md ${areaUnit === "cents" ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300'}`}>Cents</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Area</label>
                    <input 
                      type="number" 
                      value={area} 
                      onChange={(e) => setArea(e.target.value)} 
                      placeholder={areaUnit === 'cents' ? "e.g., 5" : "e.g., 1000"}
                      className="w-full border-slate-300 rounded-md shadow-sm focus:ring-[#FFD100] focus:border-[#FFD100] border p-2"
                    />
                  </div>
                </div>
                
                {area && (
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
                    <p className="text-sm text-slate-500 font-semibold mb-1 uppercase tracking-wider">Estimated Blocks Needed</p>
                    <p className="text-4xl md:text-5xl font-poppins font-bold text-slate-900">{calculateEstimate().toLocaleString()}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="bg-slate-50 border-t p-6">
                <Button 
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white h-12 text-lg font-bold"
                  onClick={() => {
                    if(!area) return;
                    const msg = `Hi Aadhar Interlocks, I need an estimate for ${area} ${areaUnit} of ${thickness}mm pavers. Estimated blocks: ${calculateEstimate()}.`;
                    window.open(getWhatsAppLink(msg), "_blank");
                  }}
                  disabled={!area}
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Send Estimate to WhatsApp
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
