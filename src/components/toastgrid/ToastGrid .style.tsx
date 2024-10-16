import styled from "styled-components";

export const StyledGrid = styled.div`
  .tui-grid-body-area {
    overflow-y: hidden;
  }
  .tui-grid-scrollbar-right-top {
    display: none;
  }
  .tui-grid-scrollbar-y-outer-border {
    display: none;
  }
  .tui-grid-scrollbar-right-bottom {
    display: none;
  }
  .tui-grid-content-area {
    border-style: none;
  }

  .tui-grid-table-container {
    border: 1px;
  }
  .tui-grid-border-line-top {
    // display: none;
  }
  .tui-grid-header-area .tui-grid-table {
    border-top: 2px solid #000;
  }

  .tui-grid-rside-area .tui-grid-header-area,
  .tui-grid-rside-area .tui-grid-summary-area {
    margin-right: 0px;
    border-bottom: none;
  }

  .tui-grid-scrollbar-y-inner-border {
    display: none;
  }

  .tui-grid-border-line-top {
    border-top: none;
  }

  .tui-grid-rside-area .tui-grid-header-area,
  .tui-grid-rside-area .tui-grid-summary-area {
    margin-right: none;
  }
`;



export const theme = styled.div`
selection: {
    background: '#4daaf9',
    border: '#004082'
  },
  scrollbar: {
    background: '#f5f5f5',
    thumb: '#d9d9d9',
    active: '#c1c1c1'
  },
  row: {
    even: {
      background: '#f3ffe3'
    },
    hover: {
      background: '#ccc'
    }
  },
  cell: {
    normal: {
      background: '#fbfbfb',
      border: '#e0e0e0',
      showVerticalBorder: true
    },
    header: {
      background: '#eee',
      border: '#ccc',
      showVerticalBorder: true
    },
    rowHeader: {
      border: '#ccc',
      showVerticalBorder: true
    },
    editable: {
      background: '#fbfbfb'
    },
    selectedHeader: {
      background: '#d8d8d8'
    },
    focused: {
      border: '#418ed4'
    },
    disabled: {
      text: '#b0b0b0'
    }
  }
`;
