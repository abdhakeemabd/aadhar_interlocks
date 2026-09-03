import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">Trusted by homeowners and contractors across Kerala.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "The heavy-duty blocks for our commercial driveway are incredibly strong. Highly recommend Aadhar!", name: "Mohammed Shafi", title: "Contractor, Kozhikode" },
            { text: "Beautiful terracotta pavers transformed our home's courtyard. They withstand the heavy monsoon perfectly.", name: "Amina K.", title: "Homeowner, Manjeri" },
            { text: "Factory direct pricing saved us a lot on our landscaping project. Top quality materials.", name: "Rahul V.", title: "Builder, Malappuram" },
          ].map((test, idx) => (
            <Card key={idx} className="bg-white border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-[#FFD100] mb-4">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="italic text-slate-700 mb-6">"{test.text}"</p>
                <div>
                  <h4 className="font-bold font-poppins text-slate-900">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
