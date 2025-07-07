import { Grid } from "@mantine/core";
import { Children, type PropsWithChildren } from "react";

export function AppListCardGrid({ children }: PropsWithChildren) {
  return (
    <Grid
      className="app-list-card-grid"
      gutter="md"
      p="md"
      maw={1200}
      mx="auto"
    >
      {Children.map(children, (child) => (
        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{child}</Grid.Col>
      ))}
    </Grid>
  );
}
