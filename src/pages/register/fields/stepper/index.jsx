import { TextC } from "../../../../components/Typography";
import { Theme } from "../../../../theme"
import * as S from './styled';


const Steps = ({ currentStep }) => {
    console.log(currentStep);
    
    return (
        <S.Steps>
            <S.Step className=" active">
                <Theme.Icons.FaDatabase />
                <TextC.Label level={3}>Identificação</TextC.Label>
            </S.Step>
            <S.Step  className={`${currentStep >= 1 ? "active" : ""}`}>
                <Theme.Icons.MdLocationOn />
                <TextC.Label level={3}>Endereço</TextC.Label>
            </S.Step>
            <S.Step  className={`${currentStep >= 2 ? "active" : ""}`}>
                <Theme.Icons.RiSendPlaneFill />
                <TextC.Label level={3}>Envio</TextC.Label>
            </S.Step>
        </S.Steps>
    );
};

export default Steps;  

    


