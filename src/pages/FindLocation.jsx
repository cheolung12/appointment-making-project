import React from 'react';
import SearchPlaceInput from '../components/SearchPlaceInput';

export default function FindLocation() {
  return (
    <>
      {/* <NavermapsProvider ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}>
        <Map />
      </NavermapsProvider> */}
      <SearchPlaceInput />
    </>
  );
}
