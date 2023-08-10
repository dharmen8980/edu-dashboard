import React from "react";

const User = ({ universities }) => {
  console.log(universities);
  return (
    <div>
      {universities}
    </div>
  );
};

export default User;

export const getServerSideProps = async (context) => {
  const {query} = context;
  const user = query.users;
  const res = await fetch(`http:localhost:3000/api/listUni?users=${user}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {universities:data.universities}
  };
};
