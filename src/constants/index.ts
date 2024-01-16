//TODO: for animations on the hero section i need to add an array
//TODO: i need to make a seperate nav for the nav sections but it should be repeating
//FIXME: ignore the error for now
//TODO: make interfaces a type of
import {
  arrowup,
  arrowdown,
  mixmax,
  spikeball,
  buffer,
  honey,
  spindrift,
  compass,
} from "../assets"

interface NavLink {
  id: string
  title: string
}

export const navLinks: NavLink[] = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "solutions",
    title: "Solutions",
  },
  {
    id: "resources",
    title: "Resources",
  },
  {
    id: "company",
    title: "Company",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
]

interface NavCta {
  id: string
  title: string
}

export const navCallToAction: NavCta[] = [
  {
    id: "login",
    title: "Login",
  },
  {
    id: "freetrail",
    title: "Free Trial",
  },
]

interface Stats {
  id: string
  value: number
  symbol: string
  icon: string
  content: string
}

export const stats: Stats[] = [
  {
    id: "stats-1",
    value: 56,
    symbol: "%",
    icon: arrowup,
    content: "Respond to 56% more customer messages in the first year.",
  },
  {
    id: "stats-2",
    value: 30,
    symbol: "min",
    icon: arrowdown,
    content: "Decrease your team's response times by an average of 30 minutes",
  },
  {
    id: "stats-3",
    value: 92,
    symbol: "%",
    icon: arrowup,
    content:
      "Businesses report increased loyalty by focusing on customer service",
  },
  {
    id: "stats-3",
    value: 30,
    symbol: "%",
    icon: arrowdown,
    content: "Reduce email volume by 30% with self-serve support",
  },
]

interface Grid {
  id: string
  content: string
}

export const gridSection: Grid[] = [
  {
    id: "meet-the-team",
    content: "team",
  },
  {
    id: "trends",
    content: "trend",
  },
  {
    id: "courses",
    content: "course",
  },
  {
    id: "centrics",
    content: "centric",
  },
]

interface Marquee {
  id: string
  img: string
}

export const socialProof: Marquee[] = [
  {
    id: "mixmax",
    img: mixmax,
  },
  {
    id: "spikeball",
    img: spikeball,
  },
  {
    id: "buffer",
    img: buffer,
  },
  {
    id: "honey",
    img: honey,
  },
  {
    id: "spindrift",
    img: spindrift,
  },
  {
    id: "compass",
    img: compass,
  },
]

interface FooterProduct {
  id: string
  title: string
}

export const footerProduct: FooterProduct[] = [
  {
    id: "product-overview",
    title: "Product Overview",
  },
  {
    id: "shared-inbox",
    title: "Shared Inbox",
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base",
  },
  {
    id: "live-chat",
    title: "Live Chat",
  },
  {
    id: "proactive-messaging",
    title: "Proactive Messaging",
  },
  {
    id: "omnichannel-support",
    title: "Omnichannel Support",
  },
  {
    id: "automation",
    title: "Automation",
  },
]

interface FooterCompare {
  id: string
  title: string
}

export const footerCompare: FooterCompare[] = [
  {
    id: "zendesk",
    title: "Zendesk",
  },
  {
    id: "intercom",
    title: "Intercom",
  },
  {
    id: "freshdesk",
    title: "Freshdesk",
  },
  {
    id: "gorgias",
    title: "Gorgias",
  },
  {
    id: "Front",
    title: "Front",
  },
]

interface FooterCompany {
  id: string
  title: string
}

export const footerCompany: FooterCompany[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "careers",
    title: "Careers",
  },
  {
    id: "newsletter",
    title: "Newsletter",
  },
  {
    id: "terms & privacy",
    title: "Terms & Privacy",
  },
  {
    id: "accessibility",
    title: "Accessibility",
  },
  {
    id: "do-not-sell",
    title: "Do Not Sell",
  },
]

interface FooterSupport {
  id: string
  title: string
  icon?: string
  status?: string
}

export const footerSupport: FooterSupport[] = [
  {
    id: "developers",
    title: "Developers",
    icon: "&#8594;",
  },
  {
    id: "help-docs",
    title: "Help Docs",
    icon: "&#8594;",
  },
  {
    id: "contact-footer",
    title: "Contact",
  },
  {
    id: "Status",
    title: "Status",
    status: "▲ 99.99%",
    icon: "&#8594;",
  },
  {
    id: "Front",
    title: "Front",
  },
]
