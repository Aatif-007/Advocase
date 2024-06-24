import  { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'Was the dog on a leash or under the control of the owner at the time of the incident?',
    reason: 'This question aims to establish whether the owner was negligent in controlling the dog, which is crucial for proving liability.'
  },
  {
    id: 2,
    text: 'Did the dog show any signs of aggression or previous violent behaviour before the incident?',
    reason: 'This question is important to demonstrate the owner\'s knowledge of the dog\'s aggressive tendencies, which can support the claim of negligence.'
  },
  {
    id: 3,
    text: 'Were there any warning signs or notices indicating the presence of a dangerous dog on the owner\'s property?',
    reason: 'This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger posed by the dog.'
  },
  {
    id: 4,
    text: 'Has the dog been involved in similar incidents of biting or aggression in the past?',
    reason: 'This question is relevant to establish a pattern of behaviour and the owner\'s awareness of the dog\'s propensity for aggression.'
  },
  {
    id: 5,
    text: 'Did the owner take immediate steps to assist or provide medical aid to the victim after the dog bite incident?',
    reason: 'This question addresses the owner\'s duty of care and responsibility towards the victim following the incident.'
  },
  {
    id: 6,
    text: 'Can you provide any evidence of communication or interaction with the owner regarding the dog\'s behaviour prior to the incident?',
    reason: ''
  }
];

function ContentQuestion() {
  const [selected, setSelected] = useState('Petitioner');

  return (
    <div className=" p-4 m-2 w-[70%] h-full bg-white shadow-xl rounded">
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 ${selected === 'Petitioner' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelected('Petitioner')}
        >
          By Petitioner
        </button>
        <button
          className={`px-4 py-2 ${selected === 'Respondent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelected('Respondent')}
        >
          By Respondent
        </button>
      </div>

      <div>
        {questions.map(question => (
          <div key={question.id} className="mb-4">
            <div className="font-bold">{question.id}. {question.text}</div>
            {question.reason && <div className="text-sm text-gray-600">Reason - {question.reason}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentQuestion;
