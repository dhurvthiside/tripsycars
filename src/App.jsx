import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Optional: Add GSAP animations or other JavaScript if needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Header Section */}
      <header className="w-full text-center p-8 text-white">
        <h1 className="text-5xl font-bold tracking-tight">Mechanical Engineering AI Chatbot</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          The ultimate assistant for all your mechanical engineering questions.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col items-center space-y-8">
        {/* Hero Section */}
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
          <div className="relative z-10 text-center p-8 max-w-md mx-auto bg-black rounded-lg shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4">Ask Anything About Mechanical Engineering</h2>
            <p className="text-gray-400 mb-6">
              Get clear, concise, and accurate answers to your technical questions, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Iframe Chatbot Embed */}
      <div className="absolute bottom-4 right-4 z-50">
        <iframe 
          src="https://interfaces.zapier.com/embed/chatbot/cm9ikfav7000rj6uyaflqlpln" 
          height="600px" 
          width="400px" 
          allow="clipboard-write *" 
          style={{ border: 'none', borderRadius: '12px' }} 
          title="Mechanical Engineering AI Chatbot"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-6 mt-60">
        <p className="text-center text-lg">© 2025 Mechanical Engineering AI Chatbot. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
