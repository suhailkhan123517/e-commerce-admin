"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storedId}`,
    },
    {
      href: `/${params.storedId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storedId}/billboards`,
    },
    {
      href: `/${params.storedId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storedId}/categories`,
    },
    {
      href: `/${params.storedId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storedId}/sizes`,
    },
    {
      href: `/${params.storedId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storedId}/colors`,
    },
    {
      href: `/${params.storedId}/products`,
      label: "Products",
      active: pathname === `/${params.storedId}/products`,
    },
    {
      href: `/${params.storedId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storedId}/orders`,
    },
    {
      href: `/${params.storedId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storedId}/settings`,
    },
  ];

  return (
    <>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        {...props}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
