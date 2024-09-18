import Markdown from "react-markdown"

export default function MarkdownBody({ body }: { body: string}) {
  return (
    <body>
      <Markdown>{body}</Markdown>
    </body>
  )
}