import {ButtonList, ButtonImg, ImageBtn} from './styledComponents'

const ButtonImages = props => {
  const {buttonDetails, onGetBtnResult} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase() // converting the id to lowercase

  const onClickButton = () => {
    onGetBtnResult(id, imageUrl)
  }

  return (
    <ButtonList>
      <ButtonImg 
         type="button" 
         onClick={onClickButton}  
         data-testid={`${lowerCaseId}Button`}> // update the testid here
        <ImageBtn src={imageUrl} alt={id} />
      </ButtonImg>
    </ButtonList>
  )
}

export default ButtonImages
