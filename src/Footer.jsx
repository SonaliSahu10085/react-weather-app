export default function Footer() {
  let lastUpdated = import.meta.env.VITE_LAST_COMMIT || "4th Feb, 2025";
  return (
    <div
      className="bg-body-tertiary container-fluid border border-2 border-start shadow-sm p-4"
      style={{ fontSize: "14px" }}
    >
      <div className="d-flex flex-md-row justify-content-md-around align-items-md-center flex-column justify-content-center align-items-center">
        <div>Created By @Sonali Sahu</div>
        <div>
          <b>Last Updated : </b>
          {lastUpdated}
        </div>
      </div>
    </div>
  );
}
