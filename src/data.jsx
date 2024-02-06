import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://agency-kappa-ashy.vercel.app/',
    github: 'https://github.com/hussainsalman22/Agency',
    title: 'Agency',
    text: 'Agency website with Nextjs and tailwind css',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://gym-gdo0h1yav-hussains-projects-371eeca5.vercel.app/',
    github: 'https://github.com/hussainsalman22/gym/tree/main',
    title: 'GYM WEBSITE',
    text: 'Build a gym website with react and bootstrap.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://react-quiz-app-beta-ten.vercel.app/',
    github: 'https://github.com/hussainsalman22/React-quiz-app-4/tree/main',
    title: 'React Quiz App',
    text: 'Quiz app with react and tailwind css',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://react-quiz-app-beta-ten.vercel.app/',
    github: 'https://github.com/hussainsalman22/React-quiz-app-4/tree/main',
    title: 'React Quiz App',
    text: 'Quiz app with react and tailwind css',
  },
];
