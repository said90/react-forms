import styled from 'styled-components/native';
import {compose, shadow,space,color,layout,border,flexbox,position} from 'styled-system';

const InputText = styled.TextInput(compose(shadow,space,color,layout,border,flexbox,position));

export default InputText;