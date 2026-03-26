import './Artifact.css'

export function createConclusionComponent(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'artifact'
  section.id = 'conclusion'

  const heading = document.createElement('h1')
  heading.textContent = 'Conclusion'

  const p1 = document.createElement('p')
  p1.className = 'conclusion-para'
  p1.textContent = 'Exploring all of these artifacts that I included in my website has helped me to realize how much these events, and objects, and creations meant to me. Each one of them has been a huge stepping stone in the advancement of my interest and progress in computer science. I don\'t think I could be in the same position I\'m in today without each and every one of these artifacts. It has been a great experience revisiting these moments and trying to understand the way they shaped me as a person.'

  const p2 = document.createElement('p')
  p2.className = 'conclusion-para'
  p2.textContent = 'Something I learned while working on this project is that I learn best by actively building and experimenting with things. Many of the artifacts on this website represent projects or experiences where I pushed myself to learn something new, and tried to accomplish something I didn\'t think was possible before. From creating programming projects, to learning new tools, or even gaining experience working in a job environment, the most important parts of my journey have involved actually doing the work. I would say that hands on learning is an extremely large part of my worldview. Being able to experiment and practice with all of these skills has been the only way I could make it this far.'

  const p3 = document.createElement('p')
  p3.className = 'conclusion-para'
  p3.textContent = 'Another thing I learned was that growth doesn\'t happen instantaneously, it happens slowly over long periods of time. When I first started getting into computers, I would never had guessed how far I would have taken it. Even before I had reached high school, I was set on going into computer science. From that point on, I was trying my best to self teach, and I was attempting to create all of these amazing projects. The issue was that I hadn\'t realized just how hard the projects that I was trying to finish were. I had thought that I could watch a few youtube videos and magically be able to create a month long project in a day. And at first, realizing I couldn\'t accomplish these big ideas was hard. I got used to it over the years, but the truth is, setting reasonable expectations and deadlines for yourself is hard. And causing myself to work too much on a project would often result in burnout. However, as I review this project I am starting to get a better understanding of how each of these experiences resulted in so much growth, I just had to wait for it to build up.'
  
  const p4 = document.createElement('p')
  p4.className = 'conclusion-para'
  p4.textContent = 'A third thing that I noticed was how much collaboration, and specifically communication are more important than I had really expected. Some people, when they think of coding, think of a guy alone on a computer in a cubicle, or a dark room, typing away. However, a large majority of your work in a real life environment involves collaborating with others and learning to communicate effectively. Unless you\'re working on a project completely by yourself, which usually doesn\'t happen in the job field, you need to be really good at talking and expressing your ideas with coworkers. That being said, a lot of my previous coding experiences were done completely solo, or with minor help from friends and family. It took a while before I got the experiences I needed to learn how to properly communicate and share my work with others. But when I figured that out, I realized that this new approach to communication was directly affecting my worldview for the better.'

  const p5 = document.createElement('p')
  p5.className = 'conclusion-para'
  p5.textContent = 'Overall, completing this project has helped me understand how my experiences connect to my worldview so much better. Even though each artifact in the website is from a completely different stage in my life, they all shaped my interests and progress in computer science. Through each of these experiences I have learnt so much more about programming, communicating, and problem solving. Being able to look back at each of these experiences has been a great opportunity, and has helped me learn a lot more about my past and how it still effects me today.'

  section.append(heading, p1, p2, p3, p4, p5)
  return section
}