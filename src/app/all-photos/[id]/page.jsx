import React from 'react';

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
     const res = await fetch('https://pixzen-five.vercel.app/data.json')
    const photos = await res.json()
    
    const photo = photos.find(p => p.id = id)
    console.log(id)
    return (
        <div>
            <h1>{photo.title}</h1>
            <p>{photo.prompt}</p>
            <p>{photo.category}</p>
            <h2>{photo.id}</h2>

        </div>
    );
};

export default PhotoDetailsPage;