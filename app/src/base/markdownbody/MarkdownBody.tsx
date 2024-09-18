import Markdown from "react-markdown"

export default function MarkdownBody({ body }: { body: string}) {
  return (
    <div className="prose prose-gray max-w-full mx-auto p-4">
      <Markdown>{body}</Markdown>
    </div>
  )
}