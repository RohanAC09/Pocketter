function FollowersDetail({ followers, following }) {
  return (
    <>
      <div className="row py-2 row-cols-2 justify-content-center">
        <div className="col d-flex align-items-center justify-content-start">
          <div>
            <h6 className="fs-4 text-body-emphasis">Followers</h6>
            <h6 className="fs-4 text-body-secondary">{followers}</h6>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-start">
          <div>
            <h6 className="fs-4 text-body-emphasis">Following</h6>
            <h6 className="fs-4 text-body-secondary">{following}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowersDetail;
