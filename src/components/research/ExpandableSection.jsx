// ExpandableTableSection.jsx
import { useState } from "react";
export default function ExpandableTableSection({ title, tables }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button 
        className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-secondary">{title}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-6">
            {tables.map((table, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-700 mb-3">{table.title}</h4>
                {table.component}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
