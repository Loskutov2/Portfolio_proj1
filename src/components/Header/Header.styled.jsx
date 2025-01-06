import styled from "styled-components";


const sunSVG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>')`;
const moonSVG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="rgba(26, 8, 17, 0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"></path></svg>')`

export const HeaderBox = styled.div`
`

export const ThemeToggle = styled.input`
  margin-bottom: -5px;
  appearance: none;
  cursor: pointer;
  background-image: ${({ checked }) => (checked ? moonSVG : sunSVG)};
  background-repeat: no-repeat;
  transform: rotate(${({ checked }) => (checked ? 0 : "360deg")});
  transition: all 0.4s ease-in-out;
  background-size: cover;
  width: 35px;
  height: 35px;
`;

export const HeadList = styled.ul`
  width: 100%;
  display: flex;
  & li{
    margin: auto;
    font-size: large;
    &:hover,&:focus{
      transform: scale(1.1);
      text-decoration: underline;
  }}
`