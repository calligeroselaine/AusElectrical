export const siteConfig = {
  businessName: "AUS Electrical & Air Service",
  shortName: "AUS Electrical",
  ownerName: "Nick Sifniotis",
  phoneDisplay: "0403 337 877",
  phoneHref: "tel:+61403337877",
  email: "auselectricalandair@gmail.com",
  abn: "98414090797",
  licenceNo: "172584 C",
  address: "929 Forest Rd, Lugarno NSW 2210",
  addressStreet: "929 Forest Rd",
  addressSuburb: "Lugarno",
  addressState: "NSW",
  addressPostcode: "2210",
  addressCountry: "AU",
  serviceAreas: [
    "Lugarno",
    "Sydney CBD",
    "Sutherland Shire",
    "St George",
    "Inner West",
    "Eastern Suburbs",
    "Northern Beaches",
    "North Shore",
    "Hills District",
    "South West Sydney",
  ],
  siteUrl: "https://www.auselectricalair.com.au",
  tagline:
    "Reliable residential and commercial electrical services delivered with honest advice, quality workmanship and exceptional customer service.",
} as const;

export type SiteConfig = typeof siteConfig;
