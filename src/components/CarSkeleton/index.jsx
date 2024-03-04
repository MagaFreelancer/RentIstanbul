import ContentLoader from "react-content-loader"

const CarSkeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={261.71}
    height={289.88}
    viewBox="0 0 261 289"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="536" y="147" rx="3" ry="3" width="67" height="11" /> 
    <rect x="503" y="158" rx="3" ry="3" width="140" height="11" /> 
    <rect x="577" y="158" rx="3" ry="3" width="53" height="11" /> 
    <rect x="548" y="142" rx="3" ry="3" width="72" height="11" /> 
    <rect x="506" y="146" rx="3" ry="3" width="100" height="11" /> 
    <rect x="574" y="147" rx="3" ry="3" width="37" height="11" /> 
    <rect x="487" y="144" rx="3" ry="3" width="140" height="11" /> 
    <rect x="509" y="151" rx="3" ry="3" width="173" height="11" /> 
    <circle cx="576" cy="155" r="10" /> 
    <circle cx="576" cy="533" r="9" /> 
    <rect x="0" y="0" rx="10" ry="10" width="261" height="173" /> 
    <rect x="0" y="190" rx="4" ry="4" width="150" height="22" /> 
    <rect x="0" y="223" rx="5" ry="5" width="100" height="22" /> 
    <rect x="0" y="261" rx="5" ry="5" width="70" height="15" />
  </ContentLoader>
)

export default CarSkeleton