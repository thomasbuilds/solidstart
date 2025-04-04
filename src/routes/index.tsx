import { Show } from "solid-js";
import { useSubmission } from "@solidjs/router";
import { handleForm } from "~/lib/server";

export default function Index() {
  const submission = useSubmission(handleForm);

  return (
    <main class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <section class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-4 text-center">
          Send a Message to Thomas
        </h1>

        <form method="post" action={handleForm} class="space-y-4">
          <label for="name" class="block text-gray-700 font-medium mb-1">
            What's your name?
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-600 mt-1"
            />
          </label>
          <label for="message" class="block text-gray-700 font-medium mb-1">
            What's your message?
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              placeholder="Enter your message"
              class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-600 mt-1"
            />
          </label>
          <button
            type="submit"
            disabled={submission.pending}
            class="w-full bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 transition-colors disabled:opacity-50"
          >
            <Show when={submission.pending} fallback="Send">
              Sending...
            </Show>
          </button>
        </form>

        <div class="mt-4 space-y-2">
          <Show when={submission.error}>
            {(error) => (
              <div class="text-red-500 text-sm border border-red-200 p-2 rounded">
                Error: {error().message}
              </div>
            )}
          </Show>
          <Show when={submission.result?.success}>
            <div class="text-green-500 text-sm border border-green-200 p-2 rounded">
              Message sent successfully!
            </div>
          </Show>
        </div>
      </section>
    </main>
  );
}
