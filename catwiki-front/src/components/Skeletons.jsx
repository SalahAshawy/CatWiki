export const PopularCatsPageSkeleton = () => (
    <div className="row">
      <div className="col-md-4">
        <div className="cat-image"></div>
      </div>
      <div className="col-md-8">
        <div className="skeleton-text skeleton-heading"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );



export const CatBreedPageSkeleton = () => (
    <div className="container custom">
      <div className="row">
        <div className="col-md-4">
          <div className="skeleton-image"></div>
        </div>
        <div className="col-md-8">
          <div className="skeleton-text skeleton-heading"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      </div>
      <div className="row other-images mt-4">
        <div className="row mb-3">
          <h1 className="cat-name">Other Photos</h1>
        </div>
        <div className="row mb-2 p-2">
          {[...Array(8)].map((_, index) => (
            <div className="col-md-3 col-6  mb-3" key={index}>
              <div className="skeleton-image"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

