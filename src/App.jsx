import React from "react";
import PillNav from "./components/PillNav.jsx";
import "./App.css";
import logo from "./assets/react.svg";
import LiquidEther from "./components/LiquidEther.jsx";
import BlurText from "./components/BlurText.jsx";
import TextType from "./components/TextType.jsx";
import Button from "./components/Button.jsx";
import GlassButton from "./components/GlassButton.jsx";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-black">
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
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
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

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[600px] gap-12">
        <TextType className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
          text={["Text typing effect", "for your websites", "Happy coding!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
        <GlassButton />
      </div>
    </div>
  );
}

export default App;
