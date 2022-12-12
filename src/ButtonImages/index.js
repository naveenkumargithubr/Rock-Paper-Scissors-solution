import {ButtonList, ButtonImg, ImageBtn} from './styledComponents'

const ButtonImages = props => {
  const {buttonDetails, onGetBtnResult} = props
  const {id, imageUrl} = buttonDetails
  // const lowerCaseData = id.lowerCase()

  const onClickButton = () => {
    onGetBtnResult(id, imageUrl)
  }

  return (
    <ButtonList>
      <ButtonImg type="button" onClick={onClickButton}>
        <ImageBtn src={imageUrl} alt={id} />
      </ButtonImg>
    </ButtonList>
  )
}

export default ButtonImages
