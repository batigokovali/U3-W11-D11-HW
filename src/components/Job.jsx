import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data, index }) => {
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorites.content);

  return (
    <Row
      className="mx-0 mt-3 p-3 d-flex align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {favorites.some((job) => data._id === job._id) ? (
        <Button
          variant="danger"
          onClick={() => {
            dispatch(removeFromFavoritesAction(i))
          }}
        >
          Delete
        </Button>
      ) : (
        <Button
          className="ml-auto"
          xs={1}
          onClick={() => {
            dispatch(addToFavoritesAction(data))
          }}
        >
          Add to Favorites
        </Button>
      )}
    </Row>
  );
};

export default Job;
