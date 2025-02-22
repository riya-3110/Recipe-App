import React from "react";

export const Menu = ({ data }) => {
  // console.log("data :" + data);
  console.log("Data:", JSON.stringify(data, null, 2));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name of Recipe</th>
          <th scope="col">Images</th>
          <th scope="col">Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((dataItem, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <th scope="row">{dataItem.title}</th>
              <td>
                <img
                  src={dataItem.image}
                  alt="recipe"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>
                <ul>
                  {dataItem.missedIngredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
