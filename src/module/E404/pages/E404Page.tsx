import { ParticlesBackground } from "#core/components/layout/ParticlesBackground";
import { useParticles } from "#core/hooks";
import { Flex, Text } from "@mantine/core";

export function E404Page() {
  const [{ options }, { onParticlesLoaded }] = useParticles({});

  return (
    <>
      <ParticlesBackground
        id="errorParticles"
        options={options}
        particlesLoaded={onParticlesLoaded}
      />
      <Flex direction="column" w="fit-content" mx="auto">
        <Text fz="h1">Oops... We couldn't find that.</Text>
        <Text>
          Go{" "}
          <button className="pseudo-link" onClick={() => window.history.back()}>
            back
          </button>{" "}
          to where we came from
        </Text>
      </Flex>
    </>
  );
}
