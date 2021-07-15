import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={380}
      height={98}
      viewbox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G transform="scale(1,4)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12.8v78.719s68.261 13.219 163.5 0c95.239-13.22 163.5 0 163.5 0V6.337c-.129-.76-.324-1.394-.617-1.969a8.001 8.001 0 00-3.496-3.496C321.176 0 318.936 0 314.455 0H12.8C8.32 0 6.08 0 4.368.872A8 8 0 00.872 4.368C0 6.08 0 8.32 0 12.8z"
          fill="#00A1FF"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
