import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../redux/postsRedux";
import { Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Categories = () => {

  const categories = useSelector(getAllCategories);
  const [choosed, setChoosed] = useState(false);

  return (
    <div className="mar-x-post">
      <h2>All categories</h2>
        {categories.map(category => 
        <Nav.Link as={NavLink} to={"/categories/" + category}>
          <Card key={category} className="p-2 fs-5">{category}</Card>
        </Nav.Link>
        )}
    </div>
  );
};

export default Categories;