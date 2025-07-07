import { TbInfoSmall, TbList, TbPalette, TbTable } from "react-icons/tb";
import { WiDayCloudy } from "react-icons/wi";
import { AboutPage } from "#about/pages";
import { AppListPage } from "#app-list/pages";
import { PixelCanvasPage } from "#pixel-canvas/pages";
import { PokePage } from "#poke/pages";
import { WeatherPage } from "#weather/pages";
import type { IconType } from "react-icons/lib";
import type { ReactNode, JSX } from "react";

interface LinkTypeBasis<Child> {
  href: string;
  icon: IconType;
  title: string;
  description: null | (() => ReactNode);
  page: () => JSX.Element;
  children?: Child[];
}

export interface AppLinkType extends LinkTypeBasis<null> {
  description: () => ReactNode;
  children?: never;
}
export interface RootLinkType extends LinkTypeBasis<AppLinkType> {
  description: null;
  children?: AppLinkType[];
}

export type LinkType = RootLinkType | AppLinkType;

export const LINKS: LinkType[] = [
  {
    href: "/",
    icon: TbInfoSmall,
    title: "About",
    description: null,
    page: AboutPage,
  },
  {
    href: "/apps",
    icon: TbList,
    title: "Apps",
    description: null,
    page: AppListPage,
    children: [
      {
        href: "/pixel-canvas",
        icon: TbPalette,
        title: "Pixel Canvas",
        description: () => <p>A simple drawing application</p>,
        page: PixelCanvasPage,
      },
      {
        href: "/poke",
        icon: TbTable,
        title: "Poke API Table",
        description: () => (
          <p>
            A server-side paginated API table using data from the{" "}
            <a href="https://pokeapi.co/">Poke API</a>. Built with{" "}
            <a href="https://tanstack.com/table/latest">
              @tanstack/react-table
            </a>
          </p>
        ),
        page: PokePage,
      },
      {
        href: "/weather",
        icon: WiDayCloudy,
        title: "Weather App",
        description: () => <p>A simple weather application</p>,
        page: WeatherPage,
      },
    ],
  },
];
