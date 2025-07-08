import { Anchor, Flex, Text } from "@mantine/core";

export function AppFooter() {
  return (
    <Flex align="center" justify="center" component="small">
      <Text className="footer-line" h={30} mt={5}>
        <span>View the </span>
        <Anchor href="https://github.com/DanielSerio/danserio">code</Anchor> for
        <span> this site</span>
      </Text>
    </Flex>
  );
}
