export interface TrainingProgram {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  benefits: string[];
  equipment: string[];
  suitableFor: string;
  image: string;
  schedule: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facilities' | 'weights' | 'cardio' | 'female_zone' | 'atmosphere';
  image: string;
  caption: string;
  aspect: 'square' | 'wide' | 'tall';
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  tag: string;
  date: string;
}

export interface TimingSlot {
  gender: 'MALE' | 'FEMALE';
  title: string;
  badge: string;
  timeRange: string;
  secondRange?: string;
  description: string;
  features: string[];
  icon: string;
}

export const SMARTGYM_LOCATION = {
  name: "SMARTGYM Faisalabad",
  address: "1st Floor, Bank Alfalah, Chak 208 Road, opposite to Main Gate of Model City 1, Faisalabad, Pakistan.",
  phone: "0333 9946801",
  phoneRaw: "03339946801",
  phoneTel: "tel:03339946801",
  whatsapp: "923339946801",
  instagram: "@smartgym.official",
  instagramUrl: "https://www.instagram.com/smartgym.official/",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.852109!2d73.1328!3d31.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzQwLjgiTiA3M8KwMDgnfC4wIkU!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  directionsUrl: "https://maps.google.com/?q=Smart+Gym+Bank+Alfalah+Chak+208+Road+Model+City+1+Faisalabad"
};

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    shortDesc: "Build raw force and muscular density using Olympic barbells, heavy dumbbells, and power platforms.",
    fullDesc: "Our strength zone features heavy-duty power racks, deadlift platforms, competition barbells, and calibrated weight plates. Designed for powerlifters, athletes, and anyone committed to progressive overload.",
    category: "Power & Strength",
    benefits: [
      "Maximal strength development",
      "Bone density & joint stability",
      "Improved neuromuscular coordination",
      "Enhanced athletic endurance"
    ],
    equipment: ["Eleiko Bars", "Heavy Duty Power Racks", "Chalk Station", "Rubber Bumper Plates"],
    suitableFor: "All levels from beginners learning form to advanced lifters.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    schedule: "Daily Access • Male & Female Timings"
  },
  {
    id: "weight-training",
    title: "Weight Training",
    shortDesc: "Targeted resistance machinery and isolation stations engineered for optimal muscle activation.",
    fullDesc: "Precision plate-loaded and cable machines designed to isolate specific muscle groups safely and effectively. Ideal for hypertrophy, body sculpting, and targeted muscle development.",
    category: "Hypertrophy",
    benefits: [
      "Targeted muscle hypertrophy",
      "Safe mechanical isolation",
      "Consistent tension curves",
      "Reduced risk of joint strain"
    ],
    equipment: ["Dual-Cable Crossover", "Plate-Loaded Leg Press", "Lat Pulldown Towers", "Preacher Curl Benches"],
    suitableFor: "Hypertrophy enthusiasts and bodybuilders.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    schedule: "Daily Access"
  },
  {
    id: "fitness-conditioning",
    title: "Fitness & Conditioning",
    shortDesc: "High-energy endurance conditioning zones with commercial treadmills, assault bikes, and rowers.",
    fullDesc: "Elevate your cardiovascular stamina, burn fat, and increase lung capacity in our dedicated conditioning zone equipped with climate-controlled airflow and modern metric monitoring.",
    category: "Endurance",
    benefits: [
      "Accelerated cardiovascular fitness",
      "Effective fat loss & calorie burn",
      "Increased daily energy stamina",
      "Heart rate zone optimization"
    ],
    equipment: ["Commercial Treadmills", "Concept2 Rowers", "Assault AirBikes", "Stair Climbers"],
    suitableFor: "Weight loss, endurance goals, and heart health.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop",
    schedule: "Daily Access"
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    shortDesc: "Structured hypertrophy protocols combining resistance splits with nutritional muscle growth strategies.",
    fullDesc: "Comprehensive muscle building approach combining optimal training frequency, periodized weight progression, and trainer-led form checks to maximize natural hypertrophy.",
    category: "Bodybuilding",
    benefits: [
      "Symmetrical physique sculpting",
      "Metabolic boost & lean muscle retention",
      "Structured workout split progression",
      "Form correction & injury prevention"
    ],
    equipment: ["Incline & Flat Benches", "Dumbbell Rack 2kg-50kg", "Smith Machines", "Hack Squat"],
    suitableFor: "Anyone looking to gain lean muscle mass efficiently.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    schedule: "Daily Access"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    shortDesc: "Direct 1-on-1 mentorship with certified SMARTGYM coaches for tailored accountability and results.",
    fullDesc: "Get custom workout programming, weekly body composition tracking, customized diet guidance, and step-by-step form oversight from Faisalabad’s top certified personal trainers.",
    category: "Mentorship",
    benefits: [
      "Customized training program",
      "100% focused form supervision",
      "Accelerated goal achievement",
      "Nutritional guidance & habit coaching"
    ],
    equipment: ["Private Coaching Studio", "InBody Composition Scanner", "Custom Mobility Gear"],
    suitableFor: "Beginners, goal-driven individuals, and rehabilitation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    schedule: "Flexible Appointment Slots"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    shortDesc: "Dynamic movement turf for battle ropes, kettlebells, plyometrics, and athletic agility drills.",
    fullDesc: "Train for real-life athleticism, core power, and functional mobility on our dedicated artificial turf floor featuring plyo boxes, slam balls, resistance bands, and suspension trainers.",
    category: "Athletic Performance",
    benefits: [
      "Improved posture & core agility",
      "Enhanced functional balance & speed",
      "Full-body metabolic conditioning",
      "Joint mobility & flexibility"
    ],
    equipment: ["Turf Sled Track", "Cast Iron Kettlebells", "Battle Ropes", "Plyo Boxes"],
    suitableFor: "Athletes and functional movement seekers.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    schedule: "Daily Access"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Main Strength Arena",
    category: "facilities",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    caption: "Spacious pure white atmosphere engineered for focus and heavy training.",
    aspect: "wide"
  },
  {
    id: "g2",
    title: "Precision Dumbbell Rack",
    category: "weights",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    caption: "Calibrated dumbbells ranging from 2kg to 50kg in pristine condition.",
    aspect: "tall"
  },
  {
    id: "g3",
    title: "Female Dedicated Floor",
    category: "female_zone",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    caption: "Private, comfortable & fully equipped environment exclusively for women during 10:00 AM - 04:30 PM.",
    aspect: "square"
  },
  {
    id: "g4",
    title: "Cardio & Conditioning Zone",
    category: "cardio",
    image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop",
    caption: "High-end commercial cardio machines with personal telemetry monitors.",
    aspect: "square"
  },
  {
    id: "g5",
    title: "Power Racks & Squat Platforms",
    category: "weights",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
    caption: "Heavy-duty steel squat platforms with safety bars and deadlift jacks.",
    aspect: "tall"
  },
  {
    id: "g6",
    title: "Motivational Atmosphere",
    category: "atmosphere",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    caption: "Clean lighting, spacious layout, and high-energy community.",
    aspect: "wide"
  }
];

