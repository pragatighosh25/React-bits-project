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
    <div className="App flex flex-col min-h-screen relative overflow-hidden bg-black">
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
        baseColor="transparent"
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

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 gap-12">
        {/* Left: Text + Button */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-lg md:mr-auto">
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
        <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
          <div
            style={{ width: "300px", height: "400px", position: "relative" }}
          >
            <CardSwap
              cardDistance={50}
              verticalDistance={65}
              delay={3000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  ✨ Crafted Interfaces
                </h3>
                <p className="text-gray-300">
                  Every interaction, every hover state, and every transition is
                  designed to make users *feel* the experience. From smooth
                  scrolls to minimal layouts, I focus on blending creativity
                  with usability — pixel-perfect, responsive, and built to
                  impress.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  ⚡ Frontend Wizardry
                </h3>
                <p className="text-gray-300">
                  From React components to Three.js animations, I love turning
                  design mockups into living, breathing web experiences.
                  Performance, aesthetics, and motion come together to create
                  seamless digital stories.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  🎨 Design That Speaks
                </h3>
                <p className="text-gray-300">
                  Great design tells a story. I design interfaces that connect
                  emotionally — where color, typography, and movement work
                  together to create a memorable visual language users actually
                  *feel* drawn to.
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
