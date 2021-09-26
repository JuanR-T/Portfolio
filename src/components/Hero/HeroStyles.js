import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 0 auto;
    text-align:center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 0 auto;
    text-align:center;
  }
`;

export const ProfileImageDiv = styled.image `
  width:200px;
  height:200px;
  display:flex;
  align-item:center;
  justify-item:center;
  justify-content:center;
  border-radius:50% !important;
  border: 5px solid #7D70E7;
`;
