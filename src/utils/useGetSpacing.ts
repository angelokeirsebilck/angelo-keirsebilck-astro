import type { BackgroundColor } from "@custom-types/index";

export const useGetSpacing = (bgColor: BackgroundColor) => {
  if (bgColor == "white") return "my-8 lg:my-24";

  return "py-8 lg:py-24";
};
