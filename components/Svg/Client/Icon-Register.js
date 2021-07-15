import * as React from 'react';

const IconMap = ({current}) => {
  return (
    <svg
      width={11}
      height={17}
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.482.5c1.52 0 2.82.545 3.9 1.634C10.46 3.223 11 4.544 11 6.096c0 .776-.19 1.672-.57 2.686a15.713 15.713 0 01-1.38 2.817c-.54.863-1.079 1.677-1.619 2.44-.54.765-.993 1.372-1.36 1.822l-.59.639c-.147-.15-.343-.376-.588-.676-.245-.3-.68-.883-1.306-1.746a35.993 35.993 0 01-1.674-2.517 17.32 17.32 0 01-1.324-2.76C.196 7.773 0 6.871 0 6.095c0-1.552.533-2.873 1.6-3.962C2.667 1.044 3.961.5 5.482.5zm0 7.587a1.92 1.92 0 001.398-.582c.392-.388.588-.858.588-1.409 0-.55-.196-1.02-.588-1.408a1.92 1.92 0 00-1.398-.582c-.54 0-1 .194-1.38.582-.38.388-.57.857-.57 1.408 0 .551.19 1.02.57 1.409.38.388.84.582 1.38.582z"
        fill="#18A0FB"
      />
    </svg>
  );
};
const IconClock = ({current}) => {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.248 3.289C3.58 1.93 5.185 1.251 7.063 1.251c1.877 0 3.482.68 4.814 2.038 1.332 1.359 1.998 2.996 1.998 4.911 0 1.915-.666 3.552-1.998 4.911-1.332 1.359-2.937 2.038-4.814 2.038-1.878 0-3.483-.68-4.815-2.038C.916 11.752.25 10.115.25 8.2c0-1.915.666-3.552 1.998-4.911zm.393 9.421c1.223 1.247 2.697 1.87 4.422 1.87 1.725 0 3.199-.623 4.421-1.87 1.223-1.247 1.834-2.75 1.834-4.51 0-1.76-.611-3.263-1.834-4.51-1.223-1.247-2.696-1.87-4.421-1.87s-3.2.623-4.422 1.87C1.418 4.937.807 6.44.807 8.2c0 1.76.611 3.263 1.834 4.51zM7.063 8.2V3.924h.556v4.844h-3.7V8.2h3.144z"
        fill="#18A0FB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.063 1.506c-1.812 0-3.353.652-4.638 1.963C1.139 4.78.5 6.352.5 8.2c0 1.848.64 3.42 1.925 4.73 1.285 1.312 2.826 1.964 4.638 1.964 1.81 0 3.352-.652 4.638-1.963 1.285-1.311 1.924-2.883 1.924-4.731 0-1.848-.64-3.42-1.925-4.73-1.285-1.312-2.826-1.964-4.637-1.964zM2.07 3.11C3.45 1.702 5.118.996 7.063.996c1.944 0 3.612.706 4.991 2.113 1.379 1.406 2.071 3.108 2.071 5.091s-.692 3.685-2.07 5.091c-1.38 1.406-3.048 2.113-4.992 2.113-1.945 0-3.613-.707-4.992-2.113C.692 11.885 0 10.183 0 8.2s.692-3.685 2.071-5.091zm.393.4c1.27-1.294 2.807-1.945 4.599-1.945 1.791 0 3.329.65 4.598 1.946 1.27 1.294 1.907 2.863 1.907 4.69 0 1.827-.637 3.395-1.907 4.69-1.27 1.295-2.807 1.946-4.598 1.946-1.792 0-3.33-.65-4.599-1.946C1.194 11.595.557 10.027.557 8.2c0-1.827.638-3.396 1.907-4.69zm4.599-1.435c-1.659 0-3.07.597-4.245 1.796-1.176 1.2-1.761 2.638-1.761 4.33 0 1.692.585 3.13 1.76 4.33 1.177 1.2 2.587 1.796 4.246 1.796 1.658 0 3.069-.597 4.244-1.796 1.176-1.2 1.761-2.638 1.761-4.33 0-1.692-.585-3.13-1.76-4.33-1.176-1.2-2.587-1.796-4.245-1.796zm-.25 1.595h1.056v5.354h-4.2V7.945h3.144V3.669zm.5.51v4.276H4.168v.058H7.37V4.179h-.056z"
        fill="#18A0FB"
      />
    </svg>
  );
};
const IconCalendar = ({current}) => {
  return (
    <svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.47 2.177a.872.872 0 00-.288-.188.912.912 0 00-.344-.066h-.905v-.64a.982.982 0 00-.084-.411 1.03 1.03 0 00-.248-.345 1.092 1.092 0 00-.365-.235 1.141 1.141 0 00-.433-.079h-.45a1.141 1.141 0 00-.434.08 1.092 1.092 0 00-.364.235 1.029 1.029 0 00-.249.345.981.981 0 00-.083.41v.641h-2.71v-.642a.982.982 0 00-.084-.41 1.03 1.03 0 00-.248-.345 1.092 1.092 0 00-.364-.235 1.141 1.141 0 00-.433-.079h-.451a1.141 1.141 0 00-.433.08 1.092 1.092 0 00-.365.235 1.03 1.03 0 00-.248.345.982.982 0 00-.083.41v.641H.9a.912.912 0 00-.344.065.872.872 0 00-.288.189.824.824 0 00-.2.273.785.785 0 00-.068.326v8.554a.845.845 0 00.267.6c.168.16.395.252.633.256h9.935a.942.942 0 00.635-.254.845.845 0 00.269-.601V2.778a.786.786 0 00-.069-.327.824.824 0 00-.2-.275zm-8.535 9.154H.9V9.407h2.032l.003 1.924zm0-2.352H.9V6.84h2.032l.003 2.138zm0-2.566H.9V4.489h2.032l.003 1.924zm-.158-3.057a.205.205 0 01-.067-.15V1.282c0-.056.025-.11.067-.15.042-.04.1-.063.159-.064h.448c.06 0 .117.024.16.064.041.04.065.094.066.15v1.925c0 .056-.025.11-.067.15a.236.236 0 01-.159.064h-.451a.228.228 0 01-.16-.065h.004zm2.868 7.974h-2.26V9.407h2.257l.003 1.923zm0-2.352h-2.26V6.841h2.257l.003 2.137zm0-2.566h-2.26V4.489h2.257l.003 1.923zm2.71 4.917H6.093V9.407h2.258l.004 1.922zm0-2.352H6.093V6.841h2.258l.004 2.136zm0-2.566H6.093V4.49h2.258l.004 1.922zm-.158-3.057a.207.207 0 01-.07-.147V1.282a.21.21 0 01.066-.15c.042-.04.1-.063.16-.064h.45c.06 0 .117.023.16.063a.21.21 0 01.066.151v1.925a.21.21 0 01-.066.15.235.235 0 01-.16.064h-.45a.227.227 0 01-.16-.065l.004-.002zm2.643 7.974H8.803V9.408h2.032l.005 1.921zm0-2.352H8.803V6.841h2.032l.005 2.135zm0-2.566H8.803V4.49h2.032l.005 1.921z"
        fill="#18A0FB"
      />
    </svg>
  );
};
export {IconMap, IconClock};
