import type { BackgroundColor } from "@custom-types/index";

export const useGetBgColor = (bgColor: BackgroundColor) => {
  switch (bgColor) {
    case "blue":
      return "bg-blue-default";
    case "pink":
      return "bg-pink-default";
    case "green":
      return "bg-green-default";
    default:
      return "bg-white";
  }
};
