export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "George C.",
    location: "Clontarf",
    quote:
      "We've used Nick for several electrical jobs over the years and have always been impressed. His knowledge and workmanship are second to none, his pricing is fair, and he's always professional, friendly and easy to deal with. It's rare to find a tradesperson who is this reliable and genuinely committed to looking after his customers. Highly recommended.",
    rating: 5,
  },
  {
    name: "Elaine T.",
    location: "Frenchs Forest",
    quote:
      "Nick is our go-to electrician. He's knowledgeable, reliable, reasonably priced, and always does a fantastic job. He's friendly, easy to deal with, and we have complete confidence recommending him to family and friends.",
    rating: 5,
  },
];
