export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  externalUrl: string;
  category: string;
  readTime: string;
  date: string;
  source: string;
  author?: string;
}

/** Twelve assets in /public: blog1.jpg … blog12.jpg */
export const BLOG_CARD_IMAGE_COUNT = 12;

/** Stable index in `blogPosts` (0-based) → cycles through `/blog1.jpg` … `/blog12.jpg`. */
export function getBlogCardImageSrc(stableIndex: number): string {
  const n =
    ((stableIndex % BLOG_CARD_IMAGE_COUNT) + BLOG_CARD_IMAGE_COUNT) %
    BLOG_CARD_IMAGE_COUNT;
  return `/blog${n + 1}.jpg`;
}

export const blogPosts: BlogPost[] = [
  // Biomarkers & Testing
  {
    id: "omega-3-index",
    title: "Omega-3 Index: The Most Ignored Marker in Heart Health",
    excerpt: "Low Omega-3 Index independently predicts sudden cardiac death better than LDL. Learn why 90% of Indians fall below optimal levels and how to correct it.",
    externalUrl: "https://www.numberanalytics.com/blog/omega-3-cardiovascular-health",
    category: "Biomarkers & Testing",
    readTime: "7 min read",
    date: "2026-03-15",
    source: "Number Analytics",
    author: "Medical Research Team"
  },
  {
    id: "homocysteine-vascular",
    title: "High Homocysteine: The Silent Vascular Killer",
    excerpt: "Elevated homocysteine shreds endothelium and doubles stroke risk. Discover how B vitamins and methylation can correct 70% of cases swiftly.",
    externalUrl: "https://www.numberanalytics.com/blog/homocysteine-vascular-health-cardiovascular-disease",
    category: "Biomarkers & Testing",
    readTime: "6 min read",
    date: "2026-03-14",
    source: "Number Analytics",
    author: "Biostarks Research"
  },
  {
    id: "apob-vs-ldl",
    title: "ApoB: The Real Enemy of Your Arteries (And Why LDL Isn't Enough)",
    excerpt: "ApoB counts atherogenic particles directly and predicts heart disease better than LDL cholesterol. Learn why one-third of heart attacks occur in people with normal LDL.",
    externalUrl: "https://www.superage.app/en/blog/apob-cardiovascular-risk-arterial-health",
    category: "Biomarkers & Testing",
    readTime: "8 min read",
    date: "2026-03-12",
    source: "Superage App",
    author: "Dr. Marcel Kuijsten"
  },
  {
    id: "advanced-biomarkers-detection",
    title: "HOMA-IR: Detecting Insulin Resistance in Its Earliest Stage",
    excerpt: "HOMA-IR can detect insulin resistance years before glucose or HbA1c show abnormalities. Discover optimal ranges and how to interpret your results.",
    externalUrl: "https://dnacare.nl/en/en/blog/homa-ir-your-earliest-indicator-of-insulin-resistance/",
    category: "Biomarkers & Testing",
    readTime: "6 min read",
    date: "2026-03-10",
    source: "DNA Care",
    author: "DNA Care Team"
  },
  {
    id: "heart-biomarkers-2026",
    title: "The Best Biomarkers for Heart Health",
    excerpt: "ApoB, Lp(a), hs-CRP, HbA1c, blood pressure, and eGFR - the six most accurate biomarkers for predicting heart disease in 2026.",
    externalUrl: "https://empirical.health/blog/best-biomarkers-heart-disease/",
    category: "Biomarkers & Testing",
    readTime: "9 min read",
    date: "2026-03-08",
    source: "Empirical Health",
    author: "Empirical Health Team"
  },

  // Heart & Vascular
  {
    id: "diabetes-vascular-damage",
    title: "Diabetes: The Vascular Disease Hiding as a Sugar Issue",
    excerpt: "Diabetes isn't just about sugar—it's glycation and oxidative vessel sabotage leading to 4x heart/stroke risk. Learn how to protect your vascular health beyond glucose control.",
    externalUrl: "https://www.eurekaselect.com/article/82491",
    category: "Heart & Vascular",
    readTime: "8 min read",
    date: "2026-03-11",
    source: "Eureka Select",
    author: "Dr. Research Team"
  },
  {
    id: "lp-a-genetic-risk",
    title: "Lipoprotein(a): The Genetic Cardiovascular Risk You Can't Ignore",
    excerpt: "One in five people have elevated Lp(a) without knowing it. Unlike LDL, Lp(a) is genetically determined and resistant to standard treatments.",
    externalUrl: "https://www.amgen.com/stories/2026/03/the-genetic-puzzle-of-heart-disease-inside-amgens-commitment-to-lpa",
    category: "Heart & Vascular",
    readTime: "7 min read",
    date: "2026-03-09",
    source: "Amgen",
    author: "Amgen Research"
  },
  {
    id: "hrv-autonomic-health",
    title: "Heart Rate Variability: A Window into Autonomic Health",
    excerpt: "Higher HRV indicates a flexible nervous system capable of handling stress. Learn how to measure and improve your HRV for better health outcomes.",
    externalUrl: "https://www.numberanalytics.com/blog/heart-rate-variability-autonomic-health",
    category: "Heart & Vascular",
    readTime: "7 min read",
    date: "2026-03-07",
    source: "Number Analytics",
    author: "Number Analytics Team"
  },

  // Metabolic Health
  {
    id: "chronic-fatigue-metabolic",
    title: "Why You're Tired All the Time—Even After Sleep",
    excerpt: "Chronic fatigue isn't laziness—it's metabolic signals like cortisol dysregulation, insulin resistance, and mitochondrial strain. Advanced panels reveal 80% of root causes.",
    externalUrl: "https://www.advancedwomenshealth.ca/blog/fatigue-and-insulin-resistance-a-deeper-look-into-the-metabolic-connection",
    category: "Metabolic Health",
    readTime: "8 min read",
    date: "2026-03-13",
    source: "Advanced Women's Health",
    author: "Dr. Advanced Health Team"
  },
  {
    id: "metabolic-health-biomarkers",
    title: "Metabolic Health: Why Weight Lies",
    excerpt: "Only 6.8% of American adults are metabolically healthy. True health is metabolic efficiency—HbA1c, ApoB, and inflammation harmony, not scale numbers.",
    externalUrl: "https://aihealthician.co.uk/blogs/news/how-to-assess-metabolic-health-guide",
    category: "Metabolic Health",
    readTime: "9 min read",
    date: "2026-03-06",
    source: "AI Healthician",
    author: "AI Healthician Team"
  },
  {
    id: "metabolic-syndrome-reversal",
    title: "Metabolic Syndrome: Root of Modern Diseases",
    excerpt: "A landmark 2026 RCT shows four simple daily habits can reverse metabolic syndrome with 46% increased odds of remission. Learn the 90-day protocol.",
    externalUrl: "https://www.vitalmindcoach.com/en/post/metabolic-syndrome-remission-habits-elm-rct-2026",
    category: "Metabolic Health",
    readTime: "10 min read",
    date: "2026-03-05",
    source: "Vital Mind Coach",
    author: "Dr. Vital Mind Coach"
  },
  {
    id: "insulin-cortisol-connection",
    title: "The Insulin-Cortisol Connection: Why Stress Makes You Gain Weight",
    excerpt: "Chronic cortisol pushes your body into insulin resistance, forcing cells to stop responding to insulin and creating metabolic chaos.",
    externalUrl: "https://www.optimaldx.com/blog/spotlight-on-the-insulin-cortisol-connection",
    category: "Metabolic Health",
    readTime: "7 min read",
    date: "2026-03-04",
    source: "OptimalDX",
    author: "OptimalDX Team"
  },

  // Hormones & Longevity
  {
    id: "cortisol-burnout-hpa",
    title: "Cortisol Dysregulation: The Wired-Tired Cycle Destroying Your Health",
    excerpt: "HPA axis dysfunction creates the tired-but-wired paradox. Learn how chronic stress disrupts cortisol rhythm and how to restore balance.",
    externalUrl: "https://mentalvacationhub.com/blog/the-role-of-cortisol-in-burnout",
    category: "Hormones & Longevity",
    readTime: "8 min read",
    date: "2026-03-03",
    source: "Mental Vacation Hub",
    author: "Mental Health Team"
  },
  {
    id: "cortisol-loop-tired-wired",
    title: "The Cortisol Loop: Why You Feel Tired But Wired",
    excerpt: "Physical exhaustion combined with mental alertness and inability to relax signals HPA axis dysregulation. Break the self-reinforcing stress-cortisol cycle.",
    externalUrl: "https://gribbworld.com/blogs/news/the-cortisol-loop-why-you-feel-tired-but-wired",
    category: "Hormones & Longevity",
    readTime: "7 min read",
    date: "2026-03-02",
    source: "Gribb World",
    author: "Gribb Health Team"
  },
  {
    id: "chronic-cortisol-hormones",
    title: "How Chronic Cortisol Wreaks Havoc on Hormones and Metabolism",
    excerpt: "Elevated cortisol suppresses thyroid function, interferes with T4 to T3 conversion, and increases reverse T3, blocking active thyroid hormones.",
    externalUrl: "https://www.ahnpointwellness.com/blog/how-chronic-cortisol-wreaks-havoc-on-hormones-and-metabolism/",
    category: "Hormones & Longevity",
    readTime: "9 min read",
    date: "2026-03-01",
    source: "AHN Point Wellness",
    author: "Dr. AHN Team"
  },

  // Nutrients & Supplements
  {
    id: "iv-therapy-science",
    title: "Does IV Therapy Work? The Science Behind Bioavailability",
    excerpt: "100% bioavailability vs 10-30% oral absorption. Discover when IV therapy accelerates deficiency correction and when oral supplements are sufficient.",
    externalUrl: "https://theclaraclinic.com/blog-home/the-science-behind-iv-vitamin-therapy",
    category: "Nutrients & Supplements",
    readTime: "8 min read",
    date: "2026-02-28",
    source: "The Clara Clinic",
    author: "Clara Clinic Medical Team"
  },
  {
    id: "iv-vs-oral-vitamins",
    title: "Bioavailability: Why IV Therapy Outperforms Oral Vitamins",
    excerpt: "Stomach acid denatures sensitive nutrients, transporters become saturated, and the liver's first-pass effect reduces bioavailability before nutrients reach cells.",
    externalUrl: "https://vivawellnessdrip.com/blogs/science-of-bioavailability-iv-therapy-vs-oral-vitamins/",
    category: "Nutrients & Supplements",
    readTime: "7 min read",
    date: "2026-02-27",
    source: "Viva Wellness Drip",
    author: "Viva Medical Team"
  },
  {
    id: "supplements-personalization",
    title: "Why Supplements Fail—And My Proven Method",
    excerpt: "79% of supplement users see no benefits due to lack of personalization. Success demands labs, bioavailable forms, and monitored protocols.",
    externalUrl: "https://www.supplementscribe.ai/content/ai-optimized-supplements-dna-personalization-2025",
    category: "Nutrients & Supplements",
    readTime: "9 min read",
    date: "2026-02-26",
    source: "SupplementScribe",
    author: "AI Personalization Team"
  },
  {
    id: "magnesium-sleep-stress",
    title: "Magnesium: The Sleep + Stress Mineral Most Are Missing",
    excerpt: "48% of Americans are deficient in magnesium. Learn how this essential mineral regulates sleep, cortisol, GABA, and metabolic health.",
    externalUrl: "https://primalharvest.com/blogs/news/magnesium-the-sleep-stress-mineral-you-re-probably-missing",
    category: "Nutrients & Supplements",
    readTime: "8 min read",
    date: "2026-02-25",
    source: "Primal Harvest",
    author: "Primal Harvest Team"
  },
  {
    id: "magnesium-circadian-syndrome",
    title: "Magnesium and Circadian Syndrome: The Metabolic Connection",
    excerpt: "Higher magnesium intake associates with lower circadian syndrome prevalence, combining metabolic syndrome with sleep disruption and depression.",
    externalUrl: "https://www.signos.com/blog/magnesium-and-sleep",
    category: "Nutrients & Supplements",
    readTime: "7 min read",
    date: "2026-02-24",
    source: "Signos",
    author: "Signos Health Team"
  },
  {
    id: "vitamin-d-optimization",
    title: "Vitamin D Optimization: Beyond Bone Health",
    excerpt: "Functional medicine recommends 40-60 ng/mL for optimal immune and metabolic function, far above the standard RDA designed only to prevent deficiency.",
    externalUrl: "https://1stoptimal.com/the-essential-guide-to-vitamin-d/",
    category: "Nutrients & Supplements",
    readTime: "9 min read",
    date: "2026-02-23",
    source: "1st Optimal",
    author: "1st Optimal Health Team"
  },
  {
    id: "vitamin-d-dosing-2025",
    title: "New Research on Vitamin D Dosing: Beyond the RDA",
    excerpt: "Most adults require 2,000-5,000 IU daily to achieve optimal levels. A 2023 meta-analysis found optimal immune function requires approximately 40 ng/mL.",
    externalUrl: "https://healthcrunch.org/articles/2025-11-07-new-research-vitamin-d-dosing",
    category: "Nutrients & Supplements",
    readTime: "7 min read",
    date: "2026-02-22",
    source: "Health Crunch",
    author: "Health Research Team"
  },

  // Lifestyle Medicine
  {
    id: "sleep-architecture-optimization",
    title: "Sleep Architecture: How to Optimize Stages for Maximum Recovery",
    excerpt: "Quality matters more than duration. Learn how to engineer your sleep cycles for optimal deep sleep and REM to maximize cognitive performance and longevity.",
    externalUrl: "https://www.tickerjournal.com/engineer-your-sleep-a-guide-to-optimizing-sleep-architecture-for-peak-cognitive-performance-and-longevity/",
    category: "Lifestyle Medicine",
    readTime: "10 min read",
    date: "2026-02-21",
    source: "Ticker Journal",
    author: "Sleep Science Team"
  },
  {
    id: "deep-sleep-rem-science",
    title: "The Science of Deep Sleep & REM: Why They Matter",
    excerpt: "Deep sleep handles body repair, immune function, and toxin clearance, while REM supports memory, learning, and emotional regulation.",
    externalUrl: "https://www.airguard.ai/insightsarticles/the-science-of-deep-sleep-and-rem-sleep",
    category: "Lifestyle Medicine",
    readTime: "8 min read",
    date: "2026-02-20",
    source: "AirGuard",
    author: "AirGuard Health Team"
  },
  {
    id: "resistance-training-metabolic",
    title: "Exercise as Metabolic Medicine: Resistance Training for Longevity",
    excerpt: "Resistance training reduces fasting glucose by 20.70 mg/dL and HbA1c by 0.66%. Muscle acts as a metabolic sink, with 80% of glucose disposal happening in skeletal muscle.",
    externalUrl: "https://eatuitivenutrition.com/blog/the-science-backed-benefits-of-strength-training-for-health-and-longevity",
    category: "Lifestyle Medicine",
    readTime: "10 min read",
    date: "2026-02-19",
    source: "Eatuitive Nutrition",
    author: "Nutrition & Fitness Team"
  },
  {
    id: "strength-training-longevity",
    title: "Muscle & Longevity: How Strength Training Extends Healthspan",
    excerpt: "Grip strength is a remarkably predictive marker of all-cause mortality. Low muscle mass can double premature death risk—but it's reversible.",
    externalUrl: "https://www.bodymechanicsgb.com/blog/muscle-amp-longevity-how-strength-training-supports-a-longer-healthier-life",
    category: "Lifestyle Medicine",
    readTime: "9 min read",
    date: "2026-02-18",
    source: "Body Mechanics",
    author: "Body Mechanics Team"
  },
  {
    id: "intermittent-fasting-protocols",
    title: "Intermittent Fasting: Who Benefits and Who Should Avoid It",
    excerpt: "Popular protocols like 16/8 and 5:2 may improve insulin response and metabolic markers, but pregnant women, diabetics, and those with eating disorders should avoid.",
    externalUrl: "https://www.myfastingbuddy.com/blog/who-should-avoid-intermittent-fasting-your-ultimate-safety-guide",
    category: "Lifestyle Medicine",
    readTime: "8 min read",
    date: "2026-02-17",
    source: "My Fasting Buddy",
    author: "Fasting Safety Team"
  },
  {
    id: "gut-microbiome-insulin-resistance",
    title: "Gut Health & Metabolic Disorders: The Microbiome Connection",
    excerpt: "Dysbiosis alters SCFAs, bile acids, and TMAO production, affecting intestinal barrier integrity, inflammation, and glucose homeostasis through multiple pathways.",
    externalUrl: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2025.1633029/full",
    category: "Lifestyle Medicine",
    readTime: "11 min read",
    date: "2026-02-16",
    source: "Frontiers in Microbiology",
    author: "Research Team"
  },
];

export const categories = [
  "All",
  "Biomarkers & Testing",
  "Heart & Vascular",
  "Metabolic Health",
  "Hormones & Longevity",
  "Nutrients & Supplements",
  "Lifestyle Medicine"
] as const;

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
