import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Reserved for future scripts or animations
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-950 text-blue-100">
      {/* Header Section */}
      <header className="w-full p-10 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Battery Management System AI Assistant
        </h1>
        <p className="mt-3 text-base md:text-lg max-w-2xl text-blue-200">
          Your AI-powered companion for mastering battery system design, safety, and troubleshooting.
        </p>
      </header>

      {/* Chatbot Embed */}
      <div className="fixed bottom-0 right-0 left-0 flex justify-center items-center z-50 w-full">
        <div className="relative w-[90%] max-w-[420px] h-[20vh] md:h-[580px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://interfaces.zapier.com/embed/chatbot/cm9ikfav7000rj6uyaflqlpln"
            allow="clipboard-write *"
            style={{
              border: 'none',
              borderRadius: '16px',
              width: '100%',
              height: '100%'
            }}
            title="Battery Management System AI Assistant"
          ></iframe>

          {/* Mask Zapier Branding */}
          <div 
            className="absolute bottom-0 left-0 w-full h-9 bg-blue-950"
            style={{
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              zIndex: 10
            }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-blue-300 py-5 mt-24 md:mt-52">
        <p className="text-left text-sm md:text-base">
          © 2025 Battery Management System AI Assistant. Powering future engineers.
        </p>
      </footer>
    </div>
  );
}

export default App;
