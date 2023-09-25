import { CenterContainer } from 'components/BodyStyle';
import { RotatingLines } from  'react-loader-spinner'

const Loader = ()=>{
    return(
        <CenterContainer>
        <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        </CenterContainer>
    )
}
export default Loader;