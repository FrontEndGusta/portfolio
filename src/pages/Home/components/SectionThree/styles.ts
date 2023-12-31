import styled from "styled-components";

export const SessionTreeContainer = styled.div`

.hidden {
   opacity: 0;
   transform: translateX(-100%);
   
}

.show {
   opacity: 1;
   transform: translateX(0);
   transition: all 1s;
}


h2{
    text-align: center;
    margin: 50px 0;
    color: ${props => props.theme.colors.primary};
}
.containerCards{
    display: flex;
    align-items:center;
    width: 80%;
    flex-wrap: wrap;
    gap: 30px;
    margin: 50px auto 50px;
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