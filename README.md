# Font Awesome icons for deno / Preact

**License** [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://fontawesome.com/](https://fontawesome.com/)

[See available icons here](https://react-icons.deno.dev/fa)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/fa":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-fa@1.0.9/mod.ts",
    "react-icons/fa/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-fa@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fa

```ts
import { Fa500Px } from "https://deno.land/x/react_icons_fa@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Fa500Px } from "react-icons/fa"
```

## import a single icon, downloading just one icon

```ts
import { Fa500Px } from "react-icons/fa/Fa500Px.ts"
```

or using default export

```ts
import Fa500Px from "react-icons/fa/Fa500Px.ts"
```

