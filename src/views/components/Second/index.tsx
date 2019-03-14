import * as React from "react";

type Props = {
  comments: string[];
};

export function Second({ comments }: Props) {
  return (
    <div>
      {comments.map(comment => (
        <p>{comment}</p>
      ))}
    </div>
  );
}
