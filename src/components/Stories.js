import React from 'react';
import Story from './Story';
import './Stories.css';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '30%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '20%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
};

const StoriesHeader = ({ columns }) => {
  return (
    <div class="stories-header">
      {
        Object.keys(columns).map(key => (
          <span key={ key }
            style={{ width: columns[key].width }}
          >
            { columns[key].label }
          </span>
        ))
      }
    </div>
  );
}

const Stories = ({ stories, onArchive }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={ COLUMNS } />
      {
        stories.map(story => (
          <Story 
            key={ story.objectID }
            story={ story }
            columns={ COLUMNS }
            onArchive={ onArchive }
          />
        ))
      }
    </div>
  );
};

export default Stories;