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
    const cor = [];

    // 장소 검색 객체
    const ps = new kakao.maps.services.Places();

    // LatLngBounds 객체를 생성하여 모든 마커를 포함할 범위를 설정
    let bounds = new kakao.maps.LatLngBounds();

    searchPlaces.forEach((searchPlace) => {
      ps.keywordSearch(searchPlace, placesSearchCB);
      
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          displayMarker(data[0]);
          bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));

          // 모든 마커를 포함하는 범위로 지도 설정
          map.setBounds(bounds);
          cor.push({ x: Number(data[0].x), y: Number(data[0].y) });

          if (cor.length === searchPlaces.length) {
            const centerX =
              cor.reduce((acc, cur) => acc + cur.x, 0) / searchPlaces.length;
            const centerY =
              cor.reduce((acc, cur) => acc + cur.y, 0) / searchPlaces.length;
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.coord2Address(centerX, centerY, callback);
            function callback(result, status) {
              if (status === kakao.maps.services.Status.OK) {
                console.log(result[0]);
                const center = {
                  address_name: result[0].address.address_name,
                  x: centerX,
                  y: centerY,
                  center: true,
                };
                displayCenterMarker(center);
              }
            }
          }
        }
      }

      function displayMarker(place) {
        let infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
        infowindow.setContent(searchPlace);
        infowindow.open(map, marker);
      }

      let imageSrc = 'https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png';
      let imageSize = new kakao.maps.Size(20, 32);

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      function displayCenterMarker(place) {
        let infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          image: markerImage
      });
        infowindow.setContent(place.address_name);
        infowindow.open(map, marker);
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
