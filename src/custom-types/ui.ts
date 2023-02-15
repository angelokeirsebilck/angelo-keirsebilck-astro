import type { LinkProps } from "@utils/useGetButtonStyle";

export type LinkType = {
  style: LinkProps;
  uri: string;
  label: string;
  extraClasses?: string;
  target?: string;
  rel?: string;
};
