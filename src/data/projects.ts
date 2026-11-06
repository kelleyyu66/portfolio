export type CaseImage = {
  alt: string
  caption?: string
  src?: string
  /** column = reading width, wide = past the text, full = edge to edge */
  size: 'column' | 'wide' | 'full'
}

export type CaseBlock =
  | { kind: 'section'; heading: string; paragraphs: string[]; image?: CaseImage }
  | { kind: 'quote'; text: string; attribution?: string }

export type Project = {
  slug: string
  /** the short name the nav's work menu goes by */
  company: string
  /** how the company signs the home card, where it has a longer name */
  companyName?: string
  /** company mark shown beside the title on the home card */
  logo?: string
  tags: string[]
  title: string
  /** the shorter name the home card goes by */
  cardTitle: string
  /** card thumbnail; without one the card shows the grey block from the design */
  image?: string
  /** artwork stands in for the thumbnail — a live hero, or a looping recording */
  cardMedia?: 'travel-blend' | 'playbook'
  /** card image proportions, from the Figma grid (width / height) */
  imageAspect: string
  /** one or two sentences for the home page card */
  description: string
  /** one plain line naming the result, shown under the case study title */
  outcome: string
  meta: { label: string; value: string }[]
  /** 2–3 numbers or short facts for the at-a-glance band */
  highlights: { value: string; label: string }[]
  heroImage: Omit<CaseImage, 'size'>
  blocks: CaseBlock[]
}

import googleMaps from '../assets/Logo_GoogleMaps.png'
import playbookMark from '../assets/playbook/logo-playbook.webp'
import recoolitMark from '../assets/recoolit/logo-recoolit.webp'
import recoolitHero from '../assets/recoolit/hero.webp'

/* Figma 689:546 — every card carries the same four on the home page for now */
const tags = ['Product Design', 'Mobile', 'AI', 'Interaction Design']

// Placeholder copy doubles as writing prompts. Replace it project by project.
const placeholderStudy: Pick<Project, 'outcome' | 'meta' | 'highlights' | 'heroImage' | 'blocks'> = {
  outcome: 'One plain sentence naming the result, like “Cut onboarding drop-off by half by asking one fewer question.”',
  meta: [
    { label: 'Role', value: 'Product designer' },
    { label: 'Timeline', value: '12 weeks, 2025' },
    { label: 'Team', value: '1 PM, 3 engineers' },
    { label: 'Tools', value: 'Figma, Maze, Dovetail' },
  ],
  highlights: [
    { value: '50%', label: 'less drop-off during onboarding' },
    { value: '4.6★', label: 'average rating after launch' },
    { value: '12', label: 'user interviews that shaped the direction' },
  ],
  heroImage: { alt: 'Hero image: the final design in context' },
  blocks: [
    {
      kind: 'section',
      heading: 'the context',
      paragraphs: [
        'What was the company, the product and the moment? Two or three sentences a stranger could follow.',
        'Who was it for, and what were they trying to do?',
      ],
    },
    {
      kind: 'section',
      heading: 'the problem',
      paragraphs: [
        'What was going wrong, and how did you know? Lead with evidence: a metric, a quote or an observation.',
      ],
      image: { alt: 'The starting point: the old flow, or a journey map of where it broke', size: 'wide', caption: 'Caption: one line on what to notice.' },
    },
    {
      kind: 'section',
      heading: 'what I learned',
      paragraphs: [
        'How did you research it? Keep the method short and spend the words on what surprised you.',
        'Name the one insight that changed the direction.',
      ],
    },
    {
      kind: 'quote',
      text: 'A line from a user or stakeholder that captures the insight in their own words.',
      attribution: 'Participant, interview 7',
    },
    {
      kind: 'section',
      heading: 'the design',
      paragraphs: [
        'Walk through the key decisions and the options you ruled out. Show the thinking, not every screen.',
      ],
      image: { alt: 'The final design: the key screens or a prototype recording', size: 'full' },
    },
    {
      kind: 'section',
      heading: 'what happened',
      paragraphs: [
        'What shipped, and what changed because of it? Numbers if you have them, a clear before and after if you don’t.',
      ],
    },
    {
      kind: 'section',
      heading: 'looking back',
      paragraphs: [
        'What would you do differently? One honest paragraph reads as confidence, not weakness.',
      ],
    },
  ],
}

export const featuredProjects: Project[] = [
  {
    slug: 'finding-magic-on-the-road',
    company: 'Google Maps',
    logo: googleMaps,
    tags,
    title: 'Making Road Trips Magical with Google Maps',
    cardTitle: 'Road Trip Jam',
    // the card runs the case study's own hero rather than a still of it,
    // cropped a little off each side to sit closer to square
    cardMedia: 'travel-blend',
    imageAspect: '3 / 2',
    description: 'Helping friend groups collaborate on the road with Gemini.',
    ...placeholderStudy,
  },
  {
    slug: 'playbook',
    company: 'Playbook',
    companyName: 'Playbook M&A',
    logo: playbookMark,
    tags: ['Product Design', 'UX Research', 'AI', 'Early-stage startup'],
    title: 'Meeting Investors Where They Work',
    cardTitle: 'Meeting Investors Where They Are',
    // the card loops the hero animation while it is on screen, trimmed a
    // little off the top and bottom of the recording's own proportions
    cardMedia: 'playbook',
    imageAspect: '3 / 2',
    description: 'Designing an AI tool to help investors get deals done faster.',
    ...placeholderStudy,
  },
  {
    slug: 'recoolit',
    company: 'Recoolit',
    logo: recoolitMark,
    tags: ['Web Design', 'UX Writing', 'Branding', 'Climate Tech'],
    title: 'Designing a compelling narrative around an overlooked climate problem.',
    cardTitle: 'Recoolit Redesign',
    image: recoolitHero,
    imageAspect: '3 / 2',
    description:
      'Designing a compelling narrative around an overlooked climate problem.',
    ...placeholderStudy,
  },
]

export const findProject = (slug: string | undefined) => featuredProjects.find((p) => p.slug === slug)

export const nextProject = (slug: string) => {
  const i = featuredProjects.findIndex((p) => p.slug === slug)
  return featuredProjects[(i + 1) % featuredProjects.length]
}
