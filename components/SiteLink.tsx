import NextLink from "next/link";
import type { ComponentProps } from "react";
import { approvedPages } from "@/lib/navigation";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };
/** Keep links honest while the two remaining page designs await approval. */
export function SiteLink({ href, children, ...props }: Props) {
  const contactPending = href.startsWith("/contact") && !approvedPages.contact;
  const servicePending =
    href.startsWith("/services") && !approvedPages.services;
  if (
    contactPending ||
    (servicePending && props.className?.includes("service-card"))
  ) {
    return (
      <span
        className={props.className}
        role="link"
        aria-disabled="true"
        title={
          contactPending
            ? "Contact page and contact details are not available yet."
            : "Full service details are not available yet."
        }
        data-reveal={"data-reveal" in props ? true : undefined}
      >
        {children}
      </span>
    );
  }
  return (
    <NextLink {...props} href={servicePending ? "/#services" : href}>
      {children}
    </NextLink>
  );
}
