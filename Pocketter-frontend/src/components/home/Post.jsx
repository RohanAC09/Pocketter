export default function Post({ postDetails }) {
  return (
    <>
      <div className="card mb-4 post-card">
        <div className="card-header">
            @{postDetails.postedBy} <span className="ps-2 post-timestamp">[ {new Date(postDetails.postCreatedAt).toLocaleString()} ]</span>
        </div>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </>
  );
}