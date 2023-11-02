import styled from "styled-components";

export const SessionTreeContainer = styled.div`

.hidden{
    
    opacity: 0;
    transform: translateX(-100%);
    transition: all 2s;
}
.hidden h2{
    text-align: center;
    margin: 50px 0;
}

.show{
    opacity: 1;
    transition: all 2s;
    transform: translateX(0)
}

.containerCards :nth-child(2){
    transition-delay: 600ms;
}

.containerCards :nth-child(3){
    transition-delay: 1000ms;
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
}

.containerCards :nth-child(2){
    transition-delay: 500ms ;
}
.containerCards :nth-child(3){
    transition-delay: 700ms ;
}

.avatar{
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
}
`