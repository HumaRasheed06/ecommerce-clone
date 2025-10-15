"use client";

import Image from "next/image";
import Link from "next/link";

type Params = { params: { handle: string } };

const MONA_LISA = {
  handle: "aeschynanthus-mona-lisa",
  title: "Aeschynanthus or Mona Lisa",
  sale: true,
  originalPrice: 125,
  currentPrice: 125,
  images: [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
  ],
  blurb:
    "Aeschynanthus Mona Lisa, Nothing brightens up a room like a beautiful flowering plant. The lipstick vine has pointy, waxy leaves and blooms with bright clusters of flowers.",
  returns:
    "Free returns on all eligible orders. You have 7 days to request a return. All sale items are final sale.",
};

export default function ProductHandlePage({ params }: Params) {
  const isMonaLisa = params.handle === MONA_LISA.handle;
  const product = isMonaLisa
    ? MONA_LISA
    : {
        handle: params.handle,
        title: "Product",
        sale: false,
        originalPrice: 0,
        currentPrice: 0,
        images: [
          "https://images.unsplash.com/photo-1543363136-841d2e4d8f93?q=80&w=1600&auto=format&fit=crop",
        ],
        blurb: "",
        returns: "",
      };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.title}</span>
      </nav>

      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.map((src) => (
              <div
                key={src}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={src}
                  alt={product.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>
            {product.sale && (
              <span className="ml-2 inline-flex items-center rounded bg-red-600 px-2 py-0.5 text-xs font-medium text-white">
                Sale
              </span>
            )}
          </div>

          <div className="mt-2 flex items-baseline gap-3">
            <p className="text-xl text-brand">
              Dhs. {product.currentPrice.toFixed(2)}
            </p>
            {product.sale && (
              <p className="text-sm text-gray-500 line-through">
                Dhs. {product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            {product.blurb}
          </p>

          {/* Quantity + CTA */}
          <div className="mt-6 flex items-center gap-3">
            <QuantityPicker />
            <button className="bg-black text-white px-5 py-3 rounded-md text-sm">
              Add to cart
            </button>
          </div>

          {/* Returns/Notes */}
          <div className="mt-6 rounded-lg border border-gray-100 p-4 text-sm text-gray-700">
            {product.returns}
          </div>

          {/* Description */}
          <div className="mt-8 prose prose-sm max-w-none">
            <h2>Aeschynanthus Mona Lisa</h2>
            <p>
              Aeschynanthus lipstick vine has pointy, waxy leaves and blooms
              with bright clusters of flowers. Growing lipstick plants is not
              difficult, and with proper care you get rewarded with continuous
              flowers.
            </p>
            <p>
              <strong>Deliverable</strong>
            </p>
            <ul>
              <li>Healthy plant in its pot with premium soil</li>
              <li>Safe arrival guaranteed</li>
            </ul>
          </div>

          {/* Recently viewed */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">
              You recently viewed
            </h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...product.images].slice(0, 4).map((src, idx) => (
                <Link
                  key={src + idx}
                  href={`/products/${product.handle}`}
                  className="block bg-white rounded-lg p-2 border border-gray-100"
                >
                  <div className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={src}
                      alt={product.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="mt-2 line-clamp-1 text-xs text-gray-700">
                    {product.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuantityPicker() {
  const [qty, setQty] = useState(1);
  return (
    <div className="inline-flex items-center rounded-md border border-gray-300">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="px-3 py-2 text-sm"
        onClick={() => setQty((n) => Math.max(1, n - 1))}
      >
        −
      </button>
      <span className="px-4 py-2 text-sm min-w-[2ch] text-center">{qty}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="px-3 py-2 text-sm"
        onClick={() => setQty((n) => n + 1)}
      >
        +
      </button>
    </div>
  );
}

import { useState } from "react";
