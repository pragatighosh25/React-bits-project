import React from "react";
import PillNav from "./components/PillNav.jsx";
import "./App.css";
import logo from "./assets/react.svg";
import LiquidEther from "./components/LiquidEther.jsx";
import TextType from "./components/TextType.jsx";
import GlassButton from "./components/GlassButton.jsx";
import CardSwap, { Card } from "./components/CardSwap.jsx";

function App() {
  return (
    <div className="App relative min-h-screen overflow-hidden bg-black">
      {/* Navigation Bar */}
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav z-20"
        ease="power2.easeOut"
        baseColor="transparent"        // transparent nav background
        pillColor="#ffffff"            // pill fill
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"        // pill text
      />

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 gap-12">
        {/* Left: Text + Button */}
        <div className="flex flex-col items-start justify-center text-left max-w-lg">
          <TextType
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            text={["Text typing effect", "for your websites", "Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
          <GlassButton />
        </div>

        {/* Right: Card Animation */}
        <div className="relative w-full md:w-auto flex justify-center">
          <div style={{ width: "300px", height: "400px", position: "relative" }}>
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
              <Card>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
