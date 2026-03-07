Build a complete 5-page marketing website for "FurBuddy" — a SaaS mobile app for tracking pet vaccines, medication schedules, and full medical history. The site should feel warm, modern, and trustworthy — aimed at loving pet owners who want peace of mind about their pets' health.

---

## TECH STACK
- React (Vite) with React Router v6
- Tailwind CSS for utility styling
- Framer Motion for animations
- React Hook Form + EmailJS for contact forms
- Lucide React for icons
- Google Fonts: "Sora" (headings) + "DM Sans" (body)

---

## DESIGN SYSTEM

Color Palette:
  --primary: #2D6A4F (deep forest green — trust, health)
  --accent: #F4A261 (warm amber — warmth, pets)
  --highlight: #74C69D (mint green — freshness)
  --bg: #FAFAF7 (off-white — soft, clean)
  --text: #1A1A2E (near-black)
  --muted: #6B7280

Typography:
  - Headings: "Sora", bold/extrabold
  - Body: "DM Sans", regular/medium
  - Accent text: italic or tracked-out caps

Style: Soft organic shapes, rounded cards, layered blob backgrounds, subtle grain texture overlay, animated gradient CTAs, smooth page transitions, micro-interactions on hover.

---

## SITE STRUCTURE

### 1. HOME PAGE (/)
Hero section:
  - Full-height hero with animated blob background (green + amber gradient)
  - Headline: "Your Pet's Health, Always in Your Pocket."
  - Subheadline: "Track vaccines, medications & medical records — all in one beautiful app."
  - Two CTAs: "Download Free" (primary) + "See How It Works" (ghost, scrolls down)
  - Floating phone mockup (use a styled div/frame as a phone with a green gradient interior showing mock UI screens with labels like "Vaccine Due", "Medication Reminder")
  - Trust bar: "10,000+ Pet Parents • 4.9★ App Store • Vet-Approved"

Features section:
  - Section title: "Everything your pet needs, beautifully organized"
  - 3-column grid of feature cards with icons:
    1. 💉 Vaccine Tracker — "Never miss a booster. Set reminders and log every shot."
    2. 💊 Medication Schedule — "Dosing reminders with snooze, refill alerts, and history."
    3. 📋 Medical History — "Full health timeline from first vet visit to today."
    4. 🐶 Multi-Pet Profiles — "Dogs, cats, rabbits — manage all your animals in one place."
    5. 🏥 Vet Visit Logs — "Record diagnoses, treatments, and vet notes after every visit."
    6. 🔔 Smart Reminders — "Push notifications so nothing slips through the cracks."
  - Cards should have soft shadow, icon in colored circle, hover lift animation.

Social proof:
  - 3 testimonial cards with pet owner avatar (use colored initials), quote, pet name (e.g., "Max's Mom ⭐⭐⭐⭐⭐")
  - Rotating/auto-scroll carousel on mobile

App download banner:
  - Full-width section with gradient background
  - "Ready to be the best pet parent?" headline
  - Two styled badge buttons: "App Store" + "Google Play" (SVG icons)

---

### 2. FEATURES PAGE (/features)
- Hero: "Built for Every Pet. Loved by Every Owner."
- 4 detailed feature blocks alternating left/right layout (image mockup left, text right, then flip):
  1. Vaccine Tracker — calendar view, upcoming + past, vet-shareable PDF export
  2. Medication Manager — recurring reminders, refill tracker, photo log of meds
  3. Health Timeline — scrollable full history, filter by pet/type/date
  4. Multi-Pet Dashboard — overview cards per pet, quick-add floater button
- Each block: icon, bold title, 3–4 bullet points with checkmarks, and a small animated phone frame mockup showing that feature
- Bottom CTA strip: "See it in action — Download FurBuddy Free"

---

### 3. PRICING PAGE (/pricing)
- Headline: "Simple pricing. No surprises."
- Toggle: Monthly / Annual (annual shows 20% savings badge)
- 3 pricing tiers in cards:
  1. FREE — "For 1 pet": $0/mo — vaccine log, 1 pet profile, basic reminders
  2. PAW PRO — "Most Popular": $4.99/mo ($3.99 annual) — unlimited pets, medication tracker, vet visit logs, PDF exports
  3. FAMILY PACK — "For large families": $8.99/mo ($7.19 annual) — everything + family sharing (up to 5 users), priority support
- Highlight middle card with primary green border + "Most Popular" badge
- Feature comparison table below cards (toggle rows collapsed/expanded on mobile)
- FAQ accordion section (5–6 common questions):
  - "Can I use FurBuddy for free forever?" 
  - "Can I share my pet's records with my vet?"
  - "Is my data safe?"
  - etc.

