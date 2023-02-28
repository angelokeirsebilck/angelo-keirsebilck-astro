import type { BackgroundColor } from "@custom-types/index";

export const useGetSpacing = (
  bgColor: BackgroundColor,
  firstBlock: boolean = false
) => {
  if (bgColor == "white" || bgColor == "transparent") {
    if (firstBlock) return "mb-16 lg:mb-32 mt-10";
    return "my-16 lg:my-32";
  } else {
    if (firstBlock) return "pb-16 lg:pb-32 pt-16";
    return "py-16 lg:py-32";
  }
};
