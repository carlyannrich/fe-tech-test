import styled from 'styled-components';


const StyledSearchInput = styled.div`
.content-section {
  margin: 0 auto;
  width: 70%;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "content content content content" ". button button ." ". . . .";
}

.content {
  grid-area: content;
  display: flex;
  justify-content: center;
  margin: 0% 16% 0% 16%;
}

#searchArea {
    border: 1px solid #000;;
    border-radius: 10px;
    margin: 5% 0% 1% 0%;
    width: 55%;
    text-align: center;
}

input {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 2;
    color: #000;
    text-align: left;
    border-width:0px;
    border:none;
    width: 80%;
    margin: auto 3%;

    &:focus {
        border-width:0px;
        border: none;
  }
}

img {
    text-align: left;
    width: 20px;
    margin-top: 3%;
}

`;

export default StyledSearchInput;