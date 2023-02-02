import type { BackgroundColor } from "@custom-types/index";

export const useGetSpacing = (bgColor: BackgroundColor) => {
  if (bgColor == "white") return "my-16 lg:my-32";

  return "py-16 lg:py-32";
};
