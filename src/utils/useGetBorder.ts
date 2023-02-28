import type { BackgroundColor } from "@custom-types/index";

export const useGetBorder = (bgColor: BackgroundColor) => {
  if (bgColor == "white" || bgColor == "transparent") return "";
  return "border-y-3 border-black-default";
};
