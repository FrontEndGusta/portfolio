import styled from "styled-components";

export const SessionTreeContainer = styled.div`

.hidden{
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
}
.hidden h2{
    text-align: center;
    margin: 50px 0;
    color: ${props => props.theme.colors.primary};
}

.show{
    opacity: 1;
    transition: all 1s;
    transform: translateX(0)
}

.containerCards :nth-child(2){
    transition-delay: 300ms;
}

.containerCards :nth-child(3){
    transition-delay: 600ms;
}

.containerCards{
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 0 50px 0 50px;
    margin-top: 50px;
}


@media (width <= 650px) {
    .containerCards{
        flex-direction: column;
        gap:30px;
    }
    .hidden{
        display: flex;
        flex-direction: column;
    }
    .hidden h2{
        margin: 50px 0 0;
    }
}

.avatar{
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
}
`