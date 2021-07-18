import ContentLoader from "react-content-loader"

function LoadingBlock(){

  return (
    <ContentLoader
      className="burger-food"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="20" y="17" rx="0" ry="0" width="250" height="250" />
      <rect x="0" y="290" rx="6" ry="6" width="280" height="36" />
      <rect x="10" y="350" rx="6" ry="6" width="91" height="31" />
      <rect x="165" y="350" rx="0" ry="0" width="100" height="31" />
    </ContentLoader>
  );
}

export default  LoadingBlock