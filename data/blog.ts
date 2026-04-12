export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  readTime: string;
  content: BlogBlock[];
};

export type BlogBlock =
  | { type: "stanza"; lines: string[] }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "divider" };

const blogPosts: BlogPost[] = [
  {
    slug: "ode-to-derpy-orange-corgis",
    title: "Ode to the Derpy Orange Corgi",
    date: "April 11, 2026",
    description:
      "A heartfelt, unscientific poem about the world's most chaotically lovable dog.",
    tag: "poetry",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "Science cannot explain the corgi. No equation accounts for the ratio of ear to body, the physics of a sploot, or why watching one trip over its own paws makes everything in life feel okay. This is my attempt.",
      },
      { type: "divider" },
      {
        type: "stanza",
        lines: [
          "They trot into the room like they own the floor,",
          "with ears too big and butts that wiggle more,",
          "their stubby little legs move fast and free—",
          "no other dog has brought such joy to me.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "Their coats are golden, orange as the dawn,",
          "they flop beside you on the sunlit lawn,",
          "with eyes that hold a soul too pure for words,",
          "and barks like tiny, urgent little birds.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "They trip on flat ground, bump into a chair,",
          "and somehow still look cute beyond compare,",
          "a derpy grin beneath a pointed snout,",
          "the kind of face that makes you want to shout.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "One moment: zooming, wild across the hall.",
          "The next: a sploot — just melted, like a sprawl.",
          "Full speed to zero. No in-between.",
          "The most dramatic dog you've ever seen.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "They stare at you with purpose in their eyes,",
          "as if your snack is just the perfect prize,",
          "they tilt their head, those ears go up on cue—",
          "there is no better actor, through and through.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "Oh corgi, you magnificent silly beast,",
          "your fluffiness and chaos never cease,",
          "with every zoom and boop and lopsided face,",
          "you make my heart grow at a reckless pace.",
        ],
      },
      {
        type: "stanza",
        lines: [
          "So here's to you, my orange derpy friend,",
          "I'll love your wobbly chaos without end,",
          "with sploot and zoom and that ridiculous grin—",
          "no dog could ever hope to let me win.",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "If you made it this far: please adopt a corgi. Or at least follow seventeen of them on Instagram. Your mental health will thank you.",
      },
    ],
  },
];

export default blogPosts;
