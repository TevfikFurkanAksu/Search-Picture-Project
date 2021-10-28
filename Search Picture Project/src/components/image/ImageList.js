import React from 'react';
import "./imagelist.css";

 const ImageList = ({images}) => {

    const preparedImageList = images.map(image =>{
        return(
            <img key={image.id} src={image.urls.small} alt="" />
        )
    });

    return (
        <div className="image-list-container">
            {/*{images.length} kadar resim var.*/}
            {preparedImageList}
        </div>
    )
}
export default ImageList;