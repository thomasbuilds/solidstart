import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";

export default function PageNotFound() {
  return (
    <main class="flex flex-col items-center justify-center min-h-screen px-4">
      <Title>Not Found (404)</Title>
      <h1 class="text-9xl font-extrabold text-sky-600 tracking-widest">404</h1>
      <div class="bg-sky-600 inline-block px-3 py-1 rounded-lg rotate-12 mt-4">
        <span class="text-white text-lg font-semibold">Page Not Found</span>
      </div>
      <p class="mt-8 text-lg text-gray-600">
        We couldn’t find the page you’re looking for.
      </p>
      <A
        href="/"
        class="mt-6 px-6 py-2 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-600 hover:text-white transition"
      >
        Go Home
      </A>
    </main>
  );
}
