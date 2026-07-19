type WpContentProps = {
  html: string;
  className?: string;
};

export function WpContent({ html, className = "" }: WpContentProps) {
  return (
    <div
      className={`wp-content prose prose-invert max-w-none prose-headings:text-white prose-a:text-sky-300 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
