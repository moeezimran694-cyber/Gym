export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weights' | 'cardio' | 'group' | 'personal' | 'equipment' | 'members';
  image: string;
  caption: string;
  aspect: 'wide' | 'tall' | 'square';
}

export const MUSCLE_EMPIRE_LOCATION = {
  name: "Muscle Empire GYM",
  tagline: "BUILD STRENGTH. BUILD CONFIDENCE.",
  logoUrl: "/muscle_empire_logo.jpg",
  address: "Lahore - Sheikhupura - Faisalabad Road, Mana Wala, Manawala, Pakistan",
  shortAddress: "Mana Wala, Manawala",
  phone: "0307 3855404",
  phoneRaw: "03073855404",
  phoneTel: "tel:03073855404",
  whatsapp: "923073855404",
  googleRating: "4.3★",
  googleReviewsCount: "9+",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3!2d73.6!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQyJzAwLjAiTiA3M8KwMzYnMDAuMCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Muscle+Empire+GYM+Manawala+Pakistan",
};

export const GYM_VALUES = [
  "STRENGTH",
  "DISCIPLINE",
  "FITNESS",
  "PERFORMANCE",
  "COMMUNITY"
];

export const GYM_STATS = [
  { label: "Google Rating", value: "4.3★", sub: "Verified Reviews" },
  { label: "Reviews", value: "9+", sub: "Satisfied Athletes" },
  { label: "Environment", value: "FITNESS", sub: "High-Performance Gear" },
  { label: "Classes Available", value: "ONLINE", sub: "Remote & On-Site" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "aerobics",
    title: "AEROBICS",
    shortDesc: "High-energy cardio aerobic sessions engineered to burn calories, boost stamina and improve heart health.",
    fullDesc: "Dynamic group aerobic workouts led by motivating instructors. Combines rhythmic cardio routines with bodyweight movement for cardiovascular endurance.",
    category: "Group Fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Calorie burning & stamina", "Cardiovascular health", "Rhythmic endurance", "Energetic group dynamic"]
  },
  {
    id: "cycling",
    title: "CYCLING",
    shortDesc: "Intense indoor spin cycling classes designed to sculpt legs, build lower-body power and push endurance limits.",
    fullDesc: "Stationary spin bike workouts featuring interval climbs, speed sprints and rhythm riding. Guided by certified coaches to maximize lower-body output.",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Low-impact joint training", "Leg power & quad activation", "HIIT stamina building", "Heart rate zone training"]
  },
  {
    id: "kickboxing",
    title: "KICKBOXING",
    shortDesc: "Combative conditioning combining martial arts punching combinations with heavy bag drills and explosive core power.",
    fullDesc: "Unleash strength and agility with full-body kickboxing drills. Practice heavy bag strikes, footwork agility, pad work and core stability.",
    category: "Combat Fitness",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Stress relief & focus", "Core stability & agility", "Caloric expenditure", "Self-defense fundamentals"]
  },
  {
    id: "nutrition-consulting",
    title: "NUTRITION CONSULTING",
    shortDesc: "Personalized diet guidance and macronutrient planning tailored to fuel workouts, accelerate fat loss and build lean muscle.",
    fullDesc: "Empower your physical transformation with tailored nutritional guidance. Get macronutrient calculations, meal timing strategies and sustainable habit coaching.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Custom macro breakdown", "Sustainable nutrition habits", "Performance fueling", "Fat loss & muscle gain support"]
  },
  {
    id: "personal-training",
    title: "PERSONAL TRAINING",
    shortDesc: "Dedicated 1-on-1 coaching with expert personal trainers focused on technique, progressive overload and accountability.",
    fullDesc: "Accelerate your athletic progress with custom structured training plans, direct form oversight, and continuous performance tracking from Muscle Empire GYM trainers.",
    category: "1-on-1 Mentorship",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Tailored workout programs", "Strict form supervision", "Faster goal realization", "Accountability & motivation"]
  },
  {
    id: "youth-classes",
    title: "YOUTH CLASSES",
    shortDesc: "Foundational physical fitness, movement mechanics and discipline designed for young athletes and teenagers.",
    fullDesc: "Specialized youth training programs instilling athletic agility, healthy motor habits, core strength and discipline in a safe and supportive environment.",
    category: "Youth Athletic",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Safe athletic development", "Posture & coordination", "Confidence & discipline", "Teamwork & social growth"]
  },
  {
    id: "zumba",
    title: "ZUMBA",
    shortDesc: "Vibrant dance fitness party combining Latin rhythms with full-body movement for an enjoyable, high-calorie workout.",
    fullDesc: "Join our uplifting Zumba sessions where music meets fitness. Dance to upbeat rhythms while getting a comprehensive cardio workout.",
    category: "Dance Fitness",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Mood boosting & fun", "Full-body coordination", "High energy calorie burn", "Community atmosphere"]
  }
];

export const WHY_US_FEATURES = [
  {
    id: "feature-pt",
    title: "PERSONAL TRAINING",
    desc: "Focused guidance and training support."
  },
  {
    id: "feature-group",
    title: "GROUP FITNESS",
    desc: "Energetic fitness classes and community training."
  },
  {
    id: "feature-all",
    title: "FITNESS FOR ALL",
    desc: "Different training options for different goals."
  },
  {
    id: "feature-online",
    title: "ONLINE CLASSES",
    desc: "Fitness support beyond the physical gym."
  }
];

export const OPENING_HOURS = [
  { day: "MONDAY", hours: "6:00 AM – 11:30 PM", status: "Open" },
  { day: "TUESDAY", hours: "6:00 AM – 11:30 PM", status: "Open" },
  { day: "WEDNESDAY", hours: "6:00 AM – 11:30 PM", status: "Open" },
  { day: "THURSDAY", hours: "6:00 AM – 11:30 PM", status: "Open" },
  { day: "FRIDAY", hours: "Contact gym for today's hours", status: "Special" },
  { day: "SATURDAY", hours: "6:00 AM – 11:30 PM", status: "Open" },
  { day: "SUNDAY", hours: "6:00 AM – 11:30 PM", status: "Open" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Heavy Weight Training Arena",
    category: "weights",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    caption: "Heavy resistance floor with Olympic barbells, power racks, and precision plates.",
    aspect: "wide"
  },
  {
    id: "g2",
    title: "Dumbbell & Free Weights",
    category: "weights",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    caption: "Extensive dumbbell rack for precision isolation and strength progression.",
    aspect: "tall"
  },
  {
    id: "g3",
    title: "Commercial Cardio Deck",
    category: "cardio",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop",
    caption: "High-end treadmills, spin bikes, and cardio machines for endurance conditioning.",
    aspect: "square"
  },
  {
    id: "g4",
    title: "1-on-1 Personal Training",
    category: "personal",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    caption: "Dedicated personal training support for structured goals and technique mastery.",
    aspect: "square"
  },
  {
    id: "g5",
    title: "Group Fitness Studio",
    category: "group",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    caption: "Spacious studio for Aerobics, Zumba, Kickboxing and Youth training.",
    aspect: "wide"
  },
  {
    id: "g6",
    title: "Athletes Training in Action",
    category: "members",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    caption: "Community of dedicated fitness enthusiasts pushing through heavy reps.",
    aspect: "tall"
  }
];
