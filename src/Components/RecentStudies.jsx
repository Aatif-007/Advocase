

const recentStudies = [
  { title: 'Dog Bite Complaint', status: 'Completed' },
  { title: 'The Cyberbullying Conspiracy', status: 'Completed' },
  { title: 'The Data Breach Dilemma', status: 'In Progress' },
  { title: 'The Data Breach Dilemma', status: 'Failed' },
];

function RecentStudies() {
  return (
    <div className=" flex w-[25%] h-[30rem] flex-col p-4 mt-2 bg-white shadow rounded mb-4 overflow-hidden">
      <h2 className="text-lg  font-bold mb-4 pt-0">Recent Studies</h2>
      {recentStudies.map((study, index) => (
        <div key={index} className="flex justify-between items-center p-2 border-b">
          <span className='sm:text-sm'>{study.title}</span>
          <span className={`text-sm ${study.status === 'Completed' ? 'text-green-500' : study.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
            {study.status}
          </span>
        </div>
      ))}
    </div>
  );
}
export default RecentStudies;