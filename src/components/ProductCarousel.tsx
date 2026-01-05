"use client";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const products = [
  {
    name: "Dior Sauvage Elixir",
    price: 18.0,
    oldPrice: 24.0,
    tags: ["BESTSELLER"],
    desc: "Spicy, Wood, Lavender",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
  },
  {
    name: "YSL Y Eau de Parfum",
    price: 14.5,
    desc: "Fresh, Sage, Apple",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600",
  },
  {
    name: "Tom Ford Lost Cherry",
    price: 22.0,
    tags: ["SOLD OUT"],
    desc: "Cherry, Almond, Liqueur",
    img: "https://images.unsplash.com/photo-1523293188086-b51292955d22?w=600",
    soldOut: true,
  },
  {
    name: "Bleu de Chanel",
    price: 16.0,
    desc: "Citrus, Amber, Wood",
    img: "https://images.unsplash.com/photo-1585232561029-79a09b307eb8?w=600",
  },
];

export const ProductCarousel = () => {
  return (
    <section className="py-24 border-b-2 border-[#0A2A1F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex items-center justify-between">
        <h2 className="font-dela text-4xl md:text-5xl tracking-tighter">
          FRESH JUICE
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 border-2 border-[#0A2A1F] rounded-lg flex items-center justify-center hover:bg-[#D2E823] transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button className="w-10 h-10 border-2 border-[#0A2A1F] rounded-lg flex items-center justify-center hover:bg-[#D2E823] transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-12 no-scrollbar snap-x snap-mandatory">
        {products.map((p, i) => (
          <div
            key={i}
            className="min-w-[280px] md:min-w-[320px] snap-center group"
          >
            <div
              className={`relative bg-white border-2 border-[#0A2A1F] rounded-2xl aspect-square mb-4 overflow-hidden ${
                p.soldOut ? "grayscale opacity-50" : ""
              }`}
            >
              {p.tags && (
                <div className="absolute top-3 left-3 z-10 bg-[#D2E823] border border-[#0A2A1F] px-2 py-0.5 text-xs font-bold rounded">
                  {p.tags[0]}
                </div>
              )}
              <img
                src={p.img}
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                alt={p.name}
              />
              {!p.soldOut && (
                <button className="absolute bottom-3 right-3 bg-[#0A2A1F] text-[#D2E823] p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <Plus size={24} strokeWidth={3} />
                </button>
              )}
            </div>
            <h3 className="font-dela text-xl leading-none mb-1">{p.name}</h3>
            <p className="text-sm font-medium opacity-60 mb-3">{p.desc}</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg bg-[#D2E823]/30 px-2 rounded">
                ${p.price.toFixed(2)}
              </span>
              {p.oldPrice && (
                <span className="text-xs font-bold line-through opacity-40">
                  ${p.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
