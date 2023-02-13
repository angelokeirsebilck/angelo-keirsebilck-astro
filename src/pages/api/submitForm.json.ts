import type { APIRoute } from "astro";
import postmark from "postmark";
import { defaultCustomerTemplateNL } from "@email/default-customer-nl";
import { defaultCustomerTemplateEN } from "@email/default-customer-en";
import { defaultAdminNL } from "@email/default-admin";

export const post: APIRoute = async ({ request, redirect }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const locale = request.headers.get("x-locale") || "en";
    const { lastName, firstName, email, message, tel } = body;

    try {
      var client = new postmark.ServerClient(
        import.meta.env.POSTMARK_SERVER_TOKEN
      );

      const resultCustomer = await client.sendEmail({
        From: "info@angelokeirsebilck.be",
        To: email,
        Subject:
          locale == "nl"
            ? "Bevestiging contactformulier"
            : "Confirmation contact form",
        HtmlBody:
          locale == "nl"
            ? defaultCustomerTemplateNL(firstName)
            : defaultCustomerTemplateEN(firstName),
      });

      const resultAdmin = await client.sendEmail({
        From: "info@angelokeirsebilck.be",
        To: "info@angelokeirsebilck.be",
        Subject: `Nieuwe inzending via website, locale: ${locale}`,
        HtmlBody: defaultAdminNL(firstName, lastName, email, message, tel),
      });

      if (resultAdmin.Message == "OK" && resultCustomer.Message == "OK") {
        return new Response(
          JSON.stringify({
            redirectUrl: locale == "nl" ? "/nl/bedankt/" : "/en/thanks/",
          }),
          { status: 200 }
        );
      }

      return new Response(
        JSON.stringify({
          message:
            "Something went wrong while sending the e-mail confirmation.",
        }),
        { status: 400 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          message:
            "Something went wrong while sending the e-mail confirmation.",
        }),
        {
          status: 400,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "Something went wrong while sending the e-mail confirmation.",
    }),
    { status: 400 }
  );
};
