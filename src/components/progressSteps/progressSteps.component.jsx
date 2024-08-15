import React from 'react'
import styled from 'styled-components'
import "./progressSteps.styles.scss";

const MainContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
`

const StepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15%;
    position: relative;
`
const ProgressBarBackGround = styled.div`
    position: absolute;
    background: rgba(124, 171, 255, 0.5);;
    height: 10px;
    width: 96%;
    top: 50%;
    transform: translateY(-50%);
    left: 2%;

`
const ProgressBarMiddleLineBackground = styled.div`
    position: absolute;
    background:rgba(100, 149, 237, 0.84);;
    height: 2px;
    width: 96%;
    top: 50%;
    transform: translateY(-48%);
    left: 2%;

`   
const ProgressBarFill = styled.div`
    position: absolute;
    background: #585EF1;
    height: 10px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 2%;
`

const ProgressBarMiddleLineFill = styled.div`
    position: absolute;
    background: #fff;
    height: 2px;
    width: ${({ width }) => width};
    top: 50%;
    transform: translateY(-50%);
    left: 2%;

`
const StepWrapper = styled.div`
    position: relative;
    z-index: 1;
`

const StepStyle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #000;
    border: 5px solid
    ${({ step }) => (step === 'completed' ? '#BDD5FF' : '#22385C')};
    transition: 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
`


const ProgressSteps = ({currentStep,totalSteps,OnStepClick}) => {

    const width = `${(96 / (totalSteps - 1)) * (currentStep)}%`
    let steps = [];
    for (let i = 0; i<totalSteps; i++)
    {
        steps.push(
            <StepWrapper key={i}>
                <StepStyle onClick={()=>{OnStepClick(i)}} style={{backgroundColor:(currentStep === i)?"#585EF1":"#000"}}  step={ i < currentStep ? 'completed' : 'incomplete'}/>
            </StepWrapper>
        )
    }
    
    return (
        <MainContainer>
            <StepContainer >
                <ProgressBarBackGround/>
                <ProgressBarMiddleLineBackground/>
                {steps}
                <ProgressBarFill width={width}/>
                <ProgressBarMiddleLineFill width={width}/>
            </StepContainer>
        </MainContainer>

    )
}

export default ProgressSteps