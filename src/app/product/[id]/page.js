import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(params)
    return (
        <div>
            <h1>Dynamic Page{params.id}</h1>
            <h1>Dynamic Page{searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;