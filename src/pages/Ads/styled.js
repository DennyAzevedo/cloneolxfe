import styled from 'styled-components';

export const PageArea = styled.div`
	display: flex;
	margin-top: 20px;

	.leftSide {
		width: 250px;
		margin-right: 10px;

		.filterName {
			font-size: 15px;
			margin: 10px 0;
		}

    input, select{
      width: 100%;
      height: 40px;
      border: 1px solid #9bb83c;
      border-radius: 5px;
      outline: none;
			font-size: 15px;
      color: #000;
      padding: 10px;
    }

    ul, li{
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .categoryItem{
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color: #000;
      cursor: pointer;

      img{
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }

      span{
        font-size: 14px;
      }
    }

    .categoryItem:hover,
    .categoryItem.active{
      background-color: #9bb83c;
      color: #fff;
    }
  }

  .rightSide{
    flex: 1;

    h2{
      margin-top:0;
      font-size: 18px;
    }
		
		.list{
      display: flex;
      flex-wrap: wrap;
			
      .aditem{
        width:33%;
      }
    }

    .ListWarning{
      padding: 30px;
      text-align: center;
    }

    .pagination{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      margin: 10px 0;
      flex-wrap: wrap;
      .pagItem{
        width: 30px;
        height: 30px;
        display: flex;
        border: 1px solid #000;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 5px;
        
        &:hover{
          border:1px solid #999;
        }
        &.active{
          background-color:#CCC;
        }
      }
    }
	}
`;