import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { buildStyledComponent } from 'style';

import { setPlayPosition, setPlayStatus } from 'redux/appSlice';
import { PLAY_STATUS } from 'redux/constants';
import Bar from './Bar';

const Component = ({
  timings,
  playPosition,
  duration,
  user,
  primary,
  onChangeCursor,
  ...props
}) => {
  const dispatch = useDispatch();

  function handleClick(transcript, cursorPosition) {
    dispatch(
      setPlayPosition(
        transcript.startTime +
          ((transcript.endTime - transcript.startTime) * cursorPosition) / 100
      )
    );
    dispatch(setPlayStatus(PLAY_STATUS.PLAYING));
  }

  const bars = [];

  let transcript;
  for (let i = 0; i < timings.length; i++) {
    transcript = timings[i];

    bars.push(
      <Bar
        key={user + '_bar_' + i}
        width={((transcript.endTime - transcript.startTime) / duration) * 100}
        modifiers={[primary && 'primary', transcript.user !== user && 'empty']}
        transcript={transcript}
        playPosition={playPosition}
        user={user}
        onClick={(cursorPosition) => handleClick(transcript, cursorPosition)}
      ></Bar>
    );
  }

  return <div {...props}>{bars}</div>;
};

const modifierConfig = {};

const styles = ({ theme }) => `
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  height: 25px;
  width: 100%;
  position: relative;
`;

export const Graph = buildStyledComponent(
  'Waveform_Graph',
  styled(Component),
  styles,
  {
    modifierConfig
  }
);

export default Graph;
