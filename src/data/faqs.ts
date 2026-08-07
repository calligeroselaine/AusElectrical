export interface Faq {
  question: string;
  answer: string;
  /** Service slugs (from src/data/services.ts) this FAQ is relevant to. */
  relatedServices: string[];
}

export const faqs: Faq[] = [
  // Safety switches / electrical safety
  {
    question: "What is a safety switch and why does my home need one?",
    answer:
      "A safety switch (also called an RCD, or residual current device) monitors the electricity flowing through your home's circuits and cuts the power almost instantly if it detects current leaking to earth — for example through a faulty appliance or a person accidentally contacting a live wire. It's the single most effective device for preventing electric shock, and it's been mandatory on new and renovated homes in NSW for years.",
    relatedServices: ["switchboards", "residential-electrical"],
  },
  {
    question: "How many safety switches should my home have?",
    answer:
      "Ideally every circuit — lights, power points, and any air conditioning or hot water circuit — should be protected by its own safety switch. Older homes are often fitted with just one safety switch covering the whole property, which means a single fault anywhere in the house trips all your power. We can upgrade your switchboard to give each circuit its own protection.",
    relatedServices: ["switchboards"],
  },
  {
    question: "Why does my safety switch keep tripping?",
    answer:
      "A safety switch trips when it detects current leaking to earth, which usually points to a fault rather than a random glitch. Common causes include a faulty appliance, water ingress in an outdoor power point or light fitting, damaged wiring insulation, or a fault developing in the switchboard itself. If it happens repeatedly, it needs proper fault finding rather than just resetting it and hoping it doesn't happen again.",
    relatedServices: ["fault-finding", "switchboards"],
  },
  {
    question: "Is it dangerous if my safety switch trips repeatedly?",
    answer:
      "The switch itself is doing exactly what it's meant to do — protecting you. But repeated tripping means there's an underlying fault, and depending on where it is, that fault could pose a shock or fire risk if left undiagnosed. We'd recommend getting it looked at rather than continuing to reset it, especially if it's tripping at the same time each day or when a specific appliance is used.",
    relatedServices: ["fault-finding"],
  },
  {
    question: "What should I do if I lose power to part of my house?",
    answer:
      "First check your switchboard for a tripped circuit breaker or safety switch — if one has flipped to the off position, that's usually the cause. If resetting it trips it again immediately, don't keep trying; that indicates an active fault and needs a licensed electrician. If nothing at the switchboard looks tripped, the fault may be upstream in the meter or supply, which is worth a call to your energy distributor as well.",
    relatedServices: ["fault-finding", "emergency-repairs"],
  },
  {
    question: "What counts as an electrical emergency?",
    answer:
      "Exposed or sparking wiring, a burning smell from a power point or the switchboard, total loss of power, smoke from any electrical fitting, or a safety switch that won't reset and keeps tripping are all situations we'd treat as urgent. If there's an active fire risk, call 000 first — then call us.",
    relatedServices: ["emergency-repairs"],
  },
  {
    question: "Do you offer after-hours or emergency electrician call-outs?",
    answer:
      "Yes. We prioritise genuine emergencies — total power loss, exposed wiring, burning smells, or anything posing an immediate safety risk — and aim to get to you as quickly as possible outside standard business hours. Call us directly rather than booking online for anything urgent.",
    relatedServices: ["emergency-repairs"],
  },
  {
    question: "Can I do my own electrical work at home?",
    answer:
      "In NSW, almost all electrical work must legally be carried out by a licensed electrician — this includes anything involving wiring, switchboards, power points, and light fittings beyond simply changing a globe. It's not just red tape: unlicensed electrical work is a genuine fire and shock hazard, and it can also void your home insurance if something goes wrong.",
    relatedServices: ["residential-electrical"],
  },
  {
    question: "How do I know if my home's wiring is unsafe?",
    answer:
      "Warning signs include lights that flicker or dim when other appliances turn on, power points that feel warm or look discoloured, a persistent burning smell, a safety switch that trips often, or an old fuse-based switchboard rather than modern circuit breakers. Homes older than about 30–40 years that haven't been rewired are worth having assessed even without obvious symptoms.",
    relatedServices: ["fault-finding", "residential-electrical"],
  },

  // Switchboards
  {
    question: "How do I know if my switchboard needs upgrading?",
    answer:
      "The clearest sign is a switchboard with ceramic fuses instead of circuit breakers — these were standard decades ago but don't offer the same protection as modern safety-switch-protected boards. Other signs include a board that's overcrowded with add-on circuits, visible scorch marks, or a home that regularly trips its single safety switch because there's no per-circuit protection.",
    relatedServices: ["switchboards"],
  },
  {
    question: "How long does a switchboard upgrade take?",
    answer:
      "A standard residential switchboard upgrade is typically completed in a single day, including a short, scheduled power outage while the old board is disconnected and the new one wired in. We'll let you know in advance roughly how long the power will be off for.",
    relatedServices: ["switchboards"],
  },
  {
    question: "Will I lose power during a switchboard upgrade?",
    answer:
      "Yes, briefly — the supply needs to be isolated while we disconnect the old board and connect the new one. We schedule this for a specific window during the job and let you know beforehand so you can plan around it.",
    relatedServices: ["switchboards"],
  },
  {
    question: "What's the difference between a fuse and a circuit breaker?",
    answer:
      "A ceramic fuse has a wire inside that melts and breaks the circuit when it's overloaded — once it blows, it has to be physically replaced. A circuit breaker does the same job electronically and can simply be switched back on after it trips, and modern breakers respond faster and more reliably. Combined with a safety switch, circuit breakers give far better protection than an old fuse board.",
    relatedServices: ["switchboards"],
  },

  // Smoke alarms
  {
    question: "How often should smoke alarms be tested?",
    answer:
      "Smoke alarms should be tested monthly using the test button, and the batteries (in battery-powered units) changed at least once a year. Photoelectric smoke alarms themselves have a limited lifespan — generally around 10 years — after which they should be replaced entirely, even if they still seem to be working.",
    relatedServices: ["smoke-alarms"],
  },
  {
    question: "What type of smoke alarms are legally required in NSW homes?",
    answer:
      "NSW law requires interconnected photoelectric smoke alarms in all residential properties — meaning if one alarm detects smoke, they all sound. This applies to owner-occupied homes as well as rentals. Ionisation alarms and non-interconnected setups no longer meet the requirement in most circumstances, so older installations are worth checking.",
    relatedServices: ["smoke-alarms"],
  },
  {
    question: "How many smoke alarms does my house need?",
    answer:
      "As a general rule, you need a smoke alarm on every level of the home, plus one in or near every bedroom hallway, and in any area used for sleeping. The exact number depends on your home's layout — we assess this on site and make sure coverage meets current requirements rather than just the legal minimum.",
    relatedServices: ["smoke-alarms"],
  },
  {
    question: "Do landlords need to have smoke alarms professionally checked?",
    answer:
      "Rental properties in NSW have specific smoke alarm compliance obligations, and it's common practice for landlords to have alarms professionally installed, tested, and certified rather than relying on tenants to manage battery changes. We provide a compliance record after every smoke alarm job so landlords have documentation on file.",
    relatedServices: ["smoke-alarms"],
  },

  // LED lighting
  {
    question: "Why does LED lighting save money compared to older globes?",
    answer:
      "LEDs convert a much higher proportion of the electricity they use into light rather than heat, so they use significantly less power for the same brightness — typically 75–85% less than old incandescent globes and considerably less than halogens too. They also last many times longer, so you're replacing them far less often.",
    relatedServices: ["led-lighting"],
  },
  {
    question: "Can I just replace my old downlights with LEDs myself?",
    answer:
      "Simple globe swaps in an existing fitting are generally fine as a DIY job. But older halogen downlights often need the transformer or driver replaced when converting to LED, and older downlight housings can be a fire risk if they're not rated for insulation contact — so a proper LED downlight retrofit is usually more than a globe swap, and worth having done by an electrician.",
    relatedServices: ["led-lighting"],
  },
  {
    question: "Are LED downlights safe with ceiling insulation?",
    answer:
      "Modern LED downlights rated IC-4 (insulation contact) are designed to have insulation placed directly over them safely. Older halogen downlights often required insulation to be kept clear of the fitting due to heat build-up, which is one of the fire risks we check for and correct when upgrading lighting.",
    relatedServices: ["led-lighting"],
  },

  // Power points
  {
    question: "Can I add a power point anywhere in my house?",
    answer:
      "In most cases yes, but it depends on what circuit is available nearby and whether it can safely carry the extra load, particularly for high-draw appliances. Outdoor and bathroom power points also need to be weatherproof or isolated correctly to meet safety standards. We assess the existing wiring on site before quoting so there are no surprises.",
    relatedServices: ["power-points"],
  },
  {
    question: "Why do my power points feel warm to touch?",
    answer:
      "A power point that feels warm — especially with nothing plugged in, or with a light load — usually indicates a loose connection or a fault inside the point itself, both of which are fire risks. This isn't something to wait on; it's worth having checked promptly.",
    relatedServices: ["fault-finding", "power-points"],
  },
  {
    question: "How many appliances can I safely run off one power point?",
    answer:
      "It's not really about the number of plugs but the total current draw of everything connected. Piggybacking multiple power boards off a single point, especially for heat-producing appliances like heaters, is a common cause of overloaded circuits and can trip breakers or, in the worst case, cause overheating. If you're regularly running out of points, it's usually better to add more rather than daisy-chain power boards.",
    relatedServices: ["power-points"],
  },

  // Ceiling fans
  {
    question: "Can any light fitting be replaced with a ceiling fan?",
    answer:
      "Not always — ceiling fans are heavier and create ongoing vibration, so the ceiling needs an adequately rated mounting point, which older homes don't always have. We check the ceiling structure before installing and add reinforcement where needed so the fan is properly and safely secured.",
    relatedServices: ["ceiling-fans"],
  },
  {
    question: "What size ceiling fan do I need for my room?",
    answer:
      "As a rough guide, smaller rooms (under around 12m²) suit a fan with a blade span of about 900mm, medium rooms up to around 20m² suit 1200mm, and larger living areas benefit from 1400mm or bigger. Ceiling height and airflow patterns matter too, which is why we recommend getting a size assessment for the specific room rather than guessing.",
    relatedServices: ["ceiling-fans"],
  },

  // Air conditioning / split systems
  {
    question: "When should I replace my air conditioner rather than repair it?",
    answer:
      "As a general guide, if a unit is more than 10–12 years old, needs frequent repairs, uses the older R22 refrigerant (which is being phased out), or the cost of repair is a significant fraction of a new unit's price, replacement usually makes more sense. Newer systems are also considerably more energy efficient, which can offset the upfront cost over time.",
    relatedServices: ["air-conditioning"],
  },
  {
    question: "How often should a split system air conditioner be serviced?",
    answer:
      "Most manufacturers recommend a professional service at least once a year, ideally before the start of summer. Regular servicing — cleaning filters and coils, checking refrigerant levels, and inspecting electrical connections — keeps the unit running efficiently and catches small issues before they become expensive breakdowns.",
    relatedServices: ["air-conditioning"],
  },
  {
    question: "Do I need an electrician for split system installation, or just an AC installer?",
    answer:
      "Split system installation involves both refrigerant work (which needs a licensed refrigeration mechanic) and electrical work — running a dedicated circuit, fitting an isolation switch, and safely connecting the unit — which needs a licensed electrician. We handle the electrical side and coordinate with your installer for a fully compliant setup.",
    relatedServices: ["air-conditioning"],
  },
  {
    question: "Why is my split system not cooling properly?",
    answer:
      "Common causes include a dirty filter restricting airflow, low refrigerant from a slow leak, a fault with the outdoor unit's compressor or fan, or the unit simply being undersized for the room. A service visit can usually diagnose which of these it is rather than guessing.",
    relatedServices: ["air-conditioning"],
  },

  // Commercial electrical
  {
    question: "How is commercial electrical work different from residential?",
    answer:
      "Commercial properties typically have higher electrical loads, three-phase power, more complex switchboards, and stricter compliance requirements — particularly around emergency lighting, exit signage, and testing and tagging of equipment. Work also usually needs to be scheduled around trading hours to minimise disruption to the business.",
    relatedServices: ["commercial-electrical"],
  },
  {
    question: "Can you do electrical work outside business hours to avoid disrupting trade?",
    answer:
      "Yes — for commercial clients we regularly schedule fit-outs, upgrades, and maintenance for early mornings, evenings, or weekends specifically to avoid interrupting trading hours. We'll work out a schedule that suits your business when we quote the job.",
    relatedServices: ["commercial-electrical"],
  },
  {
    question: "Do you handle test and tag for commercial equipment?",
    answer:
      "Yes, we can test and tag portable electrical equipment as part of a commercial maintenance visit, helping keep your workplace compliant with electrical safety obligations. This is often bundled with a broader switchboard or emergency lighting check for efficiency.",
    relatedServices: ["commercial-electrical"],
  },

  // EV chargers
  {
    question: "Can my switchboard handle an EV charger?",
    answer:
      "It depends on your switchboard's total capacity and what else is already drawing power in the home. Older switchboards, especially single-phase boards in homes with several other high-draw appliances, sometimes need an upgrade to safely accommodate a home EV charger. We assess your existing capacity as part of the quote.",
    relatedServices: ["ev-chargers", "switchboards"],
  },
  {
    question: "How long does home EV charger installation take?",
    answer:
      "A straightforward home EV charger installation, where the switchboard already has sufficient capacity, is usually completed in half a day to a full day. If a switchboard upgrade is needed as well, we'll factor that into the overall timeline when quoting.",
    relatedServices: ["ev-chargers"],
  },

  // Data cabling
  {
    question: "Do I need a data cabling job, or is Wi-Fi enough?",
    answer:
      "Wi-Fi is convenient but can struggle with thick walls, distance from the router, or high-bandwidth uses like gaming or streaming multiple devices at once. A hardwired data point gives a faster, more reliable connection for things like home offices, smart TVs, and NBN connections, and we can often run it alongside a power point upgrade for a tidy result.",
    relatedServices: ["data-cabling"],
  },

  // Pricing / general
  {
    question: "How much does an electrician cost per hour in Sydney?",
    answer:
      "Hourly rates vary between electricians and by the type of work, so it's genuinely hard to quote an accurate figure without knowing the job. What we can promise is upfront pricing before any work starts — you'll know the cost before we begin, not find out on an invoice afterwards.",
    relatedServices: [],
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we're happy to provide a quote before any work begins. For straightforward jobs we can often give you a price over the phone; more involved work, like a switchboard upgrade or a full rewire, usually needs a quick site visit to quote accurately.",
    relatedServices: [],
  },
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "Yes — all work is carried out under our electrical licence, and we carry full insurance. We're happy to provide licence and insurance details on request, and our licence number is displayed on our website and invoices.",
    relatedServices: [],
  },
  {
    question: "Do you offer a warranty on your electrical work?",
    answer:
      "Yes, our workmanship is guaranteed, and materials and fittings we supply carry their manufacturer's warranty on top of that. If something we've installed isn't right, we'll come back and fix it.",
    relatedServices: [],
  },
  {
    question: "What areas do you service?",
    answer:
      "We're based in Lugarno and service homes and businesses across southern Sydney, including Sydney CBD, Sutherland Shire, St George, the Inner West, Eastern Suburbs, Northern Beaches, North Shore, Hills District, and South West Sydney.",
    relatedServices: [],
  },
];

export function getFaqsByServiceSlug(slug: string): Faq[] {
  return faqs.filter((faq) => faq.relatedServices.includes(slug));
}

/** FAQs not tied to a specific service — used for general/homepage FAQ blocks. */
export function getGeneralFaqs(): Faq[] {
  return faqs.filter((faq) => faq.relatedServices.length === 0);
}
