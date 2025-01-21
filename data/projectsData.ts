interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '8 Years of SWE Experience',
    description: `The logos displayed on this site are used solely for the purpose of identifying companies where I have been employed or collaborated with in the past. All trademarks and logos are the property of their respective owners.`,
    imgSrc: '/static/images/prior-logos.png',
    href: 'https://www.linkedin.com/in/franklincarvajal/details/experience/',
  },
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
]

export default projectsData
