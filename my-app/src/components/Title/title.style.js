import styled from 'styled-components';


const StyledTitle = styled.div`
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
.title {
  grid-area: content;
  display: flex;
  justify-content: center;
  margin: 0%;
}
h1 {
  font-family: 'Roboto';
  font-size: 50px;
  line-height: 1;
  text-align: center;
  color: #000;
}
`;

export default StyledTitle;