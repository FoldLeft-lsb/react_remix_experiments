# Hacking Remix + Reason with melange 

Not working currently... 

I have been able to mangle the Reason output into the shape that Remix expects for routes, but it can't figure out how to use them. It might be because ReasonReact exports a function called "make" instead of a module name, or the combination of jsx files with plain js that just calls createElement

I'd like to try binding everything used in the root, client and server jsx files so I can implement them in reason, so that all the output files will be the same 

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## OCaml stuff 

With opam installed globally

Create switch in the root dir  
```sh
opam switch create . 5.1.1 -y --deps-only
```

Update PATH 
```sh
eval $(opam env)
```

## Development

Run melange 
```sh
dune build -w
```

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
