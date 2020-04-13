import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
  <div className='collection-page'>
    <h2 className='title'>{ title }</h2>
    <div className='items'>
      {
        items.map (item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  </div>
)};

// ownProps is the props of the componenet that we are wrapping in our connect
const mapStateToProps = (state, ownProps) => ({
  // Our selectcollection will return a function, inside the second function, we need to apsss state
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);