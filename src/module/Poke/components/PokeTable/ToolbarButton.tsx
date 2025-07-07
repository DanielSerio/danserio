import { ActionIcon, type ActionIconProps } from "@mantine/core";

export function ToolbarButton({
  children,
  ...props
}: Omit<ActionIconProps, "variant" | "size" | "color"> & {
  onClick: () => void;
}) {
  return (
    <ActionIcon variant="light" size="md" color="gray" {...props}>
      {children}
    </ActionIcon>
  );
}
