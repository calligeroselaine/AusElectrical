import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Online booking is coming soon.",
  robots: { index: false, follow: true },
};

export default function BookingPage() {
  return (
    <ComingSoon
      title="Book Online"
      description="Online booking is on its way. For now, give us a call to lock in a time that works for you."
    />
  );
}
