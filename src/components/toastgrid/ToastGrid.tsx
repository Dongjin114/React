import React, { useEffect } from "react";
import Grid from "tui-grid"; // TOAST UI Grid 임포트
import "tui-grid/dist/tui-grid.css"; // TOAST UI Grid 스타일 임포트
import * as ToastStyle from "./ToastGrid .style";
import { OptColumn } from "tui-grid/types/options";

// 그리드 데이터의 타입 정의
interface GridData {
  name: string;
  artist: string;
  type: string;
  release: string;
  genre1: "Genre 1";
  genre2: "Genre 1";
  genre3: "Genre 1";
  genre4: "Genre 1";
  genre5: "Genre 1";
}

const gridColums: OptColumn[] = [

  {
    header: "Name(desc)",
    name: "name",
    sortingType: "desc",
    sortable: true,
  },
  {
    header: "Artist(asc)",
    name: "artist",
    sortingType: "asc",
    sortable: true,
  },
  {
    header: "Type",
    name: "type",
  },
  {
    header: "Release",
    name: "release",
  },
  {
    header: "Genre1",
    name: "genre1",
  },
  {
    header: "Genre2",
    name: "genre2",
  },
  {
    header: "Genre3",
    name: "genre3",
  },
  {
    header: "Genre4",
    name: "genre4",
  },
  {
    header: "Genre5",
    name: "genre5",
  },

]

// 예시 데이터
const gridData: GridData[] = [
  {
    name: "Song 1",
    artist: "Artist 1",
    type: "Type 1",
    release: "2021",
    genre1: "Genre 1",
    genre2: "Genre 1",
    genre3: "Genre 1",
    genre4: "Genre 1",
    genre5: "Genre 1",
  },
  {
    name: "Song 2",
    artist: "Artist 2",
    type: "Type 2",
    release: "2022",
    genre1: "Genre 1",
    genre2: "Genre 1",
    genre3: "Genre 1",
    genre4: "Genre 1",
    genre5: "Genre 1",
  },

  // 추가 데이터...
];

function Toastgrid() {
  useEffect(() => {
    const gridElement = document.getElementById("grid");

    if (gridElement) {
      // TOAST UI Grid 인스턴스 생성
      const grid = new Grid({
        el: gridElement, // 그리드를 렌더링할 DOM 요소
        data: gridData as any, // TOAST UI Grid의 data 타입에 맞게 변환
        scrollX: true,
        scrollY: true, // 수직 스크롤 가능
        width: 800,
        bodyHeight: 300,
        columns: gridColums,
        columnOptions: {
          resizable: true,
        },
      });

      // grid.setBodyHeight(300);
      // grid.setWidth(800);

      // 컴포넌트 언마운트 시 그리드 인스턴스 파괴
      return () => {
        grid.destroy();
      };
    }
  }, []); // 빈 배열로 의존성 설정하여 마운트 시 한 번만 실행

  return (
    <div className="App">
      {/* <ToastStyle.StyledGrid> */}
      <ToastStyle.theme>
        <div id="grid"></div>
      </ToastStyle.theme>
      {/* </ToastStyle.StyledGrid> */}
    </div>
  );
}

export default Toastgrid;
