import React from 'react';
import styled from 'styled-components';

export default function ListItem({ list, complete, deleteItem }) {

  return (
    <ul>
      {
        list.map(task => (
          <div key={task.id}>
            <StyledLi
              completed={task.completed}
              >
              <CompleteBtn onClick={() => complete(task.id)}>✓</CompleteBtn>
              {task.value}                  
              <DeleteBtn onClick={() => deleteItem(task.id)}>X</DeleteBtn>
            </StyledLi>
            
          </div>
        ))
      }
    </ul>
  );
}

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.completed === true ? "green" : "rgb(102, 102, 102)"};
  list-style-type: none;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;

const CompleteBtn = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid grey;
  margin: auto 1rem auto 0;

  @keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

  :hover {
    animation: pulse 0.6s linear both;
  }
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  opacity: 0.7;
  margin: auto 0 auto 1rem;;
  background-color: rgb(255, 191, 191);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid red;
  color: white;
  font-weight: 700;

  @keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  30%,
  70%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  60%,
  80% {
    transform: translate3d(5px, 0, 0);
  }
  }

  :hover {
    animation: shake 0.4s linear both;
  }
`;
