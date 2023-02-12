import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    const { name, firstname, email, message, tel } = body;

    return new Response(
      JSON.stringify({
        message: "Correct",
      }),
      {
        status: 200,
      }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Body must be of type application/json",
    }),
    { status: 400 }
  );
};
