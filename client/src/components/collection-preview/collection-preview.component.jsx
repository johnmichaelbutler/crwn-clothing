import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import CollectionPreviewContainer from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <h1>{title.toUpperCase()}</h1>
    <div>
      {
        // Checks to make sure that only 4 items are passed to shop page then maps over to return a div with item name
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </CollectionPreviewContainer>
)

export default CollectionPreview;