"use client";
import { SiteLink as Link } from "@/components/SiteLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { navigation } from "@/lib/navigation";
export function Brand() {
  return (
    <span className="brand brand-logo"><img src="/images/luxegrid-logo.png" alt="LuxeGrid Construction & Marketing" width="240" height="80" /></span>
  );
}
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null),
    panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 25);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link
          href="/"
          aria-label="LuxeGrid home"
          className="brand-link"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([name, url]) => (
            <Link
              className={
                (pathname.replace(/\/$/, "") || "/") ===
                (url.replace(/\/$/, "") || "/")
                  ? "active"
                  : ""
              }
              href={url}
              key={name}
              aria-current={
                (pathname.replace(/\/$/, "") || "/") ===
                (url.replace(/\/$/, "") || "/")
                  ? "page"
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/contact/">
          Get in Touch <Icon name="northeast" />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-nav" ref={panel} className="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map(([name, url], i) => (
            <Link href={url} key={name} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {name}
              <Icon name="northeast" />
            </Link>
          ))}
        </nav>
        <p>
          Real estate. Construction. Marketing.
          <br />
          Rooted in Islamabad.
        </p>
      </div>
    </header>
  );
}
