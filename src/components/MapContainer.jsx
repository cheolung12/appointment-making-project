import React, { useEffect } from 'react';

const { kakao } = window;

export default function MapContainer({ searchPlaces }) {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 장소 검색 객체
    const ps = new kakao.maps.services.Places();

    // LatLngBounds 객체를 생성하여 모든 마커를 포함할 범위를 설정
    let bounds = new kakao.maps.LatLngBounds();

    searchPlaces.forEach((searchPlace) => {
      ps.keywordSearch(searchPlace, placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          displayMarker(data[0]);
          bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));

          // 모든 마커를 포함하는 범위로 지도 설정
          map.setBounds(bounds);
        }
      }

      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
      }
    });
  }, [searchPlaces]);

  return (
    <div
      id='myMap'
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
}
