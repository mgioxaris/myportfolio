import { About, Artifact, Experience, Intro, Link } from '@/lib/types'
import React from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { LuGraduationCap } from 'react-icons/lu'
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'
/**
 * ADD IMAGES BELOW AS NEEDED
 */
import portrait from '../../public/portrait.jpg'
import artifact1 from '../../public/artifacts/artifact1.png'
/**
 * END IMAGES
 */
/**
 * BEGIN SEO DATA
 * Set your site title and tell search engines about yourself
 */
export const sitemetadata = {
  title: 'Michele Gioxaris',
  description: "I am a higher education professional. Skilled Student Affairs professional with nearly a decade of service. Astute organizer. Expert in data analysis and quantitative report writing. EOF scholar advocate and champion. Developer and presenter of experiential workshops and learning modules, online and face-to-face. Collaborative, coachable, self-directed, and able to monitor progress and productivity. Currently studying for my Master's Degree in Higher Education Administration.",
  dark: false,
  footer: 'Michele Gioxaris | All rights reserved',
}
/**
 * END SEO DATA
 */

/**
 * BEGIN SECTION DATA
 */

export const intro: Intro = {
  portrait: portrait,
  portraitAlt: 'Portrait of Michele Gioxaris. Dark haired female, curly hair, ponytail.',
  emoji: '',
  description: `Hello <strong>I'm Michele</strong>. <em>EOF Assistant Director</em> at Ocean County College.`,
  buttons: [
    {
      label: 'Download My Resume',
      link: '/resume.pdf',
      style: 'default',
      icon: React.createElement(FaDownload),
    },
    {
      link: 'https://linkedin.com/',
      style: 'outline',
      icon: React.createElement(FaLinkedin),
      alt: 'Visit my LinkedIn profile',
    },
    {
      link: 'https://tiktok.com/',
      style: 'outline',
      icon: React.createElement(FaTiktok),
      alt: 'Visit my TikTok profile',
    },
  ],
}

export const about: About = {
  text: ``,
}

/**
 * Artifacts are the projects that you want to highlight
 */
export const artifacts: Array<Artifact> = [
  {
    title: 'Title of Artifact/Project',
    description:
      'Description of artifact or project. I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    image: artifact1,
    tags: ['APA Formatting', 'Persuasive Writing'],
    url: 'https://www.linkedin.com/pulse/understanding-your-digital-footprint-how-can-help-job-sam/',
  },
  {
    title: 'Second Artifact Title',
    description:
      'Describe to your prospective employers and colleagues why this artifact is special. What learning happened while you worked on this? What impact might it have had on others?',
    image: artifact1,
    tags: ['Microsoft Office', 'Adobe CC'],
    url: 'https://www.linkedin.com/pulse/understanding-your-digital-footprint-how-can-help-job-sam/',
  },
] as const

export const skills = [
  'Communication',
  'Adobe CC',
  'Public Speaking',
  'Microsoft Office',
  'APA Formatting',
  'Persuasive Writing',
  'Interpersonal',
  'Highly Organized',
  'Workshop Programming',
  'Self-motivated',
  'Collaborative'
] as const

export const experience: Array<Experience> = [
  {
    title: 'Ashford University',
    location: 'San Diego, CA',
    description: 'Bachelors in Early Childhood Education',
    icon: React.createElement(LuGraduationCap),
    start: '2011',
    end: '2015',
  },
  {
    title: 'Ocean County College',
    location: 'Toms River, NJ',
    description: "Office Coordinator for the Educational Opportunity Fund (EOF)",
    icon: React.createElement(HiOutlineBriefcase),
    start: '2016',
    end: '2022',
  },
  {
    title: 'Ocean County College',
    location: 'Toms River, NJ',
    description: "Program Coordinator and Advisor for the Educational Opportunity Fund (EOF)",
    icon: React.createElement(HiOutlineBriefcase),
    start: '2022',
    end: '2023',
  },
  {
    title: 'Ocean County College',
    location: 'Toms River, NJ',
    description: "Assistant Director for the Educational Opportunity Fund (EOF)",
    icon: React.createElement(HiOutlineBriefcase),
    start: '2023',
    end: 'Present',
  },
  {
    title: 'Southern New Hampshire University',
    location: 'Manchester, NH',
    description: "MS Higher Education Administration",
    icon: React.createElement(LuGraduationCap),
    start: '2022',
    end: 'Present',
  },
] as const

/**
 * END SECTION DATA
 */
/**
 * THE ITEMS BELOW APPEAR IN YOUR NAVIGATION MENU
 */
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Artifacts',
    hash: '#artifacts',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
] as const

export const socials = [
  {
    icon: React.createElement(FaLinkedin),
    url: 'https://linkedin.com',
    alt: 'Find me on LinkedIn',
  },
  {
    icon: React.createElement(FaTiktok),
    url: 'https://tiktok.com',
    alt: 'Find me on TikTok',
  },
]
