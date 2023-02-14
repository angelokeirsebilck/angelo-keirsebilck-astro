<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";
import { inject } from "vue";
const props = defineProps<{
  locale: string;
}>();
const config = inject(Symbol.for("FormKitConfig"));
config.locale = props.locale;

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
];

const submitHandler = async (fields: FormData) => {
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
    // window.location.href = data.redirectUrl;
  }
};
</script>

<template>
  <div class="pb-3">
    <FormKit type="form" @submit="submitHandler">
      <FormKitSchema :schema="contactSchema" />
    </FormKit>
  </div>
</template>