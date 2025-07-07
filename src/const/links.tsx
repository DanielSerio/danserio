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
  id?: string;
  icon: IconType;
  title: string;
  description: null | (() => ReactNode);
  page: () => JSX.Element;
  children?: Child[];
  imgSrc?: string;
}

export interface AppLinkType extends LinkTypeBasis<null> {
  id?: never;
  description: () => ReactNode;
  children?: never;
  imgSrc?: string;
}
export interface RootLinkType extends LinkTypeBasis<AppLinkType> {
  id: string;
  description: null;
  children?: AppLinkType[];
  imgSrc?: never;
}

export type LinkType = RootLinkType | AppLinkType;

export const LINKS: LinkType[] = [
  {
    id: "about",
    href: "/",
    icon: TbInfoSmall,
    title: "About",
    description: null,
    page: AboutPage,
  },
  {
    id: "apps",
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
        imgSrc: "/art-supplies.jpg",
        description: () => <p>A simple, canvas-based drawing application.</p>,
        page: PixelCanvasPage,
      },
      {
        href: "/poke",
        icon: TbTable,
        title: "Poke API Table",
        imgSrc: "/pokeapi.png",
        description: () => (
          <p>
            A server-side paginated API table using data from the{" "}
            <a href="https://pokeapi.co/">Poke API</a>. Built with{" "}
            <a href="https://tanstack.com/table/latest">
              @tanstack/react-table
            </a>
            .
          </p>
        ),
        page: PokePage,
      },
      {
        href: "/weather",
        icon: WiDayCloudy,
        title: "Weather App",
        description: () => (
          <p>
            A simple weather application with data from{" "}
            <a href="https://open-meteo.com/">https://open-meteo.com/</a>.
          </p>
        ),
        imgSrc: "/weather.jpg",
        page: WeatherPage,
      },
    ],
  },
];
