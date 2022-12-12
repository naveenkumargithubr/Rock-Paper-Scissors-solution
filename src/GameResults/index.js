import {
  GameResultContainer,
  GameResultImgContainer,
  GameResultTextContainer,
  ResultText,
  ResultImgYou,
  GameResultMessage,
  GameResultButtonContainer,
  PlayAgainBtn,
} from './styledComponents'

const GameResults = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    playAgain(id)
  }

  return (
    <GameResultContainer>
      <GameResultImgContainer>
        <GameResultTextContainer>
          <ResultText>YOU</ResultText>
          <ResultImgYou src={myChoice[1]} alt="your choice" />
        </GameResultTextContainer>
        <GameResultTextContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImgYou src={imageUrl} alt="opponent choice" />
        </GameResultTextContainer>
      </GameResultImgContainer>
      <GameResultMessage>{resultMessage}</GameResultMessage>
      <GameResultButtonContainer>
        <PlayAgainBtn type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainBtn>
      </GameResultButtonContainer>
    </GameResultContainer>
  )
}

export default GameResults
