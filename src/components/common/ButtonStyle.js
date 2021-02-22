import styled from 'styled-components/native';
import {
  compose,
  shadow,
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  variant,
} from 'styled-system';

const ButtonStyle = styled.Button(
  compose(
    shadow,
    space,
    color,
    layout,
    border,
    position
  ),
);

export default ButtonStyle;
