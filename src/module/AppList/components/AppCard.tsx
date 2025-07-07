import type { AppLinkType } from "#const";
import { Box, Card, Text } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";

export function AppCard({ href, imgSrc, title, description }: AppLinkType) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    import(`../../../assets${imgSrc}`).then((res) => {
      setImage(res.default);
    });
  }, [imgSrc]);

  const isPokeApi = useMemo(() => imgSrc?.includes("pokeapi"), [imgSrc]);

  return (
    <Card className="app-card" key={href} h="100%">
      <Card.Section className="header" component="a" href={`/#/apps${href}`}>
        {!!image ? (
          <figure className={isPokeApi ? "poke" : undefined}>
            <img src={image} />
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
            width: "fit-content",
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
