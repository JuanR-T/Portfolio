import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
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