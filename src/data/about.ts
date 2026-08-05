export interface CredibilityMarker {
  icon: "Award" | "ShieldCheck" | "MapPin";
  label: string;
}

export const about = {
  eyebrow: "Meet The Owner",
  heading: "Hi, I'm Nick",
  bio: [
    "I've spent my career working on homes and businesses across Sydney, and I still get the same satisfaction from a job done properly that I did on day one. Every switchboard, every power point, every fault — it gets the same level of care, whether it's a two-minute fix or a full rewire.",
    "Reliability matters to me. If I say I'll be there at 9am, I'll be there at 9am. If a job's going to take longer or cost more than I first thought, you'll hear it from me before I start, not after — no surprises on the invoice.",
    "I treat every property like it's my own home. That means tidy work, honest advice about what actually needs doing, and workmanship I'm happy to put my name to.",
  ],
  // TODO: replace with Nick's real years of experience before launch
  credibilityMarkers: [
    { icon: "Award", label: "10+ Years Experience" },
    { icon: "ShieldCheck", label: "Licensed & Insured" },
    { icon: "MapPin", label: "Sydney Owned & Operated" },
  ] satisfies CredibilityMarker[],
  // TODO: replace with Nick's real years of experience before launch
  statValue: "10+",
  statLabel: "Years Experience",
};
