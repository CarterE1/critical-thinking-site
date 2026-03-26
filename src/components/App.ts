import { createArtifactComponent } from './Artifact'
import type { ArtifactData } from './Artifact'
import { createNavigationSidebar } from './NavigationSidebar'
import { createIntroComponent } from './Intro'
import { createConclusionComponent } from './Conclusion'

function createDivider(): HTMLDivElement {
  const divider = document.createElement('div')
  divider.className = 'ticks'
  return divider
}

const artifacts: ArtifactData[] = [
  {
    title: 'JPMorgan Chase Internship',
    images: ['/src/assets/Internship1.png'],
    summary: 'Right before the summer of 2025, I got word from one of my high school teachers that I had the option to apply for a software engineering internship at JPMorgan Chase, which was a massive opportunity. Not only would I be getting an internship right out of high school, but it would be for the largest bank in the United States! After a very nerve-racking application process, I was told that I had landed the internship, and I started right away. I had an amazing experience throughout the summer, and I learned so much about the field that I wanted to work in some day. I met lots of really cool people, and made very valuable connections as well.',
    reasoning: 'The reason I chose this internship as an artifact to write about, is because it is probably the largest step I have ever made towards my career path. Landing an internship can be really challenging for a lot of people, and being able to put this on my resume meant so much to me. I believe that this internship changed my future in many ways, and I\'m very excited to see where the momentum takes me. The entire experience taught me a lot about how my future would look, and what kind of work people in my field actually do. It was also really refreshing to talk to different people who shared similar interests and experiences as me. From the other interns I was working with, to the full time employees, everyone had valuable information to share.',
    connectionToWorldview: 'As I talked about a little bit in the reasoning, this internship was a very eye opening experience for me, in terms of my future and the field I want to work in. Since I had zero real world experience before this internship, I really had no idea what I was getting in to. All I knew was that I enjoyed programming and I loved problem solving. What I didn\'t realize at the time was that the entire job was essentially just one big puzzle that I had to solve. From learning about the project I was going to be working on, to teaching myself how to use the different tools they provided, it was a really fun experience. Actually being able to get that real world experience completely reshaped my view of the career, and gave me a much better understanding of what it was like to work as a software engineer. Another huge aspect of the job was being able to work with a team and communicate effectively with your coworkers. This also had a big impact on me, as I had never really had the need to work with a team before this job. It was a learning experience, and definitely changed how I now interact with other people when working on a project. Overall, this experience didn\'t just effect my career, but also changed how I view computer science in general, and how I interact with my peers.'
  },
  {
    title: 'Artifact #2',
    images: [],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet',
    reasoning: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum.',
    connectionToWorldview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet. Sed enim ipsum, blandit sed sem id, mattis tincidunt magna. Donec rhoncus elit non rhoncus vulputate. Mauris ut tellus nisi. Quisque consectetur odio at eros consequat aliquet. Fusce mattis elementum augue at cursus. Ut mollis facilisis justo vel aliquet. Mauris pellentesque, nibh semper gravida fermentum, orci ex iaculis nisl, sed faucibus nisi eros vitae velit. Aenean ex erat, tincidunt sed lacus non, molestie suscipit enim.'
  },
  {
    title: 'Artifact #3',
    images: [],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet',
    reasoning: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum.',
    connectionToWorldview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue aliquet diam et posuere. Donec bibendum erat feugiat tristique consectetur. Sed iaculis orci a mauris convallis rhoncus. Vivamus posuere nulla nec odio sodales sagittis. Pellentesque facilisis nec sem vitae interdum. Ut magna sapien, laoreet pretium nisl eget, consectetur ornare urna. In pellentesque ligula eget odio suscipit, vitae fermentum lacus interdum. Suspendisse pulvinar justo turpis, et accumsan urna lobortis quis. Nullam ornare tristique euismod. Sed vitae congue sapien, vel bibendum felis. Morbi faucibus lacinia dui. Sed accumsan accumsan ex a egestas. Quisque et consectetur enim. Cras varius nisl et congue dictum. Nunc molestie urna mi, et mollis massa placerat sit amet. Sed enim ipsum, blandit sed sem id, mattis tincidunt magna. Donec rhoncus elit non rhoncus vulputate. Mauris ut tellus nisi. Quisque consectetur odio at eros consequat aliquet. Fusce mattis elementum augue at cursus. Ut mollis facilisis justo vel aliquet. Mauris pellentesque, nibh semper gravida fermentum, orci ex iaculis nisl, sed faucibus nisi eros vitae velit. Aenean ex erat, tincidunt sed lacus non, molestie suscipit enim.'
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
