import type { BackgroundColor } from "@custom-types/index";

export const useGetBgColor = (bgColor: BackgroundColor) => {
  switch (bgColor) {
    case "blue":
      return "bg-blue-default border-y-3 border-black-default";
    case "pink":
      return "bg-pink-default border-y-3 border-black-default";
    case "green":
      return "bg-green-default border-y-3 border-black-default";
    default:
      return "bg-white";
  }
};
