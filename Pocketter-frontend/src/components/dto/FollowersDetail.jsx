function FollowersDetail({ followers, following }) {
  return (
    <>
      <div class="row py-2 row-cols-2 justify-content-center">
        <div class="col d-flex align-items-center justify-content-center">
          <div>
            <h6 class="fs-2 text-body-emphasis">Followers</h6>
            <h6 class="fs-2 text-body-secondary">{followers}</h6>
          </div>
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <div>
            <h6 class="fs-2 text-body-emphasis">Following</h6>
            <h6 class="fs-2 text-body-secondary">{following}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowersDetail;
