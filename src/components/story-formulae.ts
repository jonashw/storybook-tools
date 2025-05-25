import type { Progression, StoryFormula } from "./StoryFormula";

const formulae: StoryFormula[] = [
  {
    name: "Freytag's Pyramid",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [
      {
        type: "moment",
        name: "Introduction",
        fortune: 0,
        description:
          "The status quo is established; an inciting incident occurs.",
      },
      {
        type: "period",
        name: "Rising Action",
        interpolation: "linear",
        description:
          "The protagonist actively pursues their goal. The stakes heighten.",
      },

      {
        type: "moment",
        name: "Climax",
        fortune: 100,
        description:
          "A point of no return, from which the protagonist can no longer go back to the status quo.",
      },
      {
        type: "period",
        name: "Falling Action",
        interpolation: "linear",
        description:
          "In the aftermath of the climax, tension builds, and the story heads inevitably towards...",
      },
      {
        type: "moment",
        name: "Catastrophe",
        fortune: 0,
        description:
          "The protagonist is brought to their lowest point. Their greatest fears have come true.",
      },
    ],
    description:
      "Named after a 19th-century German novelist and playwright, Freytag’s Pyramid is a five-point dramatic structure that’s based on the classical Greek tragedies of Sophocles, Aeschylus, and Euripedes.",
    analysis:
      "This structural model is less frequently used in modern storytelling, partly due to readers’ limited appetite for tragic narratives (although you can still spot a few tragic heroes in popular literature today). By and large, commercial fiction, films, and television will see a protagonist overcome their obstacles to find some small measure of success. That said, it’s still useful to understand the Pyramid as a foundational structure in Western literature — and you will still see it occasionally in the most depressing contemporary tales.      ",
    abbreviated_progression: [
      "Introduction",
      "Rising Action",
      "Climax",
      "Falling Action",
      "Catastrophe",
    ],
  },
  {
    name: "The Hero's Journey",
    source: "https://blog.reedsy.com/guide/story-structure/",
    description:
      "Inspired by Joseph Campbell’s concept of the monomyth — a storytelling pattern that recurs in mythology all over the world — The Hero’s Journey is today’s best-known story structure. Some attribute its popularity to George Lucas, whose Star Wars was heavily influenced by Campbell’s The Hero With a Thousand Faces.\n\nCampbell’s original structure uses terminology that lends itself well to epic tales of bravery and triumph — with plot points like “Belly of the Whale,” “Woman as the Temptress,” and “The Magic Flight.” To make The Hero’s Journey more accessible, Disney executive Christopher Vogler created a simplified version that has become popular amongst mainstream storytellers.",
    progression: [
      {
        type: "moment",
        name: "Refusal of the Call",
        description:
          "For a moment, the hero is reluctant to take on the challenge.",
      },
      {
        type: "moment",
        name: "Meeting the Mentor",
        description:
          "Our hero meets someone who prepares them for what lies ahead — perhaps a parental figure, a teacher, a wizard, or a wise hermit.",
      },
      {
        type: "moment",
        name: "Crossing the First Threshold",
        description:
          "The hero steps out of their comfort zone and enters a ‘new world.’",
      },
      {
        type: "moment",
        name: "Tests, Allies, Enemies",
        description:
          "Our protagonist faces new challenges — and maybe picks up some new friends. Think of Dorothy on the Yellow Brick Road.",
      },
      {
        type: "moment",
        name: "Approach to the Inmost Cave",
        description:
          "The hero gets close to their goal. Luke Skywalker reaches the Death Star.",
      },
      {
        type: "moment",
        name: "The Ordeal",
        description:
          "The hero meets (and overcomes) their greatest challenge yet.",
      },
      {
        type: "moment",
        name: "Reward (Seizing the Sword)",
        description:
          "The hero obtains something important they were after, and victory is in sight.",
      },
      {
        type: "moment",
        name: "The Road Back",
        description:
          "The hero realizes that achieving their goal is not the final hurdle. In fact, ‘seizing the sword’ may have made things worse for them.",
      },
      {
        type: "moment",
        name: "Resurrection",
        description:
          "The hero faces their final challenge — a climactic test that hinges on everything they’ve learned over their journey.",
      },
      {
        type: "moment",
        name: "Return with the Elixir",
        description:
          "Having triumphed, our protagonist returns to their old life. Dorothy returns to Kansas; Iron Man holds a press conference to blow his own trumpet.        ",
      },
    ],
  },
  {
    name: "Three Act Structure",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [],
  },
  {
    name: "Dan Harmon's Story Circle",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [],
  },
  {
    name: "Ficktean Curve",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [],
  },
  {
    name: "Save the Cat (Beat Sheet)",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [
      { type: "moment", name: "Opening image" },
      { type: "period", name: "Set-up" },
      { type: "moment", name: "Catalyst" },
      { type: "period", name: "Debate" },
      { type: "moment", name: "Break into Act II" },
      { type: "period", name: "Promise of the premise" },
      { type: "moment", name: "Midpoint" },
      { type: "period", name: "Bad guys close in" },
      { type: "moment", name: "All is Lost" },
      { type: "period", name: "Dark night of the soul" },
      { type: "moment", name: "Break into Act III" },
      { type: "period", name: "(Resolution?)" },
      { type: "moment", name: "Final image" },
    ],
  },
  {
    name: "Seven-Point Story Structure",
    source: "https://blog.reedsy.com/guide/story-structure/",
    progression: [],
  },
  {
    name: "Vonnegut's Man in a Hole",
    examples: ["The Wizard of Oz"],
    source:
      "https://storyempire.com/2021/01/06/basic-plots-vonneguts-man-in-hole",
    progression: [
      {
        type: "moment",
        fortune: 80,
        name: "Starts well cared for but discontent",
      },
      { type: "period", name: "Problem after problem" },
      { type: "moment", fortune: -100, name: "Low point" },
      { type: "period", name: "Finally gets home" },
      {
        type: "moment",
        fortune: 100,
        name: "Ends both well cared for and content",
      },
    ],
  },
  {
    name: "Vonnegut's Boy Meets Girl",
    examples: ["Grease"],
    source:
      "https://storyempire.com/2021/01/25/basic-plots-vonneguts-boy-meets-girl",
    progression: [
      {
        type: "moment",
        fortune: 80,
        name: "Starts happy",
      },
      { type: "period", name: "Boy meets Girl" },
      { type: "moment", fortune: 100, name: "On Top of the World" },
      { type: "period", name: "Struggles & Separation" },
      { type: "moment", fortune: -100, name: "Low point" },
      { type: "period", name: "Reconciliation" },

      {
        type: "moment",
        fortune: 100,
        name: "Back together",
      },
    ],
  },
  {
    name: "Vonnegut's Cinderella",
    source:
      "https://storyempire.com/2021/02/12/basic-plots-vonneguts-cinderella",
    examples: ["Cinderalla"],
    progression: [
      { type: "moment", fortune: -100, name: "Life Sucks" },
      { type: "period", name: "Life goes on" },
      { type: "moment", name: "Fairy Godmother comes" },
      ...((wishCount) =>
        Array.from({ length: wishCount }, (_, index) => 1 + index).flatMap(
          (n) =>
            [
              { type: "period", name: `Wish ${n}` },
              {
                type: "moment",
                fortune: (n * 100) / wishCount - 100,
                name: `Wish ${n} comes true`,
              },
            ] as Progression[]
        ))(3),
      { type: "period", name: "Dreams come true" },
      { type: "moment", fortune: 100, name: "On top of the world" },
      { type: "period", name: "The clock strikes 12" },
      { type: "moment", fortune: -50, name: "Life sucks a little less" },
      { type: "period", name: "Life goes on" },
      { type: "moment", fortune: -50, name: "The shoe fits!" },
      { type: "period", name: "Dreams come true" },
      { type: "moment", fortune: 100, name: "Happy ever after" },
    ],
  },
];
export default formulae;
