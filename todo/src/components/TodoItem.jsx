import React from 'react';
import { connect } from 'react-redux';
import { complete } from '../components/actions/actions';
import styled from 'styled-components';

class TodoItem extends React.Component {
  render() {
    console.log('todoItem', this.props)
    return (
      <StyledLi onClick={this.props.complete(this.props.id)} completed={this.props.completed}>
        {this.props.value}
      </StyledLi>
    );
  }
}

const StyledLi = styled.li`
  color: ${props => props.completed === true ? "green" : "blue"};  
  :hover {
    cursor: pointer;
  }
`;


export default connect(st => st, { complete })(TodoItem);