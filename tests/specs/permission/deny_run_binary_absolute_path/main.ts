try {
  new Deno.Command("saurius", {
    args: ["--version"],
  }).outputSync();
} catch (err) {
  console.error(err);
}

try {
  new Deno.Command(Deno.execPath(), {
    args: ["--version"],
  }).outputSync();
} catch (err) {
  console.error(err);
}
