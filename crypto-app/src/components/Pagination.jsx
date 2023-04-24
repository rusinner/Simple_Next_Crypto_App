import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;
  position: sticky;
  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`;
const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;

  color: #e9fff7;

  @media (max-width: 768px) {
    width: 50vw;
    margin-top: 5rem;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  padding: 0.3rem;
  &:hover {
    background-color: #e9fff7;
    color: green;
  }
  &:active {
    background-color: #e9fff7;
    color: green;
  }
`;

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <Container>
      <PaginationList>
        {pages.map((page) => (
          <ListItem key={page}>
            <a onClick={() => onPageChange(page)}>{page}</a>
          </ListItem>
        ))}
      </PaginationList>
    </Container>
  );
};

export default Pagination;

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
