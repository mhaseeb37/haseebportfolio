import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MyParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
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
            value: "#000000",
          },
          shape: {
            type: "circle",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#f00000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
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
  );
};

export default MyParticles;
