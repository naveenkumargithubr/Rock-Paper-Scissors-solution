import styled from 'styled-components'

export const GameContainer = styled.div`
 background-color:  #223a5f;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: space-between
 color: #ffffff;
 padding: 30px;
`

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid #ffffff;
  padding: 15px;
`

export const GameItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.4;
`

export const ScoreCardContainer = styled.div`
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`

export const ScoreParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 15px;
`

export const ScoreResults = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-top: 0px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopupButton = styled.button`
  width: 100px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #223a5f;
  padding: 8px 10px 8px 10px;
  border-radius: 6px;
  border: none;
`

export const CloseIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CloseIconBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
  align-self: flex-end;
`

export const RulesImg = styled.img`
  height: 100%;
  width: 100%;
`

export const ImageBtnsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0px;
`
