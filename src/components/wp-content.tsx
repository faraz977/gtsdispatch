import { transformWpHtml } from "@/lib/wp-html";

type WpContentProps = {
  html: string;
  className?: string;
};

export function WpContent({ html, className = "" }: WpContentProps) {
  return (
    <div
      className={`wp-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: transformWpHtml(html) }}
    />
  );
}
