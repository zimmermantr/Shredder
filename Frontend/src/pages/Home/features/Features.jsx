import styled from 'styled-components';


const FeatureCont = styled.div`
        width: 30%;
        height: 12rem;
        text-align: center;
        border: 1px rgb(71, 71, 71) solid;
        border-radius: 2rem;
        padding: 5px;

        &:hover {
            border: #c776f6b7 1px solid;
            box-shadow: 1px 5px 30px 1px #e8c0ffb7;
        }

        `;
    
const FeatureTitle = styled.div`
        padding: 1rem;
        font-size: 1.5rem;
        `;

const FeatureDescr = styled.p`

        `;

const FeatureImg = styled.img`

        `;


export const Features = ({imageSRC, title, description}) => {

    return (
        <FeatureCont>

            <FeatureImg src={imageSRC} alt='img' />
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescr>{description}</FeatureDescr>

        </FeatureCont>
    )
};

export default Features;
