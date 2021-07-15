import * as React from 'react';
import Svg, {Path, Text} from 'react-native-svg';

const CalendarForm = ({day, daynum, month}) => {
  return (
    <Svg
      width={58}
      height={56}
      viewBox="0 0 58 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M44.202 4.342v.5h5.606c3.774 0 6.826 3 6.826 6.665v36.91c0 3.664-3.052 6.664-6.826 6.664H7.627c-3.774 0-6.826-3-6.826-6.664v-36.91c0-3.664 3.052-6.665 6.826-6.665h5.606V1.737c0-.673.56-1.237 1.276-1.237s1.276.564 1.276 1.237v3.105H41.65V1.737c0-.673.56-1.237 1.276-1.237.715 0 1.276.564 1.276 1.237v2.605zM13.233 7.816v-.5H7.627c-2.347 0-4.274 1.87-4.274 4.191v4.625h50.73v-4.625c0-2.322-1.928-4.19-4.275-4.19h-5.606V9.552c0 .673-.56 1.237-1.276 1.237-.715 0-1.276-.564-1.276-1.237V7.316H15.785v2.237c0 .673-.56 1.237-1.276 1.237-.715 0-1.276-.564-1.276-1.237V7.816zm-9.38 10.79h-.5v29.81c0 2.322 1.927 4.192 4.274 4.192h42.181c2.347 0 4.274-1.87 4.274-4.191v-29.81H3.852z"
        fill="#18A0FB"
        stroke="#fff"
      />
      <Text x="20" y="49" fontWeight="bold" fontSize="11" fill="black">
        {month}
      </Text>
      <Text x="15" y="40" fontWeight="bold" fontSize="24" fill="#FF3A44">
        {daynum}
      </Text>
      <Text x="23" y="15" fontWeight="bold" fontSize="11" fill="black">
        {day}
      </Text>
    </Svg>
  );
};

export default CalendarForm;
