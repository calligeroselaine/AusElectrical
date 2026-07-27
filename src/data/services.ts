export type ServiceIcon =
  | "Home"
  | "Building2"
  | "PanelsTopLeft"
  | "Lightbulb"
  | "Plug"
  | "Siren"
  | "Search"
  | "Zap"
  | "Fan"
  | "Snowflake"
  | "BatteryCharging"
  | "Cable";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ServiceIcon;
  heroImage: string;
}

export const services: Service[] = [
  {
    slug: "residential-electrical",
    title: "Residential Electrical",
    shortDescription:
      "Complete electrical services for homes, from small repairs to full rewires.",
    longDescription:
      "Our residential electrical team handles everything from a single faulty outlet to a full home rewire. We work cleanly, explain every job in plain language, and make sure your home meets current Australian wiring standards. Every visit is backed by upfront pricing and a licensed electrician who treats your home with respect.",
    icon: "Home",
    heroImage: "/images/services/residential-electrical.jpg",
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    shortDescription:
      "Reliable electrical maintenance and fit-outs for offices, retail and warehouses.",
    longDescription:
      "We keep businesses running with minimal disruption, scheduling electrical fit-outs, upgrades and maintenance around your trading hours. From single-tenancy shopfronts to multi-level offices, our team understands compliance requirements and delivers work that passes inspection the first time.",
    icon: "Building2",
    heroImage: "/images/services/commercial-electrical.jpg",
  },
  {
    slug: "switchboards",
    title: "Switchboards",
    shortDescription:
      "Switchboard upgrades and safety switch installations to modern standards.",
    longDescription:
      "An outdated switchboard is one of the most common fire and shock hazards in older homes. We upgrade ceramic fuse boards to modern safety-switch-protected switchboards, sized correctly for your home's current and future electrical load, and handle all compliance paperwork on your behalf.",
    icon: "PanelsTopLeft",
    heroImage: "/images/services/switchboards.jpg",
  },
  {
    slug: "led-lighting",
    title: "LED Lighting",
    shortDescription:
      "Energy-efficient LED upgrades and custom lighting design.",
    longDescription:
      "We design and install LED lighting solutions that cut your energy bill without cutting brightness or ambience. Whether it's downlights throughout the home, feature lighting for outdoor entertaining, or a full commercial retrofit, we match fittings to the space and handle the installation end to end.",
    icon: "Lightbulb",
    heroImage: "/images/services/led-lighting.jpg",
  },
  {
    slug: "power-points",
    title: "Power Points",
    shortDescription:
      "Additional power point installation for kitchens, offices and outdoor areas.",
    longDescription:
      "Never fight over a double adaptor again. We install additional power points wherever you need them, including weatherproof outdoor points, USB-integrated points for charging devices, and dedicated circuits for high-draw appliances in kitchens and home offices.",
    icon: "Plug",
    heroImage: "/images/services/power-points.jpg",
  },
  {
    slug: "smoke-alarms",
    title: "Smoke Alarms",
    shortDescription:
      "Compliant smoke alarm installation, testing and replacement.",
    longDescription:
      "Smoke alarm laws changed across NSW and we make sure your property is compliant. We install and interconnect photoelectric smoke alarms to current legislation, replace expired units, and provide a compliance certificate so landlords and homeowners have peace of mind.",
    icon: "Siren",
    heroImage: "/images/services/smoke-alarms.jpg",
  },
  {
    slug: "fault-finding",
    title: "Fault Finding",
    shortDescription:
      "Diagnosis and repair of tripping circuits, flickering lights and power loss.",
    longDescription:
      "Intermittent faults are frustrating and can be dangerous if left unresolved. Using proper diagnostic equipment, we track down the root cause of tripping circuits, flickering lights or dead power points quickly, rather than guessing and replacing parts until something works.",
    icon: "Search",
    heroImage: "/images/services/fault-finding.jpg",
  },
  {
    slug: "emergency-repairs",
    title: "Emergency Repairs",
    shortDescription:
      "Fast response for urgent electrical faults, including after-hours callouts.",
    longDescription:
      "Electrical emergencies don't wait for business hours. We offer priority response for total power loss, exposed wiring, burning smells and other urgent hazards, arriving with fully stocked vehicles so most emergency repairs are resolved in a single visit.",
    icon: "Zap",
    heroImage: "/images/services/emergency-repairs.jpg",
  },
  {
    slug: "ceiling-fans",
    title: "Ceiling Fans",
    shortDescription: "Supply and installation of ceiling fans for any room.",
    longDescription:
      "We install ceiling fans safely and securely, including reinforcing ceiling mounts where needed, wiring in wall controls or remotes, and advising on the right fan size and airflow for each room so you get real cooling benefit, not just noise.",
    icon: "Fan",
    heroImage: "/images/services/ceiling-fans.jpg",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    shortDescription:
      "Split-system air conditioning installation and electrical connection.",
    longDescription:
      "From a single split system in a bedroom to multi-head systems across a whole home, we handle the electrical side of air conditioning installation, including dedicated circuits, isolation switches and coordination with your installer for a fully compliant setup.",
    icon: "Snowflake",
    heroImage: "/images/services/air-conditioning.jpg",
  },
  {
    slug: "ev-chargers",
    title: "EV Chargers",
    shortDescription:
      "Home and workplace EV charger installation, sized to your vehicle and switchboard.",
    longDescription:
      "As EV ownership grows across Sydney, we install home and workplace charging points that are correctly sized to your switchboard's capacity, future-proofed for faster charging speeds where possible, and positioned for everyday convenience.",
    icon: "BatteryCharging",
    heroImage: "/images/services/ev-chargers.jpg",
  },
  {
    slug: "data-cabling",
    title: "Data Cabling",
    shortDescription:
      "Structured data and network cabling for homes and offices.",
    longDescription:
      "Reliable internet starts with good cabling. We run structured data cabling for home networks, offices and NBN connections, terminate and test every point, and can integrate data outlets alongside your power point upgrades for a tidy, professional finish.",
    icon: "Cable",
    heroImage: "/images/services/data-cabling.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}
