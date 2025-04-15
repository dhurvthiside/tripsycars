import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Optional: Add GSAP animations or other JavaScript if needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-900 text-white">
      {/* Header Section */}
      <header className="w-full text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Mechanical Engineering AI Chatbot</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          The ultimate assistant for all your mechanical engineering questions.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col items-center space-y-8">
        <div className="relative flex items-center justify-center w-full px-4">
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
          <div className="relative z-10 text-center p-6 md:p-8 max-w-md mx-auto bg-black rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              Ask Anything About Mechanical Engineering
            </h2>
            <p className="text-gray-400 mb-6">
              Get clear, concise, and accurate answers to your technical questions, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Iframe Chatbot Embed with Branding Cover */}
      <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-[400px]">
        <div className="relative w-full h-[70vh] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://interfaces.zapier.com/embed/chatbot/cm9ikfav7000rj6uyaflqlpln"
            allow="clipboard-write *"
            style={{
              border: 'none',
              borderRadius: '12px',
              width: '100%',
              height: '100%'
            }}
            title="Mechanical Engineering AI Chatbot"
          ></iframe>

          {/* Overlay to hide Zapier branding */}
          <div 
            className="absolute bottom-0 left-0 w-full h-8 bg-gray-900"
            style={{
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              zIndex: 10
            }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-6 mt-20 md:mt-60">
        <p className="text-center text-lg">© 2025 Mechanical Engineering AI Chatbot. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
