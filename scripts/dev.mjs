// Accept both the managed preview's Vite-style flags and ordinary Next.js flags.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const input = process.argv.slice(2),
  args = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "--strictPort") continue;
  args.push(input[i] === "--host" ? "--hostname" : input[i]);
}
if (!args.includes("--hostname")) args.push("--hostname", "0.0.0.0");
const proc = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), "dev", ...args],
  { stdio: "inherit" },
);
for (const sig of ["SIGTERM", "SIGINT"]) process.on(sig, () => proc.kill(sig));
proc.on("exit", (code) => process.exit(code ?? 0));
