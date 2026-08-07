export interface ServiceArea {
  slug: string;
  name: string;
  postcode: string;
  intro: string;
  localContext: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "lugarno",
    name: "Lugarno",
    postcode: "2210",
    intro:
      "Lugarno is home base for AUS Electrical & Air Service, so it's where we can usually get to you fastest.",
    localContext: [
      "Lugarno sits on a peninsula bounded by the Georges River, with a mix of waterfront homes and more modest brick houses set back from the water. The waterfront properties often have larger switchboards and higher electrical loads to manage — pools, boat sheds, outdoor lighting — while the older homes further inland are more likely to still be running on original 1960s–70s wiring that's worth having checked.",
      "Because we're based here, Lugarno jobs are usually the easiest to fit in on short notice, including genuine same-day emergency call-outs.",
    ],
  },
  {
    slug: "peakhurst",
    name: "Peakhurst",
    postcode: "2210",
    intro:
      "Peakhurst is one of our most regular service areas, just a few minutes from our Lugarno base.",
    localContext: [
      "Peakhurst is a well-established residential suburb, with a large share of homes built during the postwar boom of the 1950s and 60s. A lot of the switchboard upgrades and rewiring work we do in Peakhurst is in these older homes, where the original wiring and fuse-based switchboards are well past the point of meeting current safety standards.",
      "The suburb's mix of standalone houses and newer infill townhouses also means we regularly handle everything from straightforward power point additions to full switchboard and lighting upgrades in the same street.",
    ],
  },
  {
    slug: "hurstville",
    name: "Hurstville",
    postcode: "2220",
    intro:
      "Hurstville is the commercial and residential hub of the St George area, and a significant part of our workload.",
    localContext: [
      "As the retail and business centre of the St George region, Hurstville has a real mix of work for us — shopfront and strata electrical maintenance around the Westfield and Forest Road precinct, alongside residential jobs in the surrounding streets of federation cottages, inter-war houses, and a fast-growing number of high-density apartment buildings.",
      "Commercial clients in Hurstville often need work scheduled around trading hours, and we regularly do exactly that — early mornings, evenings, or weekends — to avoid disrupting business.",
    ],
  },
  {
    slug: "mortdale",
    name: "Mortdale",
    postcode: "2223",
    intro:
      "Mortdale is a quieter, established residential pocket we service regularly, just south of Hurstville.",
    localContext: [
      "Mortdale is predominantly established houses from the mid-20th century, many still owned by the original families or since renovated. It's a common area for us to be called out for ageing switchboards, tripping safety switches, and lighting upgrades as homes here go through renovations.",
      "The village-style shopping strip along Morts Road also brings the occasional small commercial job — cafes, hairdressers, and local retailers needing power point additions or lighting work.",
    ],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
