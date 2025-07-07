import { LINKS, type AppLinkType } from "#const";

/**
 * Gets the list of apps from the navigation links constant
 * @returns {AppLinkType} {@link AppLinkType}
 */
export function getAppNavList() {
  return LINKS.find(({ id }) => id === "apps")!.children!;
}
