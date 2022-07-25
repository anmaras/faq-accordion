import React, { Component } from 'react';
import FaqAccordionLogo from './Components/Logo/FaqAccordionLogo';
import FaqAccordionSection from './Components/FaqSection/FaqAccordionSection';
import './App.css';

const FAQ = [
  {
    question: `How many team members can I invite?`,
    answer: `You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.`,
  },
  {
    question: `What is the maximum file upload size?`,
    answer: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  },
  {
    question: ` How do I reset my password?`,
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.`,
  },
  {
    question: `Can I cancel my subscription?`,
    answer: `Yes! Send us a message and we’ll process your request no questions asked.
`,
  },
  {
    question: `Do you provide additional support?`,
    answer: ` Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaqAccordionLogo />
        <FaqAccordionSection faq={FAQ} />
      </div>
    );
  }
}

export default App;
