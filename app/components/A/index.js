/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.main};
  &:hover {
    color: #6cc0e5;
  }
`;

export default A;
