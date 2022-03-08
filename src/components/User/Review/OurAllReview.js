import React from "react";

const OurAllReview = (Props) => {
  const { email, comments } = Props.order;
  return (
    <div>
      <div ClassName="bg-info p-3 mt-3">
        <h5 className="text-success">
          email:
          {email}
        </h5>
        <h6 className="text-dark">
          Review:
          {comments}
        </h6>
      </div>
    </div>
  );
};

export default OurAllReview;
