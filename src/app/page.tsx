import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

interface Category {
  id: string;
  title: string;
  image?: string;
  href?: string;
  isSale?: boolean;
  badge?: string;
}

const categories: Category[] = [
  {
    id: "plant-bundles",
    title: "Plant Bundles",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/plant-bundles",
  },
  {
    id: "fruit-plants",
    title: "Fruit Plants",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/fruit-plants",
  },
  {
    id: "clearance-sale",
    title: "Clearance sale",
    image:
      "https://images.unsplash.com/photo-1593482892266-1249e5e47d5e?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/clearance",
    isSale: true,
    badge: "Sale",
  },
  {
    id: "olive-trees",
    title: "Olive Trees",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/olive-trees",
  },
  {
    id: "boxed-greenery",
    title: "Boxed Greenery",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/boxed-greenery",
  },
  {
    id: "grp-pots",
    title: "GRP Pots",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/grp-pots",
  },
  {
    id: "herbs-vegetables",
    title: "Herbs and Vegetables",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/herbs-vegetables",
  },
  {
    id: "outdoor-plants",
    title: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/outdoor-plants",
  },
];

const productSections = [
  {
    title: "Top Categories this Week",
    type: "categories" as const,
    backgroundColor: "bg-white",
    showButton: false,
  },
  {
    title: "Top Selling Indoor Plants",
    type: "products" as const,
    backgroundColor: "bg-gray-50",
    showButton: true,
    productStart: 0,
  },
  {
    title: "Top Selling Outdoor Plants",
    type: "products" as const,
    backgroundColor: "bg-white",
    showButton: true,
    productStart: 5,
  },
  {
    title: "New Arrivals",
    type: "products" as const,
    backgroundColor: "bg-gray-50",
    showButton: true,
    productStart: 10,
  },
  {
    title: "Gardening Accessories",
    type: "products" as const,
    backgroundColor: "bg-white",
    showButton: true,
    productStart: 2,
  },
  {
    title: "Top Selling Pots & Planters",
    type: "products" as const,
    backgroundColor: "bg-gray-50",
    showButton: true,
    productStart: 7,
  },
  {
    title: "Best Selling Soil & Fertilisers",
    type: "products" as const,
    backgroundColor: "bg-white",
    showButton: true,
    productStart: 12,
  },
];

interface ProductCardProps {
  product: (typeof products)[0];
}

function ProductCard({ product }: ProductCardProps) {
  // Show sale badge for certain products
  const showSaleBadge = ["1", "3", "4", "5"].includes(product.id);
  const originalPrice = showSaleBadge ? product.price * 1.3 : product.price;
  
  return (
    <div className="group relative bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
      <Link href={`/products/aeschynanthus-mona-lisa`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {/* Sale Badge */}
          {showSaleBadge && (
            <div className="absolute bottom-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </div>
          )}
        </div>
        <div className="p-3">
          <p className="text-sm font-medium text-gray-900 mb-1 leading-tight">{product.name}</p>
          <div className="flex items-center gap-2">
            {showSaleBadge && (
              <span className="text-sm text-gray-500 line-through">
                Dhs. {originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-sm font-medium text-gray-900">
              Dhs. {product.price}.00
            </span>
          </div>
        </div>
      </Link>
      
      {/* Hover Buttons */}
      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2">
          <button className="flex-1 bg-white text-black border border-black text-xs font-medium py-2 px-3 rounded hover:bg-gray-50 transition-colors">
            Quick shop
          </button>
          <button className="flex-1 bg-black text-white text-xs font-medium py-2 px-3 rounded hover:bg-gray-800 transition-colors">
            Choose options
          </button>
        </div>
      </div>
    </div>
  );
}

interface CircularCategoryCardProps {
  category: Category;
  index: number;
}

function CircularCategoryCard({ category, index }: CircularCategoryCardProps) {
  return (
    <Link
      href={category.href || "#"}
      className="group flex flex-col items-center space-y-2 sm:space-y-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2 rounded-lg p-1 sm:p-2"
      aria-label={`Browse ${category.title} category`}
    >
      <div className="relative">
        <div
          className="
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-70 2xl:h-70
            rounded-full overflow-hidden 
            bg-gray-100 border-2 border-gray-200
            shadow-md hover:shadow-lg transition-all duration-300
            hover:scale-105 focus:scale-105
          "
        >
          {category.image ? (
            <Image
              src={category.image}
              alt={`${category.title} category image`}
              fill
              className="object-cover rounded-full transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, (max-width: 1536px) 160px, 192px"
              loading={index < 4 ? "eager" : "lazy"}
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-[10px] sm:text-xs font-medium text-center px-1">
                {category.title}
              </span>
            </div>
          )}
        </div>

        {/* Sale Badge */}
        {category.isSale && category.badge && (
          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-md">
            {category.badge}
          </div>
        )}
      </div>

      <p className="text-center text-[11px] sm:text-xs md:text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 leading-tight px-1">
        {category.title}
      </p>
    </Link>
  );
}

interface CircularCategoryGridProps {
  categories: Category[];
  className?: string;
}

function CircularCategoryGrid({
  categories,
  className = "",
}: CircularCategoryGridProps) {
  return (
    <div
      className={`grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 ${className}`}
    >
      {categories.map((category, index) => (
        <CircularCategoryCard
          key={category.id}
          category={category}
          index={index}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="relative aspect-[10/4] md:aspect-[12/4] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop"
              alt="Hero Banner"
              fill
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {productSections.map((section, index) => (
        <section key={index} className={section.backgroundColor}>
          <div className="mx-auto max-w-7xl px-4 py-10">
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">
              {section.title}
            </h2>

            {section.type === "categories" ? (
              <CircularCategoryGrid categories={categories} />
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {products.slice(section.productStart || 0, (section.productStart || 0) + 5).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {section.showButton && (
                  <div className="mt-6 text-center">
                    <Link
                      href="#"
                      className="inline-block bg-black text-white px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity"
                    >
                      Shop collection
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      {/* Newsletter */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-2">Newsletter</h3>
          <p className="text-black mb-6">
            Invite customers to join your mailing list.
          </p>
          <form className="flex justify-center gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-black rounded-l-md px-3 py-2 focus:outline-none"
            />
            <button className="bg-black text-white px-5 py-2 rounded-r-md hover:opacity-90 transition-opacity">
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
