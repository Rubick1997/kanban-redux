import React from 'react';
import ListsContainer from '../containers/ListsContainer';

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((listId) => (
        <ListsContainer listId = {listId} />
      ))}
    </section>
  );
};

export default Lists;
