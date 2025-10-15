import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100" style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        <div className="col-span-2 md:col-span-1">
          <p className="text-2xl font-semibold text-brand">Greensouq</p>
          <p className="mt-3 text-gray-500">Fresh plants and garden essentials delivered in the UAE.</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Find It Fast</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="#" className="hover:text-brand">Latest Blogs</Link></li>
            <li><Link href="#" className="hover:text-brand">FAQ’s</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-gray-900">Important Links</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="#" className="hover:text-brand">About us</Link></li>
            <li><Link href="#" className="hover:text-brand">Contact us</Link></li>
            <li><Link href="#" className="hover:text-brand">Shipping charges</Link></li>
            <li><Link href="#" className="hover:text-brand">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-gray-900">Contact Info</p>
          <ul className="mt-3 space-y-2">
            <li>Mobile: +971 58 512 1105</li>
            <li>Email: info@greensouq.ae</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-xs text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Greensouq. Powered by Shopify</p>
          <div className="space-x-3">
            <span>American Express</span>
            <span>Mastercard</span>
            <span>Visa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


