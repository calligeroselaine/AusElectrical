export interface Testimonial {
  name: string;
  location?: string;
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
  {
    name: "Danielle",
    quote:
      "I have worked with Nick from Aus Electrical for many years and across numerous renovations, and I would not call anyone else. He is reliable, professional, and consistently completes his work to an excellent standard. Nick is trustworthy, easy to deal with and never finds a job too big, too small or too challenging. I have no hesitation in recommending him for any electrical work.",
    rating: 5,
  },
  {
    name: "Palmerbet",
    quote:
      "Nick from Aus Electrical has looked after all the electrical and air con repairs and maintenance in our offices for over 10 years, and we would not call anyone else. He is friendly, reliable, and clearly knows what he's doing. His work is always completed efficiently and to an excellent standard. We would definitely recommend Nick from Aus Electrical.",
    rating: 5,
  },
  {
    name: "Adrian Palmer",
    location: "Darlinghurst",
    quote:
      "I recently completed a major renovation of my home in Darlinghurst, with Nick from Aus Electrical undertaking all the electrical, lighting, air conditioning, heating, internet and EV-charger installations. The quality of his work was outstanding. Nick was professional, reliable and trustworthy, and worked seamlessly with everyone involved in the renovation. He was also a pleasure to have on site and made the entire process easy from start to finish. I would recommend Nick without hesitation.",
    rating: 5,
  },
  {
    name: "Olivia Wood",
    quote:
      "I've been working with Nick from Aus Electrical for many years. Nick is a clear communicator, always prompt and reliable, and genuinely easy to work with. The entire team are fantastic – efficient, tidy, and they clearly take pride in the quality of their work. I wouldn't consider using anyone else for my electrical needs.",
    rating: 5,
  },
];
