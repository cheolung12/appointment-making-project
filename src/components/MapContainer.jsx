import React, { useEffect, useRef } from 'react';

const { kakao } = window;

export default function MapContainer({ searchPlaces }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
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

            async function callback(result, status) {
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
        var content =
          '<div class="customoverlay">' +
          // '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          `    <span class="title">${place.place_name}</span>` +
          '  </a>' +
          '</div>';
        
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
        var customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          content,
          yAnchor: 1,
        });
       
      }

      let imageSrc =
        'https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png';
      let imageSize = new kakao.maps.Size(20, 32);
      let imageOption = {offset: new kakao.maps.Point(10, 32)}; 
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      function displayCenterMarker(place) {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(place.y, place.x),
          image: markerImage,
        });
        marker.setMap(map);
        var content =
          '<div class="customoverlay center">' +
          // '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          `    <span class="title">${place.address_name}</span>` +
          '  </a>' +
          '</div>';
        
        var customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          content,
          yAnchor: 1,
        });
      }
    });
  }, [searchPlaces]);

  // const 근처지하철역 = () => {
  //   ps.categorySearch('SW8', placesSearchSubway, {useMapBounds:true});
  //   function placesSearchSubway(data, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     let filteredResults = [];

  //     // 최대 3개의 역만 선택하도록 반복문을 사용합니다.
  //     for (var i = 0; i < Math.min(3, data.length); i++) {
  //       filteredResults.push(data[i]);
  //     }
  //     // 필터링된 결과를 출력합니다.
  //     for (var i = 0; i < filteredResults.length; i++) {
  //       console.log(filteredResults[i]);
  //     }
  //   }
  // }
  // }

  return <div id='myMap' ref={containerRef} className='w-full h-full'></div>;
}
