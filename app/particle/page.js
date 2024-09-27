'use client';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
 
export default function CustomParticles() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
 
  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 1,
                  },
                },
              },
            },
            retina_detect: true,
          }}
      />
    </div>
  );
}