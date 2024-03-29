const PointIcon = ({ width, height, fill = "none", stroke = "#000" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 65"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 34.5326C33.6817 34.5326 37.75 31.0163 37.75 26.4261C37.75 21.8359 33.6817 18.3196 29 18.3196C24.3183 18.3196 20.25 21.8359 20.25 26.4261C20.25 31.0163 24.3183 34.5326 29 34.5326ZM29 1.5C43.5793 1.5 56.5 11.6365 56.5 27.0868C56.5 31.9125 54.4571 37.3239 50.1249 43.3603C45.7978 49.3896 39.2599 55.9393 30.4582 63.0089C29.6274 63.6635 28.3372 63.6637 27.5062 63.0094C18.7227 55.9399 12.1937 49.3903 7.87094 43.3609C3.54301 37.3242 1.5 31.9126 1.5 27.0868C1.5 11.6365 14.4207 1.5 29 1.5Z"
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  );
};

export default PointIcon;
