"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
      />
    </svg>
  );
}

function IconCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h9.4a1 1 0 0 0 .98-.804l1.2-6A1 1 0 0 0 17.6 5H6.2M7 13l-1.6-8M7 13l-2 9m12-9-2 9m-8 0h12"
      />
    </svg>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 9 6 6 6-6"
      />
    </svg>
  );
}

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
      />
    </svg>
  );
}

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21a8 8 0 1 0-16 0m8-12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </svg>
  );
}

const navItems: Array<{ label: string; href: string }> = [
  { label: "Indoor Plants", href: "/" },
  { label: "Outdoor Plants", href: "/" },
  { label: "Soil & Stones", href: "/" },
  { label: "Fertilizer & Pesticides", href: "/" },
  { label: "Pots & Planters", href: "/" },
  { label: "Seeds", href: "/" },
  { label: "Hydroponics", href: "/" },
  { label: "Garden Services", href: "/" },
  { label: "Plant Talk", href: "/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-[rgb(161,209,50)] sticky top-0 z-50">
      {/* Single main header bar */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu className="h-6 w-6 text-black" />
        </button>

        <Link href="/" className="inline-flex items-center">
          <Image
            src="/greensouq-logo.webp"
            alt="GreenSouq"
            width={160}
            height={36}
            priority
          />
        </Link>

        {/* Center search (desktop) */}
        <div className="flex-1 hidden md:flex">
          <div className="flex w-full items-stretch rounded-md overflow-hidden border border-black/20 bg-white">
            <button className="hidden sm:flex items-center gap-2 px-3 text-sm text-gray-800 bg-black/5 border-r border-black/10">
              All categories
              <IconChevronDown className="h-4 w-4" />
            </button>
            <div className="relative flex-1">
              <IconSearch className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full h-full pl-10 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            <button className="px-4 bg-black text-white flex items-center justify-center">
              <IconSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-2 text-sm text-black">
            <IconChat className="h-5 w-5" />
            <div className="leading-tight">
              <p className="font-medium">+971 58 512 1105</p>
              <p>info@greensouq.ae</p>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm text-black hover:opacity-80"
          >
            <IconUser className="h-5 w-5" />
            Login
          </Link>
          <Link href="#" className="relative">
            <IconCart className="h-6 w-6 text-black" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
      {/* Mobile search (always visible) */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 pb-3 md:hidden">
        <div className="flex w-full items-stretch rounded-md overflow-hidden border border-black/20 bg-white">
          <button className="flex items-center gap-2 px-3 text-sm text-gray-800 bg-black/5 border-r border-black/10">
            All categories
            <IconChevronDown className="h-4 w-4" />
          </button>
          <div className="relative flex-1">
            <IconSearch className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="What are you looking for?"
              className="w-full h-full pl-10 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
            />
          </div>
          <button className="px-4 bg-black text-white flex items-center justify-center">
            <IconSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-6 overflow-x-auto [&>*]:shrink-0 md:justify-start px-1 md:px-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 text-sm text-black hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile drawer: category links only */}
          {open && (
            <div className="md:hidden py-3">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-md bg-gray-50 text-gray-700 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
