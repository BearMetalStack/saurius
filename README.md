# Saurius

Saurius is a JavaScript, TypeScript, and WebAssembly runtime with secure
defaults and a great developer experience. It's built on [V8](https://v8.dev/),
[Rust](https://www.rust-lang.org/), and [Tokio](https://tokio.rs/).

Saurius is a fork of [Deno](https://github.com/denoland/deno). It stays
compatible with existing Deno programs: the `Deno` global, `deno.json`
configuration files, and `DENO_*` environment variables all keep working.

## Building from source

There are no prebuilt Saurius releases yet. Install the prerequisites listed in
[the contributing guide](.github/CONTRIBUTING.md#building-from-source), then
run:

```sh
cargo build --bin saurius
```

The binary is placed at `./target/debug/saurius`.

## Your first Saurius program

Saurius can be used for many different applications, but is most commonly used
to build web servers. Create a file called `server.ts` and include the following
TypeScript code:

```ts
Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});
```

Run your server with the following command:

```sh
saurius run --allow-net server.ts
```

This should start a local web server on
[http://localhost:8000](http://localhost:8000).

Since Saurius runs Deno programs unchanged, the
[Deno documentation](https://docs.deno.com/runtime/manual) applies; replace
`deno` with `saurius` in command lines.

## Contributing

To contribute, please read the
[contributing instructions](.github/CONTRIBUTING.md).
