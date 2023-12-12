import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])


  return (
    <div className="space-y-6" >
      <h2>All Categories {categories.length} </h2>
      <h3>National News</h3>

      {
        categories.map(categorie => <Link
          className="block ml-4 text-3xl font-semibold px-4 "
          key={categorie.id}
        > {categorie.name} </Link>)
      }


    </div>
  );
};

export default LeftSideBar;