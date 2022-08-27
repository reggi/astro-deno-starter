# astro-deno-starter

This is a astro + deno starter kit that it's a little bit better then the one provided. 

This differs in a couple of ways:

1. You're executing your own server here, and have access to the full request
2. All the astro files / npm stuff is tucked away in `astro`
3. The `pages` have been hoisted out of the astro directory
3. Includes `deno.json` scripts
4. `deno task dev` boots up both `astro dev` and `deno` server with file watching
5. Changes `.gitignore` to includes astro-dist files in the source repo so deno can use them
6. `deno task yarn` installs astro npm dependencies
7. `deno task build` builds astro
8. `deno task start` starts for production