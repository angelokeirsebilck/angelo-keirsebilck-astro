import { cva, type VariantProps } from "class-variance-authority";

const useGetButtonStyle = cva("btn", {
  variants: {
    intent: {
      green: ["btn-green"],
      pink: ["btn-pink"],
    },
    size: {
      small: ["btn-small"],
      medium: ["btn-medium"],
    },
  },
});

export type LinkProps = Required<
  NonNullable<VariantProps<typeof useGetButtonStyle>>
>;

let test:LinkProps = {intent: 'green', size: 'medium'};




export { useGetButtonStyle };