---

### 4. ABOUT PAGE (/about)
- Hero: "We Built This for Our Own Pets First."
- Founder story section: narrative text block with a warm, personal tone about building FurBuddy after struggling to remember their dog's vaccine dates
- Mission statement card: large quote-style callout with green background
- Team section: 3–4 team member cards (Name, title, fun pet fact, colored avatar circle)
- Values section: 4 values with icons (Care, Simplicity, Trust, Delight)
- Press/media logos strip: styled placeholder boxes labeled "As seen in: TechCrunch, PetMD, Product Hunt"
- CTA: "Join 10,000+ Pet Parents" → Download buttons

---

### 5. CONTACT PAGE (/contact)
- Two-column layout:
  LEFT: Contact info
    - "We'd love to hear from you 🐾"
    - Email: hello@furbuddy.app
    - Response time: "Usually within 24 hours"
    - Links to social: Instagram, Twitter/X, Facebook (icon buttons)
    - A warm illustration or large decorative paw print SVG

  RIGHT: Contact form (React Hook Form)
    Fields:
    - Name (text)
    - Email (email, validated)
    - Subject (select dropdown): General Inquiry / Bug Report / Partnership / Press / Other
    - Message (textarea, min 20 chars)
    - Submit button: "Send Message →" with loading spinner state
    - Success state: animated checkmark + "Thanks! We'll be in touch soon 🐾"
    - Error state: red inline validation messages

- Below form: Support callout box
  - "Looking for help with the app?"
  - Button → links to hypothetical /support page or mailto

---

## GLOBAL COMPONENTS

Navbar:
  - Logo: Paw icon (Lucide) + "FurBuddy" in Sora bold
  - Links: Home, Features, Pricing, About, Contact
  - Right side: "Download App" CTA button (green, pill-shaped)
  - Sticky on scroll with backdrop blur + subtle shadow on scroll
  - Mobile: hamburger menu with slide-down drawer

Footer:
  - 4-column layout: Logo+tagline | Product links | Company links | Social icons
  - App Store + Google Play badges
  - "© 2025 FurBuddy. Made with ❤️ for pet parents."
  - Divider line, bottom legal links: Privacy Policy, Terms, Cookie Policy

Page transitions:
  - Framer Motion AnimatePresence with fade + slight Y-offset on route change

Scroll animations:
  - Use Framer Motion `whileInView` with `initial={{ opacity: 0, y: 30 }}` on all section entries
  - Stagger children in feature grids and card rows

---

## IMAGE/MEDIA STRATEGY
- Use Unsplash Source URLs for pet imagery:
  https://source.unsplash.com/featured/?dog,pet,puppy (vary keywords: cat, rabbit, veterinary)
- Phone mockups: Build as styled React components (rounded rect div with inner "screen" div)
- All images: object-cover, rounded-2xl, with subtle box-shadow
- Add alt text to all images for accessibility

---

## RESPONSIVE DESIGN
- Mobile-first approach
- Breakpoints: sm (640), md (768), lg (1024), xl (1280)
- Hero: stack vertically on mobile, side-by-side on lg+
- Feature alternating blocks: stack on mobile
- Pricing cards: single column → 3 columns on lg
- Navbar: hamburger below md

---

## ACCESSIBILITY
- ARIA labels on all interactive elements
- Focus-visible ring styles
- Color contrast ratio minimum 4.5:1
- Skip-to-content link
- Form fields with proper label associations

---

## FILE STRUCTURE
src/
  components/
    Navbar.jsx
    Footer.jsx
    PhoneMockup.jsx
    FeatureCard.jsx
    TestimonialCard.jsx
    PricingCard.jsx
    ContactForm.jsx
    AnimatedSection.jsx
  pages/
    Home.jsx
    Features.jsx
    Pricing.jsx
    About.jsx
    Contact.jsx
  styles/
    index.css (Tailwind + custom CSS vars)
  App.jsx (Router setup + AnimatePresence)
  main.jsx

---

## ADDITIONAL NOTES
- All CTAs should use consistent green pill buttons with amber hover glow
- Use Lucide icons throughout (PawPrint, Syringe, Bell, Heart, Shield, Users, etc.)
- No placeholder "Lorem ipsum" — write real, warm, brand-appropriate copy throughout
- Animate the hero phone mockup with a subtle floating/bobbing keyframe animation
- Add a cookie consent banner (simple, dismissible)
- Add smooth anchor scroll for "See How It Works" CTA on homepage