import { AboutMe } from "#about/components/AboutMe";
import { ParticlesBackground } from "#core/components/layout/ParticlesBackground";
import { useParticles } from "#core/hooks";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();
  const [{ options }, { onParticlesLoaded }] = useParticles({});

  return (
    <>
      <ParticlesBackground
        id="aboutParticles"
        options={options}
        particlesLoaded={onParticlesLoaded}
      />
      <AboutMe>
        <Button onClick={() => navigate("/apps")}>See some mini-apps</Button>
      </AboutMe>
    </>
  );
}
