import { useState } from 'react'
import Project from './stories/Project.jsx'
import evaEMRImage from  './assets/img/evaemr.png'
import goodFakeImage from './assets/img/goodfake.png'
import situationLineImage from './assets/img/situationline.png'
import mySquadImage from './assets/img/mysquad.png'
import makeupAssistImage from './assets/img/makeupassist.png'
import memoryReplayImage from './assets/img/memoryreplay.png'
import thought2textImage from './assets/img/thought2text.png'
import protestBookImage from './assets/img/protestbook.png'



import './App.css'


function App() {
    const [projects, setProjects] = useState([
        {
            title: 'Situation Line',
            cardimage: situationLineImage,
            description: 'Story based adventure game with real time updates built using React Native and Expo. Available on iOS and Android Stores',
            site: ''
        },
        {
            title: 'MySquad',
            cardimage: mySquadImage,
            description: 'Private Social Media network with AI image generating fun for you and your closest friends ',
            site: ''
        },
        {
            title: 'EVA EMR',
            cardimage: evaEMRImage,
            description: 'AI powered EMR which allows doctors to either record medical appointments via a microphone or allow a doctor to dictate patient notes after the fact and then generats the perfect office note and claim for the doctor via AI.',
            site: ''
        },
        {
            title: 'Memory Replay',
            cardimage: memoryReplayImage,
            description: 'Hook up your spy glasses to AI vision detection. Concept project where you recall recorded FPV footage onto an app to show a previous IRL interaction',
            site: ''
        },
        {
            title: 'Thought2Text',
            cardimage: thought2textImage,
            description: 'Using raw EEG data extracted from an Emotiv Insight, then matched up with user dictated thoughts, we use machine learning to auto record thoughts/hallucinations',
            site: ''
        },
        {
            title: 'Protest Book',
            cardimage: protestBookImage,
            description: 'A unique chatbot for government employees to reduce any harm from protests. Uses AI to search to see better avenues of protests for current live protests, or readily made documentation to assist in reducing voltatlity of public protests.',
            site: ''
        },
        {
            title: 'GoodFake',
            cardimage: goodFakeImage,
            description: 'Allows you to take a comic book, and then choose a character and allow you to replace that character with your own face',
            site: ''
        },
        {
            title: 'Make Up Assist app',
            cardimage: makeupAssistImage,
            description: 'Allows user to take out camera, and use a photoshop like interface to allow users to put virtual makeup on their live faces to see how it looks like before using it',
            site: ''
        },

    ])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="container">
          {projects.map((project, index) => (
              <Project key={index} title={project.title} cardimage={project.cardimage} description={project.description} />
          ))}
      </div>
    </>
  )
}

export default App
