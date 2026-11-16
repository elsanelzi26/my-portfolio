import React from 'react';
import { FileText, Download } from 'lucide-react';

function Resume({ darkMode }) {
  // Jalur PDF disesuaikan dengan folder public/pdf/resume.pdf
  const pdfUrl = `${import.meta.env.BASE_URL}pdf/Resume.pdf`;

  return (
    <section
      id="resume"
      className={`min-h-screen py-28 px-6 md:px-16 transition-colors duration-300 flex items-center justify-center ${
        darkMode ? 'bg-[#09090d] text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-3xl w-full text-center">
        
        {/* Title */}
        <h2 className="font-serif text-4xl font-bold md:text-5xl mb-6">
          Resume Saya
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-violet-600" />

        <p className={`mb-8 text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Anda dapat melihat pratinjau resume saya atau mengunduhnya langsung melalui tombol di bawah ini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          
          {/* Tombol Lihat / Buka PDF di Tab Baru */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-violet-600 text-white hover:bg-violet-700 transition shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Lihat Resume (PDF)
          </a>

          {/* Tombol Download PDF */}
          <a
            href={pdfUrl}
            download="CV_Elsan_Elzi.pdf"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition shadow-sm ${
              darkMode 
                ? 'border-white/10 bg-[#151519] hover:bg-white/10 text-white' 
                : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800'
            }`}
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resume;