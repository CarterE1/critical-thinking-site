import { createArtifactComponent } from './Artifact'
import type { ArtifactData } from './Artifact'
import { createNavigationSidebar } from './NavigationSidebar'
import { createIntroComponent } from './Intro'
import { createConclusionComponent } from './Conclusion'

import comp1 from '../assets/comp1.jpg'
import comp2 from '../assets/comp2.jpg'
import hack1 from '../assets/hack1.jpg'
import hack2 from '../assets/hack2.jpg'
import cn1 from '../assets/cn1.jpg'
import cn2 from '../assets/cn2.jpg'
import internship1 from '../assets/Internship1.png'
import internship2 from '../assets/Internship2.jpg'
import internship3 from '../assets/Internship3.jpg'
import minecraft1 from '../assets/minecraft1.jpg'

function createDivider(): HTMLDivElement {
  const divider = document.createElement('div')
  divider.className = 'ticks'
  return divider
}

const artifacts: ArtifactData[] = [
  {
    title: 'My Computer',
    images: [comp1, comp2],
    summary: 'Near the end of my freshman year of high school, I decided that I wanted to build my own computer. I didn’t know much about it at the time, so I spent tons of time researching and watching videos on how it worked. Even though building computers has gotten substantially easier over the years, I still had to learn about all the parts, and how they worked together. It was also really expensive, but I used the money that I had saved up from working at a pizza place to afford it. After building it, I’ve been using the same computer for over 4 years now. I use it for school work, video games, my own computer science projects, and more. Even though it hurt to spend that much time, effort, and money, I think it was worth it in the long run, and its still functioning well to this day.',
    reasoning: 'I wanted to write about my computer as an artifact because of how much value it has given me over the years. It was a really expensive purchase at the time, but I would say it has easily paid itself off in terms of use. I use it very consistently, pretty much daily, for all different kinds of reasons. I would say that the computer represents one of the first big investments I made into something I really cared about. On top of all of that though, the process of building it also taught me a lot about building computers and how they work. It also taught me how to research different parts, and how to make informed financial decisions. I had to compare different options, stay within my budget, and figure out something that would work for what I needed.',
    connectionToWorldview: 'Building and using my computer has had a really big impact on how I view technology, and even how I view my own growth over time. When I first built the computer, I mostly just wanted to use it to play video games with my friends. However, over the years it became much more than that. As my interest in computer science grew, I used the computer as an outlet to experiment and express my creativity. I learnt new programming languages with it, I started projects, and I did so much experimentation. Instead of just using it for entertainment, I started using it for classes, and to try to advance my knowledge of computer science. In this way, I would say that getting this computer really changed my life, and opened up so many new opportunities for me. Overall, I would say that this artifact connects to my worldview by showing how something as simple as a computer can become the foundation of my personal growth. It made me realize that having the right tools, and making the right investments into my future can make a huge difference once you give it time. Even simple decisions can have a long term impact on who I become.'
  },
  {
    title: 'My First Hackathon',
    images: [hack1, hack2],
    summary: 'Towards the end of my sophomore year of high school, me and some of my friends decided to enter ourselves into a local hackathon. For those unfamiliar, a hackathon is an event where typically small groups of programmers will work together to create a project in a short amount of time. In our case, we had 8 hours to finish a project. Some hackathons will give you a theme to guide your project, but we didn’t have one, so we decided to make a video game about fishing. At this point in time, I didn’t have much coding experience, so I was really nervous. By the end of the day however, we made a project that I was proud of. We were also lucky enough to win a prize for Best User Experience, which netted us all a free monitor.',
    reasoning: 'I wanted to write about this hackathon, because this was one of the first projects I ever worked on from start to finish. It has always been hard for me to fully dedicate myself to a project and finish it all the way. That being said, it was really refreshing to come out of this with a working game, and the entire experience was very valuable. I really enjoyed working with my team of friends, and I was taught a lot about the process of finishing and publishing a game. This experience definitely solidified my desire to become a computer scientist, and it made me really excited for my future.',
    connectionToWorldview: 'Before doing this hackathon, I had always really struggled with the idea of actually finishing a project all the way. I would constantly start something new that seemed interesting, just to lose motivation halfway through and move onto something else. I repeated this cycle so many times that I lost count. This experience was different though, I actually had a deadline for the project, and I couldn’t just stop halfway. That being said, I really enjoyed having the pressure of a deadline, because it made me rethink how I approached the project. It forced me to just commit and push myself to finish the project, instead of overthinking all of the small details. Another thing that really stuck with me from this experience was how fun the whole process was in general. Going into the hackathon I was super nervous, and honestly had no clue what was going to happen. However, once I got started I realized how much I love doing stuff like this. Being able to turn an idea from a conversation between my friends into a fully functioning game was awesome. It made me think of computer science less as a school subject, and more as a creative way to express my ideas. On top of all that, we were actually lucky enough to come out with a prize for Best User Experience, which only solidified those feelings. Overall, this experience made me rethink how I view computer science, and helped me to express my creativity.'
  },
  {
    title: 'Working at Code Ninjas',
    images: [cn1, cn2],
    summary: 'Around March of 2023, I got the opportunity to start working at a place called Code Ninjas, thanks to some of my friends who already worked there. I kept working there until June of 2025, when I moved to my other internship at JPMorgan Chase. Throughout the over 2 years that I worked there, I had a really great experience. My main job was to help younger kids learn how to code by creating their own games. We would guide them through the basic concepts of programming and help them with their mistakes as they improved. We also ran some really fun camps over the summer where kids would work on larger projects throughout the week. Overall, being able to work with my friends and teach something that I was passionate about was really fun (and I got paid).',
    reasoning: 'The reason that I chose to write about my time at Code Ninjas is because it was a very unique experience teaching kids how to code. Since I was already super passionate about programming, and making games specifically, landing this job felt like I hit the lottery. Instead of doing boring repetitive tasks, I was constantly interacting with new kids and teaching them what I knew. This was definitely the first time I held a leadership/teaching role as well, which meant everything felt new to me. That being said, I caught on pretty quick, and being able to help people understand new concepts and seeing them get excited about it was really rewarding. On top of all of that, I was also improving my own programming skills as I was forced to learn new things before teaching the kids.',
    connectionToWorldview: 'Working at Code Ninjas had a huge impact on how I view computer science, as well as what my role in the field would be. Before this job I had only really worked on my own personal projects, and improving my own skills. However this job kind of shifted my perspective by showing me the importance of sharing your knowledge with others. It’s one thing to know how to do something, but being able to understand it deeply enough to explain it to someone who knows nothing about it is totally different. It was very interesting to me to see how differently people learn. Working with younger kids is interesting, because they all work at different paces, and some were much quicker at learning concepts then others. This made it a lot more challenging, but also taught me a lot about problem solving and conveying information in general. Overall, I would say this job made me see computer science as something more than just a personal skill or set of knowledge. It made me realize that everything that I’ve taught myself over the years can be shared and used to help others grow. On top of improving my coding skills, working here changed how I interact with people, and how I think about learning itself.'
  },
  {
    title: 'JPMorgan Chase Internship',
    images: [internship1, internship2, internship3],
    summary: 'Right before the summer of 2025, I got word from one of my high school teachers that I had the option to apply for a software engineering internship at JPMorgan Chase, which was a massive opportunity. Not only would I be getting an internship right out of high school, but it would be for the largest bank in the United States! After a very nerve-racking application process, I was told that I had landed the internship, and I started right away. I had an amazing experience throughout the summer, and I learned so much about the field that I wanted to work in some day. I met lots of really cool people, and made very valuable connections as well.',
    reasoning: 'The reason I chose this internship as an artifact to write about, is because it is probably the largest step I have ever made towards my career path. Landing an internship can be really challenging for a lot of people, and being able to put this on my resume meant so much to me. I believe that this internship changed my future in many ways, and I\'m very excited to see where the momentum takes me. The entire experience taught me a lot about how my future would look, and what kind of work people in my field actually do. It was also really refreshing to talk to different people who shared similar interests and experiences as me. From the other interns I was working with, to the full time employees, everyone had valuable information to share.',
    connectionToWorldview: 'As I talked about a little bit in the reasoning, this internship was a very eye opening experience for me, in terms of my future and the field I want to work in. Since I had zero real world experience before this internship, I really had no idea what I was getting in to. All I knew was that I enjoyed programming and I loved problem solving. What I didn\'t realize at the time was that the entire job was essentially just one big puzzle that I had to solve. From learning about the project I was going to be working on, to teaching myself how to use the different tools they provided, it was a really fun experience. Actually being able to get that real world experience completely reshaped my view of the career, and gave me a much better understanding of what it was like to work as a software engineer. Another huge aspect of the job was being able to work with a team and communicate effectively with your coworkers. This also had a big impact on me, as I had never really had the need to work with a team before this job. It was a learning experience, and definitely changed how I now interact with other people when working on a project. Overall, this experience didn\'t just effect my career, but also changed how I view computer science in general, and how I interact with my peers.'
  },
  {
    title: 'Minecraft',
    images: [minecraft1],
    summary: 'For as long as I can remember, Minecraft has always been a part of my life. The first time I remember playing it was on my moms phone when I was a really young child. Over time, I think I have downloaded Minecraft on pretty much every device I have owned. My phone, computer, laptop, console, etc. have all been installed with Minecraft at some point. It is one of those games that I always come back to, whether I just want to relax on my own, or start a world and play with my friends. Over time, Minecraft became more than just a game to me, and I would say it has really effected my life and my worldview throughout the years.',
    reasoning: 'I chose to write about Minecraft because of how big of an impact it had on my interests, especially when it comes to gaming and computer science. It was probably the first game I ever played that got me really interested in how games actually worked. I wanted to see the real code behind the game, and I thought it was fascinating how all of the text and numbers turned into such a fun video game. I remember messing around with the files, and trying to write my own code into the game from a young age. I may not have realized it at the time, but this was one of my first introductions to coding. This interest was carried outside of Minecraft, as I also started trying to make my own games. Instead of just playing the game, I was trying to understand how everything worked, so I could then try to make something myself.',
    connectionToWorldview: 'Minecraft has had a huge impact on how I view both creativity, and learning in general. Looking back, it has helped me realize that you can learn something from everything. Being curious and experimenting with something you enjoy can be really beneficial, and can teach you a lot of stuff you didn’t know. When I was messing with the files of Minecraft and trying to modify it myself, I never thought to look up tutorials, but I still learned so much just by experimenting. Something interesting that I think is worth bringing up too, is how creative of a game Minecraft is. Even though there is an “end” to the game, there are no strict guidelines on how to get there. I think this transfers over to life, because even though there is eventually going to be an end, you have the ability to be creative and choose how you want to spend it. There isn’t always a correct way to do something, so there is a lot of value that comes from just trying new things. Overall, Minecraft connects to my worldview because it shows how much curiosity and experimentation can lead to growth in the long run. Even though it started as just a game, it got me interested in programming, and creating my own projects. It also showed me that some of the most important skills and knowledge in life can come from just exploring something that you enjoy.'
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
