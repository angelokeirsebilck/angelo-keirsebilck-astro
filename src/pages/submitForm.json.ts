import type { APIRoute } from "astro";
import postmark from "postmark";
export const post: APIRoute = async ({ request, redirect }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    var client = new postmark.ServerClient(
      import.meta.env.POSTMARK_SERVER_TOKEN
    );
    const { name, firstname, email, message, tel } = body;

    // try {
    //   const result = await client.sendEmail({
    //     From: "info@angelokeirsebilck.be",
    //     To: "info@angelokeirsebilck.be",
    //     Subject: "Test",
    //     TextBody: "Hello from Postmark!",
    //   });
    // } catch (error) {
    //   return new Response(
    //     JSON.stringify({
    //       message:
    //         "Something went wrong while sending the e-mail confirmation.",
    //     }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }
    return new Response(
      JSON.stringify({
        redirectUrl:
          request.headers.get("x-locale") == "nl"
            ? "/nl/bedankt/"
            : "/en/thanks/",
      }),
      { status: 200 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Something went wrong while sending the e-mail confirmation.",
    }),
    { status: 400 }
  );
};
