import { LINKS } from "#const";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";

export function AppBreadcrumbs() {
  const url = window.location.href;
  const appsLinks = LINKS.find(({ id }) => id === "apps")!.children!;
  const foundApp = appsLinks.find(({ href }) => url.includes(href));

  if (!foundApp) {
    return <></>;
  }

  const items = [
    {
      title: "Apps",
      href: "/apps",
    },
    {
      title: foundApp.title,
      href: `/apps${foundApp.href}`,
    },
  ];
  return (
    <Breadcrumbs
      px="md"
      style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
      separator="→"
      separatorMargin="md"
      mt="xs"
      pb="xs"
    >
      {items.map((item) => (
        <Link to={item.href} key={item.href}>
          {item.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
