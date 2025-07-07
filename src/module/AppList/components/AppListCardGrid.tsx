import { Grid } from "@mantine/core";
import { Children, type PropsWithChildren } from "react";

export function AppListCardGrid({ children }: PropsWithChildren) {
  return (
    <Grid
      className="app-list-card-grid"
      gutter="md"
      p="md"
      align="stretch"
      maw={1080}
      mx="auto"
    >
      {Children.map(children, (child) => (
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>{child}</Grid.Col>
      ))}
    </Grid>
  );
}
