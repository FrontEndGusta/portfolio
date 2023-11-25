import styled from "styled-components";

export const SessionTreeContainer = styled.div`

.hidden{
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
    
}

.show{
    opacity: 1;
    transition: all 1s;
    transform: translateX(0);
}


h2{
    text-align: center;
    margin: 50px 0;
    color: ${props => props.theme.colors.primary};
}
.containerCards{
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 50px 0 50px;
    margin: 50px 0 50px;
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