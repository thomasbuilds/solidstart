import { action } from "@solidjs/router";

export const handleForm = action(async (form: FormData) => {
  "use server";
  const name = String(form.get("name"));
  const message = String(form.get("message"));
  const server = process.env.MATRIX_SERVER as string;
  const token = process.env.MATRIX_ACCESS_TOKEN as string;
  const room = process.env.MATRIX_ROOM_ID as string;
  const txn = Date.now().toString();

  const { status } = await fetch(
    `${server}/_matrix/client/r0/rooms/${room}/send/m.room.message/${txn}?access_token=${token}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msgtype: "m.text",
        body: message,
        format: "org.matrix.custom.html",
        formatted_body: `<b>${name}</b> </br> <p>${message}</p>`,
      }),
    }
  );
  if (status !== 200) throw new Error("server responded with " + status);
  return { success: true };
});
