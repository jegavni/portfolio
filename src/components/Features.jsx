import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const items = [
    { title: "Fast", desc: "Optimized performance and speed." },
    { title: "Responsive", desc: "Works on all screen sizes." },
    { title: "Intuitive", desc: "Clean and simple UI/UX." },
    { title: "Dynamic", desc: "Modern interactive apps." },
  ];

  return (
    <section className="bg-[#070513] text-white pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.title} className="bg-zinc-900 border-zinc-800 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-emerald-500/20"></div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}