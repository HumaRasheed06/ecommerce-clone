import Image from "next/image";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: "Areca Palm",
    price: 179,
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f2360af5e0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "An elegant indoor palm that thrives in bright, indirect light. Great for homes and offices.",
    options: {
      size: ["Small", "Medium", "Large"],
      pot: ["No pot", "Ceramic White", "Matte Black"],
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="text-sm text-gray-600">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" unoptimized />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.map((src) => (
              <div key={src} className="relative aspect-square rounded-md overflow-hidden">
                <Image src={src} alt={product.name} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-xl text-brand">AED {product.price}</p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-gray-900">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.options.size.map((s) => (
                  <button key={s} className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:border-brand">
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Pot</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.options.pot.map((p) => (
                  <button key={p} className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:border-brand">
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="bg-black text-white px-5 py-3 rounded-md text-sm">Add to cart</button>
            <button className="border border-gray-300 px-5 py-3 rounded-md text-sm">Buy now</button>
          </div>

          <div className="mt-8 prose prose-sm max-w-none">
            <p>{product.description}</p>
          </div>

          {/* USP */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg border border-gray-100 p-3">
              Same-day delivery in Dubai
            </div>
            <div className="rounded-lg border border-gray-100 p-3">7-day freshness guarantee</div>
            <div className="rounded-lg border border-gray-100 p-3">Free care guide included</div>
          </div>
        </div>
      </div>
    </div>
  );
}


