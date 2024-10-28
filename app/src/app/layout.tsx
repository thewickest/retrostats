export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <title>React App</title>
          <meta name="description" content="Web site created..." />
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }