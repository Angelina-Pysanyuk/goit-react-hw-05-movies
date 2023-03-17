import React from 'react';
import { useState } from 'react';
import { StyledForm } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Enter your query');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </StyledForm>
    </>
  );
};

export default SearchForm;
