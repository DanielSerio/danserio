import type { AppLinkType } from "#const";
import { Box, Card, Text } from "@mantine/core";
import { useMemo } from "react";

export function AppCard({ href, imgSrc, title, description }: AppLinkType) {
  const isPokeApi = useMemo(() => imgSrc?.includes("pokeapi"), [imgSrc]);

  return (
    <Card className="app-card" key={href} h="100%">
      <Card.Section className="header" component="a" href={`/#/apps${href}`}>
        {!!imgSrc ? (
          <figure className={isPokeApi ? "poke" : undefined}>
            <img src={imgSrc} />
          </figure>
        ) : (
          "Loading..."
        )}
        <Box
          p="xs"
          style={{
            position: "absolute",
            zIndex: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "black",
            borderRadius: "5px",
          }}
        >
          <Text>{title}</Text>
        </Box>
      </Card.Section>
      <Card.Section p="md" mt="sm">
        {description()}
      </Card.Section>
    </Card>
  );
}
