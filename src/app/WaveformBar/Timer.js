import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectDuration,
  selectPlayPosition,
  selectCursorPosition,
  setPlayPosition,
  setCursorPosition
} from 'redux/appSlice';
import { buildStyledComponent } from 'style';
import { hhmmss } from 'utils/helper';
import { useEffect } from 'react';

const Component = (props) => {
  const duration = useSelector(selectDuration);
  const playPosition = useSelector(selectPlayPosition);
  const cursorPosition = useSelector(selectCursorPosition);

  return (
    <div {...props}>
      <span>
        {cursorPosition
          ? hhmmss(cursorPosition + ' s', true)
          : hhmmss(playPosition + ' s', true)}
      </span>
      &nbsp;/&nbsp;
      {hhmmss(duration + 's', true)}
    </div>
  );
};

const modifierConfig = {};

const styles = ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 7px;
  background: ${theme.colors.grey_5};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.grey_3};

  >span {
    color: ${theme.colors.grey_1};
  }
`;

export const Timer = buildStyledComponent('Timer', styled(Component), styles, {
  modifierConfig
});

export default Timer;
