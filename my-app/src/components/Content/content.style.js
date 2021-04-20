import styled from 'styled-components';


const StyledContent = styled.div`
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
h2 {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 25px;
  line-height: 1;
  text-align: center;
  color: #000;
  margin: 1% 0% 1% 0%;
}
`;

export default StyledContent;