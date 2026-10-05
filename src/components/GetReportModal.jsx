// src/components/GetReportModal.jsx
import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function GetReportModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 my-8 border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Report Ready!</h3>
            <p className="text-slate-600">Your PDF download for the Global Skills Report 2026 has started.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Free PDF Download</span>
                <h2 className="text-xl font-bold text-slate-900">Global Skills Report 2026</h2>
              </div>
            </div>

            <p className="text-slate-600 text-sm mb-6">
              Get detailed insights into trending skills, digital transformation, workforce readiness, and hiring trends across top industries.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Report (PDF)
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}