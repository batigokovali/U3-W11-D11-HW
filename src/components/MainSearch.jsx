import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={8} className="mr-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Link to="/favorites">
          <Col xs={4} className="ml-auto my-3 d-flex justify-content-end">
            <h1>Favorites</h1>
          </Col>
        </Link>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={12} className="mx-auto mb-5">
          {jobs.map((jobData, index) => (
            <Job key={jobData._id} data={jobData} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
