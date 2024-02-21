import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
    className="scroll"
    speed={2}
    width={220}
    height={258}
    viewBox="0 0 280 258"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="7" rx="10" ry="10" width="223" height="141" /> 
    <rect x="83" y="82" rx="0" ry="0" width="0" height="1" /> 
    <rect x="9" y="203" rx="10" ry="10" width="94" height="14" /> 
    <rect x="8" y="235" rx="10" ry="10" width="71" height="13" /> 
    <rect x="8" y="176" rx="10" ry="10" width="169" height="19" />
  </ContentLoader>
)

export default MyLoader