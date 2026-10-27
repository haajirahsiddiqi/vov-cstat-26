import React from 'react';

// Simple banner used at the top of the plain pages
export default function PageHeader({ title }) {
  return (
    <section className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </section>
  );
}
