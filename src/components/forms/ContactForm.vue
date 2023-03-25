<script setup lang="ts">
import type {
  FormKitGroupValue,
  FormKitNode,
  FormKitTypeDefinition,
} from "@formkit/core";
import { FormKitSchema } from "@formkit/vue";
import { inject } from "vue";
const props = defineProps<{
  locale: string;
}>();
const config = inject(Symbol.for("FormKitConfig"));
config.locale = props.locale;

const spinningSubmitDefinition: FormKitTypeDefinition = {
  type: "input",
  schema: [
    {
      $cmp: "FormKit",
      bind: "$submitAttrs",
      props: {
        ignore: true,
        type: "submit",
        disabled: "$disabled",
        label: "$submitLabel",
      },
    },
  ],
};

function scrollToErrors(node: FormKitNode) {
  if (node.props.type === "form") {
    function scrollTo(node: FormKitNode) {
      if (node.props.id) {
        const el = document.getElementById(node.props.id);
        if (el) {
          el.scrollIntoView();
        }
      }
    }

    function scrollToErrors() {
      node.walk((child) => {
        // Check if this child has errors
        if (child.ledger.value("blocking") || child.ledger.value("errors")) {
          // We found an input with validation errors
          scrollTo(child);
          // Stop searching
          return false;
        }
      }, true);
    }

    const onSubmitInvalid = node.props.onSubmitInvalid;
    node.props.onSubmitInvalid = () => {
      onSubmitInvalid(node);
      scrollToErrors();
    };
    node.on("unsettled:errors", scrollToErrors);
  }
  return false;
}

const customInputs = () => {};

// Then we attach a library
customInputs.library = (node: FormKitNode) => {
  if (node.props.type === "spinningSubmit") {
    node.define(spinningSubmitDefinition);
  }
};

const contactSchema = [
  {
    $el: "div",
    attrs: {
      class: "grid lg:grid-cols-2 gap-x-8",
    },
    children: [
      {
        $formkit: "text",
        name: "firstName",
        label: props.locale == "nl" ? "Voornaam" : "First name",
        validation: "required",
      },
      {
        $formkit: "text",
        name: "lastName",
        label: props.locale == "nl" ? "Achternaam" : "Last name",
        validation: "required",
      },
    ],
  },
  {
    $el: "div",
    attrs: {
      class: "grid lg:grid-cols-2 gap-x-8",
    },
    children: [
      {
        $formkit: "email",
        name: "email",
        label: props.locale == "nl" ? "E-mailadres" : "E-mail",
        validation: "required|email",
      },
      {
        $formkit: "tel",
        name: "tel",
        label: props.locale == "nl" ? "Telefoonnummer" : "Telephone number",
        validation: "required",
      },
    ],
  },
  {
    $formkit: "textarea",
    name: "message",
    label: props.locale == "nl" ? "Bericht" : "Message",
    validation: "required",
  },
  {
    $formkit: "spinningSubmit",
    label: "Versturen",
  },
];

const submitHandler = async (fields: FormKitGroupValue, node: FormKitNode) => {
  const res = await fetch("/api/submitForm.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-locale": props.locale,
    },
    body: JSON.stringify(fields),
  });

  if (res.status == 200) {
    const data = await res.json();
    window.location.href = data.redirectUrl;
  }
  if (res.status == 400) {
    const data = await res.json();
    node.setErrors("contactForm", [data.message]);
  }
};

const submitRawHandler = (event: Event, node: FormKitNode) => {
  node.clearErrors();
};
</script>

<template>
  <div class="pb-3">
    <FormKit
      type="form"
      id="contactForm"
      :plugins="[customInputs, scrollToErrors]"
      :actions="false"
      @submit="submitHandler"
      @submit-raw="submitRawHandler"
    >
      <FormKitSchema :schema="contactSchema" />
    </FormKit>
  </div>
</template>
