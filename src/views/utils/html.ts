interface Content {
  body: string;
  title: string;
  scripts?: Array<{
    src: string;
    loadType?: "async" | "defer";
  }>;
}

export const html = ({ body, title, scripts = [] }: Content): string =>
  `
  <!DOCTYPE html>
  <html lang="ja">
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
          ${body}
          ${scripts.map(
            ({ src, loadType }) =>
              `<script type="text/javascript" charset="utf-8" src="js/${src}" ${loadType}></script>`
          )}
          
      </body>
  </html>
  `.trim();
