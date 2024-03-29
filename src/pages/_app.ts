import type { App } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { en, nl } from "@formkit/i18n";
import { generateClasses } from "@formkit/themes";

export const defaultClasses = {
  defaultInputs: {
    outer: "formkit-disabled:opacity-40 w-full mb-4",
    input:
      "w-full border border-gray-light rounded-md border-2 border-black-default focus:ring-0 focus:shadow-blue-default focus:ring-offset-0 ring-0 formkit-complete:border-green-default formkit-complete:shadow-green-default focus:shadow-neo-2px shadow-neo-2px formkit-invalid:shadow-error-default py-3 formkit-invalid:border-error-default   focus:ring-primary-default focus:border-blue-default text-base text-black-default placeholder-gray-400",
    label: "block mb-1 font-bebas text-xl tracking-wider",
    help: "text-gray-800 mt-1",
  },
  defaultOptions: {
    wrapper: "flex items-center",
    options:
      "group-[.layout-horizontal]:flex  group-[.layout-horizontal]:flex-wrap group-[.layout-horizontal]:gap-2",
    input:
      "formkit-invalid:border-error-default checked:bg-primary-default text-primary-default mr-2",
    inner: "transform -translate-y-[2px]",
  },
};

export default (app: App) => {
  app.use(
    plugin,
    defaultConfig({
      locales: { en, nl },
      locale: "nl",
      config: {
        classes: generateClasses({
          global: {
            // applies to all input types
            messages: "list-none p-0 mt-1",
            message: "text-error-default mb-1 text-sm",
            inner:
              "focus:shadow-none focus:outline-0 focus:ring-0 focus:ring-offset-0",
            input: "",
            legend:
              "block mb-1 text-lg font-medium formkit-invalid:text-error-default",
          },
          submit: {
            input:
              "btn btn-medium mb-2 flex items-center gap-x-2 btn-pink w-fit mt-4 formkit-disabled:bg-gray-400 formkit-loading:before:block formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",
          },
          customDropdown: {
            ...defaultClasses.defaultInputs,
          },
          text: {
            ...defaultClasses.defaultInputs,
          },
          textarea: {
            ...defaultClasses.defaultInputs,
          },
          password: {
            ...defaultClasses.defaultInputs,
          },
          email: {
            ...defaultClasses.defaultInputs,
          },
          tel: {
            ...defaultClasses.defaultInputs,
          },
          checkbox: {
            ...defaultClasses.defaultOptions,
          },
          radio: {
            ...defaultClasses.defaultOptions,
          },
        }),
      },
    })
  );
};