export const TIMING_SLOTS: TimingSlot[] = [
  {
    gender: "MALE",
    title: "Male Timings",
    badge: "Morning & Evening Slots",
    timeRange: "05:00 AM — 10:00 AM",
    secondRange: "04:30 PM — 11:30 PM",
    description: "Full access to all strength zones, heavy free weight area, cardio equipment, and male personal trainers.",
    features: [
      "Early Morning 5:00 AM kickoff for busy professionals",
      "Late Evening slots till 11:30 PM",
      "Certified male fitness trainers on floor",
      "Full locker room & shower facilities"
    ],
    icon: "Dumbbell"
  },
  {
    gender: "FEMALE",
    title: "Female Separate Time",
    badge: "100% Dedicated & Private",
    timeRange: "10:00 AM — 04:30 PM",
    description: "Complete floor privacy with 100% female staff and female personal trainers. Ideal for comfortable, unhindered workouts.",
    features: [
      "100% Female staff & certified female trainers",
      "Exclusive floor privacy — zero male entry",
      "Full access to cardio, strength & functional gear",
      "Air-conditioned luxury environment"
    ],
    icon: "ShieldCheck"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "insta-1",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    caption: "Mornings at SMARTGYM Faisalabad hit different. Pure focus, zero distractions. 🔥 #SMARTGYM #FaisalabadFitness #TrainHard",
    likes: "1,248",
    comments: "84",
    tag: "@smartgym.official",
    date: "2 DAYS AGO"
  },
  {
    id: "insta-2",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    caption: "Dedicated female timings every day from 10:00 AM to 4:30 PM! Safe, private, and fully equipped space for our female athletes. 💪✨",
    likes: "2,105",
    comments: "142",
    tag: "@smartgym.official",
    date: "4 DAYS AGO"
  },
  {
    id: "insta-3",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    caption: "Form over weight, consistency over intensity. Our personal trainers are here to guide your technique every step of the way. 🏋️‍♂️",
    likes: "982",
    comments: "56",
    tag: "@smartgym.official",
    date: "1 WEEK AGO"
  },
  {
    id: "insta-4",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    caption: "Transformations happen when discipline meets top-tier equipment. Visit us opposite Model City 1, Faisalabad! 📍",
    likes: "1,630",
    comments: "99",
    tag: "@smartgym.official",
    date: "1 WEEK AGO"
  }
];

export const SMARTGYM_STATS = [
  { value: "800+", label: "Active Community Members" },
  { value: "DAILY", label: "Expert Coaching & Training" },
  { value: "MODERN", label: "Imported Strength Gear" },
  { value: "SEPARATE", label: "Female Timings (10AM - 4:30PM)" }
];

export const FAQ_ITEMS = [
  {
    q: "Where is SMARTGYM located in Faisalabad?",
    a: "SMARTGYM is located on the 1st Floor, Bank Alfalah Building, Chak 208 Road, directly opposite to the Main Gate of Model City 1, Faisalabad, Pakistan."
  },
  {
    q: "What are the dedicated timings for female members?",
    a: "Female members enjoy exclusive floor privacy every day from 10:00 AM to 04:30 PM with 100% female trainers and female staff."
  },
  {
    q: "Do you provide personal trainers?",
    a: "Yes! We offer 1-on-1 personal training with certified male and female coaches who specialize in fat loss, muscle building, powerlifting, and contest preparation."
  },
  {
    q: "Can I get a free trial pass before joining?",
    a: "Absolutely! You can request a 1-day complimentary workout pass by filling out the online form or contacting us on WhatsApp."
  }
];
