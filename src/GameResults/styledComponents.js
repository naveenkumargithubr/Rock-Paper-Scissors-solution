import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const GameResultImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 920px;
`

export const GameResultButtonContainer = styled.div`
  padding: 20px;
`

export const GameResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultText = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`

export const ResultImgYou = styled.img`
  height: 150px;
  width: 150px;
`

export const GameResultMessage = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 0px;
  margin-top: 50px;
`

export const PlayAgainBtn = styled.button`
  padding: 8px 12px 8px 12px;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  width: 125px;
`
