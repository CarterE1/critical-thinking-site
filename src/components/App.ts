import { createArtifactComponent } from './Artifact'
import type { ArtifactData } from './Artifact'
import { createNavigationSidebar } from './NavigationSidebar'
import { createIntroComponent } from './Intro'
import { createConclusionComponent } from './Conclusion'

import internship1 from '../assets/Internship1.png'

function createDivider(): HTMLDivElement {
  const divider = document.createElement('div')
  divider.className = 'ticks'
  return divider
}

const artifacts: ArtifactData[] = [
  {
    title: 'JPMorgan Chase Internship',
    images: [internship1],
    summary: 'Right before the summer of 2025, I got word from one of my high school teachers that I had the option to apply for a software engineering internship at JPMorgan Chase, which was a massive opportunity. Not only would I be getting an internship right out of high school, but it would be for the largest bank in the United States! After a very nerve-racking application process, I was told that I had landed the internship, and I started right away. I had an amazing experience throughout the summer, and I learned so much about the field that I wanted to work in some day. I met lots of really cool people, and made very valuable connections as well.',
    reasoning: 'The reason I chose this internship as an artifact to write about, is because it is probably the largest step I have ever made towards my career path. Landing an internship can be really challenging for a lot of people, and being able to put this on my resume meant so much to me. I believe that this internship changed my future in many ways, and I\'m very excited to see where the momentum takes me. The entire experience taught me a lot about how my future would look, and what kind of work people in my field actually do. It was also really refreshing to talk to different people who shared similar interests and experiences as me. From the other interns I was working with, to the full time employees, everyone had valuable information to share.',
    connectionToWorldview: 'As I talked about a little bit in the reasoning, this internship was a very eye opening experience for me, in terms of my future and the field I want to work in. Since I had zero real world experience before this internship, I really had no idea what I was getting in to. All I knew was that I enjoyed programming and I loved problem solving. What I didn\'t realize at the time was that the entire job was essentially just one big puzzle that I had to solve. From learning about the project I was going to be working on, to teaching myself how to use the different tools they provided, it was a really fun experience. Actually being able to get that real world experience completely reshaped my view of the career, and gave me a much better understanding of what it was like to work as a software engineer. Another huge aspect of the job was being able to work with a team and communicate effectively with your coworkers. This also had a big impact on me, as I had never really had the need to work with a team before this job. It was a learning experience, and definitely changed how I now interact with other people when working on a project. Overall, this experience didn\'t just effect my career, but also changed how I view computer science in general, and how I interact with my peers.'
  },
  {
    title: 'My First Hackathon',
    images: [],
    summary: 'Towards the end of my sophomore year of high school, me and some of my friends decided to enter ourselves into a local hackathon. For those unfamiliar, a hackathon is an event where typically small groups of programmers will work together to create a project in a short amount of time. In our case, we had 8 hours to finish a project. Some hackathons will give you a theme to guide your project, but we didn’t have one, so we decided to make a video game about fishing. At this point in time, I didn’t have much coding experience, so I was really nervous. By the end of the day however, we made a project that I was proud of. We were also lucky enough to win a prize for Best User Experience, which netted us all a free monitor.',
    reasoning: 'I wanted to write about this hackathon, because this was one of the first projects I ever worked on from start to finish. It has always been hard for me to fully dedicate myself to a project and finish it all the way. That being said, it was really refreshing to come out of this with a working game, and the entire experience was very valuable. I really enjoyed working with my team of friends, and I was taught a lot about the process of finishing and publishing a game. This experience definitely solidified my desire to become a computer scientist, and it made me really excited for my future.',
    connectionToWorldview: 'Before doing this hackathon, I had always really struggled with the idea of actually finishing a project all the way. I would constantly start something new that seemed interesting, just to lose motivation halfway through and move onto something else. I repeated this cycle so many times that I lost count. This experience was different though, I actually had a deadline for the project, and I couldn’t just stop halfway. That being said, I really enjoyed having the pressure of a deadline, because it made me rethink how I approached the project. It forced me to just commit and push myself to finish the project, instead of overthinking all of the small details. Another thing that really stuck with me from this experience was how fun the whole process was in general. Going into the hackathon I was super nervous, and honestly had no clue what was going to happen. However, once I got started I realized how much I love doing stuff like this. Being able to turn an idea from a conversation between my friends into a fully functioning game was awesome. It made me think of computer science less as a school subject, and more as a creative way to express my ideas. On top of all that, we were actually lucky enough to come out with a prize for Best User Experience, which only solidified those feelings. Overall, this experience made me rethink how I view computer science, and helped me to express my creativity.'
  },
  {
    title: 'Working at Code Ninjas',
    images: [],
    summary: 'Around March of 2023, I got the opportunity to start working at a place called Code Ninjas, thanks to some of my friends who already worked there. I kept working there until June of 2025, when I moved to my other internship at JPMorgan Chase. Throughout the over 2 years that I worked there, I had a really great experience. My main job was to help younger kids learn how to code by creating their own games. We would guide them through the basic concepts of programming and help them with their mistakes as they improved. We also ran some really fun camps over the summer where kids would work on larger projects throughout the week. Overall, being able to work with my friends and teach something that I was passionate about was really fun (and I got paid).',
    reasoning: 'The reason that I chose to write about my time at Code Ninjas is because it was a very unique experience teaching kids how to code. Since I was already super passionate about programming, and making games specifically, landing this job felt like I hit the lottery. Instead of doing boring repetitive tasks, I was constantly interacting with new kids and teaching them what I knew. This was definitely the first time I held a leadership/teaching role as well, which meant everything felt new to me. That being said, I caught on pretty quick, and being able to help people understand new concepts and seeing them get excited about it was really rewarding. On top of all of that, I was also improving my own programming skills as I was forced to learn new things before teaching the kids.',
    connectionToWorldview: 'Working at Code Ninjas had a huge impact on how I view computer science, as well as what my role in the field would be. Before this job I had only really worked on my own personal projects, and improving my own skills. However this job kind of shifted my perspective by showing me the importance of sharing your knowledge with others. It’s one thing to know how to do something, but being able to understand it deeply enough to explain it to someone who knows nothing about it is totally different. It was very interesting to me to see how differently people learn. Working with younger kids is interesting, because they all work at different paces, and some were much quicker at learning concepts then others. This made it a lot more challenging, but also taught me a lot about problem solving and conveying information in general. Overall, I would say this job made me see computer science as something more than just a personal skill or set of knowledge. It made me realize that everything that I’ve taught myself over the years can be shared and used to help others grow. On top of improving my coding skills, working here changed how I interact with people, and how I think about learning itself.'
  },
  {
    title: 'Artifact #4',
    images: [],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet',
    reasoning: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum.',
    connectionToWorldview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet. Sed enim ipsum, blandit sed sem id, mattis tincidunt magna. Donec rhoncus elit non rhoncus vulputate. Mauris ut tellus nisi. Quisque consectetur odio at eros consequat aliquet. Fusce mattis elementum augue at cursus. Ut mollis facilisis justo vel aliquet. Mauris pellentesque, nibh semper gravida fermentum, orci ex iaculis nisl, sed faucibus nisi eros vitae velit. Aenean ex erat, tincidunt sed lacus non, molestie suscipit enim.'
  },
  {
    title: 'Artifact #5',
    images: [],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet',
    reasoning: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum.',
    connectionToWorldview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet. Sed enim ipsum, blandit sed sem id, mattis tincidunt magna. Donec rhoncus elit non rhoncus vulputate. Mauris ut tellus nisi. Quisque consectetur odio at eros consequat aliquet. Fusce mattis elementum augue at cursus. Ut mollis facilisis justo vel aliquet. Mauris pellentesque, nibh semper gravida fermentum, orci ex iaculis nisl, sed faucibus nisi eros vitae velit. Aenean ex erat, tincidunt sed lacus non, molestie suscipit enim.'
  }
]

export function createApp(): HTMLElement {
  const app = document.createElement('div')
  app.className = 'app-container'

  // Create sidebar
  const sidebar = createNavigationSidebar(artifacts)
  app.appendChild(sidebar)

  // Create main content container
  const mainContent = document.createElement('main')
  mainContent.className = 'main-content'

  // Add intro
  mainContent.appendChild(createIntroComponent())
  mainContent.appendChild(createDivider())

  // Add artifacts
  artifacts.forEach((artifact, index) => {
    const artifactElement = createArtifactComponent(artifact)
    artifactElement.id = `artifact-${index}`
    mainContent.appendChild(artifactElement)
    if (index < artifacts.length - 1) {
      mainContent.appendChild(createDivider())
    }
  })

  mainContent.appendChild(createDivider())

  // Add conclusion
  mainContent.appendChild(createConclusionComponent())

  const spacer = document.createElement('section')
  spacer.id = 'spacer'
  mainContent.appendChild(spacer)

  app.appendChild(mainContent)

  return app
}
