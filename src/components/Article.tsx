type ArticleProps = {
  children: React.ReactNode;
};

function Article({ children }: ArticleProps) {
  return <div>{children}</div>;
}

export default Article;
