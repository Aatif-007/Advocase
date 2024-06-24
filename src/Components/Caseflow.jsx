import React from 'react';

const Caseflow = () => {
  return (
    <div className="flex flex-col w-[60] h-screen p-4 bg-gray-50">
      <h2 className="font-semibold mb-4">Case flow</h2>
      <p className='text-blue-600'>Select the document for drafting</p>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="font-bold text-blue-600"> <li>Pre litigation</li></h3>
          <div className="mt-2 space-y-2">
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Legal Notice</p>
              <p>Notifies the opposing party of the dispute and demands resolution.</p>
            </div>
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Reply to Legal Notice</p>
              <p>A response to a legal notice received from the opposing party.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-blue-600"> <li>Litigation</li></h3>
          <div className="mt-2 space-y-2">
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Plaint/Complaint</p>
              <p>Initiates the lawsuit, detailing the plaintiff's claims.</p>
            </div>
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Vakalatnama</p>
              <p>Authorizes a lawyer to represent the client in court.</p>
            </div>
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Written Statement/Answer</p>
              <p>The defendant's formal response to the plaint.</p>
            </div>
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Reply to Written Statement</p>
              <p>Addresses points raised in the defendant's written statement.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-blue-600"><li>Interlocutory Applications</li></h3>
          <div className="mt-2 space-y-2">
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Application for Temporary Injunction</p>
              <p>Seeks immediate court intervention to preserve status quo.</p>
            </div>
            <div className="p-2 bg-white border rounded shadow">
              <p className="font-semibold">Counter-Affidavit to Opposition's Application</p>
              <p>Responds to interlocutory applications from the opposing party.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caseflow;
