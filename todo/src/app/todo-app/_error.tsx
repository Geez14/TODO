import { NextPageContext } from "next";

interface ErrorProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        {statusCode
          ? `Error: ${statusCode}`
          : "An error occurred on the client"}
      </h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on the client"}
      </p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
