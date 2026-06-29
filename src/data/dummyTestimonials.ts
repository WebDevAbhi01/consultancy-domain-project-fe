import type { Testimonial } from "../types/testimonial.types"

export const dummyTestimonials: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Rajesh Kumar",
    companyName: "Kumar Plastics Pvt Ltd",
    role: "Managing Director",
    quote:
      "They secured our subsidy sanction in under four months and have kept every phase on track for the last two years. We always know exactly where our case stands.",
    avatarUrl: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Anita Desai",
    companyName: "Desai Precision Components",
    role: "Finance Head",
    quote:
      "The bank proposal they built for our machinery loan was approved on the first attempt. Genuinely saved us months of back and forth.",
    avatarUrl: "https://i.pravatar.cc/100?img=47",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "Mohammed Farooq",
    companyName: "Farooq Textiles",
    role: "Owner",
    quote:
      "What I value most is that they stay in touch even years after the case is filed. Most consultants disappear after the first cheque.",
    avatarUrl: "https://i.pravatar.cc/100?img=33",
    rating: 4,
  },
]