# Coffee Personality Quiz - Requirements

## Overview
A "What's Your Coffee Personality?" quiz. Users answer 5 fun pop culture questions and get a personality type + coffee recommendation at the end.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|---|---|---|
| Bold Adventurer | Double Espresso | "You live for intensity" |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Social Butterfly | Cappuccino | "Coffee is better with company" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

---

## Result Display
**Single recommendation** — show the top personality only.
Example: "You're a Bold Adventurer! Your coffee: Double Espresso."

---

## Visual Style
**Style 1 — Playful & Colorful**
- Bright gradient background (pink to orange)
- White rounded card (border-radius: 30px)
- Bold, bubbly font (Nunito)
- Colorful progress dots
- Gradient button
- Fun and energetic feel

---

## Answer Options
- Use **emojis** next to each answer option
- No images (can add later during iteration)

---

## Quiz Questions

**Q1: You've just been sorted at Hogwarts. Which house are you in?**
- ⚡ Gryffindor — brave, bold, always first in → Bold Adventurer
- 📚 Ravenclaw — thoughtful, calm, loves to learn → Zen Minimalist
- 🎉 Hufflepuff — loyal, friendly, loves the group → Social Butterfly
- 🐍 Slytherin — practical, strategic, gets things done → Practical Pragmatist

**Q2: It's Friday night. What are you watching?**
- 💥 An action-packed thriller — edge of my seat → Bold Adventurer
- 🧘 A calm documentary — something to learn from → Zen Minimalist
- 😂 A comedy with friends — the more the merrier → Social Butterfly
- 📺 Whatever's on — I'm not picky → Practical Pragmatist

**Q3: You're at a party. Where do you find yourself?**
- 🕺 On the dance floor, owning it → Bold Adventurer
- 🌿 Out on the balcony, getting some air → Zen Minimalist
- 🗣️ In the middle of every conversation → Social Butterfly
- 🛋️ On the couch, snacking and vibing → Practical Pragmatist

**Q4: Pick your Netflix character:**
- 🦁 Walter White (Breaking Bad) — intense, driven → Bold Adventurer
- 🌊 Ted Lasso — calm, wise, grounded → Zen Minimalist
- 👯 Michael Scott (The Office) — loves his people → Social Butterfly
- 🎯 Leslie Knope (Parks & Rec) — gets stuff done → Practical Pragmatist

**Q5: Your dream vacation is:**
- 🏔️ Skydiving in New Zealand → Bold Adventurer
- 🍵 Meditating at a Japanese temple → Zen Minimalist
- 🏖️ Group trip to Ibiza with 20 friends → Social Butterfly
- 🗺️ A well-planned road trip with a solid itinerary → Practical Pragmatist

---

## Logic
- Each answer maps to one of the 4 personalities
- At the end, tally which personality was picked most
- Show that personality's name + coffee recommendation
- In case of a tie, pick the first personality in the tally order
