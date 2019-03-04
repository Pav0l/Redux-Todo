import React from 'react';

export default function TodoItem({ value, completed }) {
  return (
    <li>
      {value}
    </li>
  );
}