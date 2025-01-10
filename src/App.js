import './App.css';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume'

function App() {

  const resumeData = {
    name: 'Dinesh',
    title: 'MERN Full Stack Developer',
    contact: {
      email: 'dineshgbharati@email.com',
      phone: '(123) 456-7890',
      location: 'San Jose, CA',
      linkedin: '#',
      github: '#',
    },
    education: {
      degree: 'Bachelor of Technology, Computer Engineering',
      institution: 'R C Patel Institute of Technology',
      year: '2006 - 2010',
      location: 'Shirpur, India',
    },
    skills: [
      'JIRA',
      'Amazon Web Services (AWS)',
      'Jenkins',
      'TensorFlow',
      'Spring Boot',
      'Apache Hadoop',
      'IDPS',
      'React Native',
      'Oracle',
    ],
    workExperience: [
      {
        title: 'Director of Software Engineering',
        company: 'Adobe',
        dates: '2019 - current',
        responsibilities: [
          'Managed cross-functional team on Jira, increasing production velocity by 23%.',
          'Integrated IDPS into systems, decreased successful attacks to less than 1%.',
          'Boosted processes through Jenkins-based workflows, improving quality of software by 54%.',
          'Achieved a 97% Net Promoter Score and a 4.7 out of 5 rating from end users for team’s projects.',
        ],
      },
      {
        title: 'Senior Engineering Manager',
        company: 'PayPal',
        dates: '2014 - 2019',
        responsibilities: [
          'Resolved app incompatibility issues, reducing incidents by 92%.',
          'Automated 80% of repetitive processes, enhancing developer productivity.',
          'Improved average app density defects by 31%.',
          'Delivered a seamless user satisfaction rating of 94% through customer feedback surveys.',
        ],
      },
      {
        title: 'Principal Software Engineer',
        company: 'Intel',
        dates: '2010 - 2014',
        responsibilities: [
          'Optimized storage & data processing through Apache Hadoop, resulting in a 47% increase in current speed.',
          'Delivered seamless app integrations for browsers with reduced page loads by 15%.',
          'Designed redundancy systems, boosting reliability by 28%.',
        ],
      },
    ],
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Resume {...resumeData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
