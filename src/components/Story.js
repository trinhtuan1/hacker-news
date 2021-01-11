import React from 'react';
import './Story.css';

const Story = ({ story, columns, onArchive }) => {
  const {
    title,
    author,
    num_comments,
    url,
    points,
    objectID
  } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={ url }>{ title }</a>
      </span>
      <span style={{ width: columns.author.width }}>
        { author }
      </span>
      <span style={{ width: columns.comments.width }}>
        { num_comments }
      </span>
      <span style={{ width: columns.points.width }}>
        { points }
      </span>
      <span style={{ width: columns.archive.width}}>
        <ButtonInline onArchive={ () => onArchive(objectID) }>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
};

const ButtonInline = ({
  type="button",
  onArchive,
  children
}) => {
  return (
    <button
      className="button-inline"
      type={ type }
      onClick={ onArchive }
    >
      { children }
    </button>
  );
};


export default Story;