import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import ButtonImages from '../ButtonImages'
import GameResults from '../GameResults'

import {
  GameContainer,
  GameScoreContainer,
  GameItemsContainer,
  Heading,
  ScoreCardContainer,
  ScoreParagraph,
  ScoreResults,
  PopupContainer,
  PopupButton,
  CloseIconContainer,
  CloseIconBtn,
  RulesImg,
  ImageBtnsContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

class GameView extends Component {
  state = {
    showResults: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResults: false})

  onGetResults = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    //  const {id, imageUrl} = opponentChoice

    return (
      <GameResults
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetBtnResult = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResults: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImageBtns = () => {
    const {choicesList} = this.props
    return (
      <ImageBtnsContainer>
        {choicesList.map(eachBtn => (
          <ButtonImages
            key={eachBtn.id}
            buttonDetails={eachBtn}
            onGetBtnResult={this.onGetBtnResult}
          />
        ))}
      </ImageBtnsContainer>
    )
  }

  render() {
    const {score, showResults} = this.state
    return (
      // GameContainer is the main container of the entire code
      <GameContainer>
        <GameScoreContainer>
          <GameItemsContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </GameItemsContainer>

          {/* Now we design the score card container */}
          <ScoreCardContainer>
            <ScoreParagraph>Score</ScoreParagraph>
            <ScoreResults>{score}</ScoreResults>
          </ScoreCardContainer>
        </GameScoreContainer>
        {showResults ? this.onGetResults() : this.onGetImageBtns()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <CloseIconContainer>
                <CloseIconBtn type="button" onClick={() => close()}>
                  <RiCloseLine />
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </CloseIconBtn>
              </CloseIconContainer>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default GameView
