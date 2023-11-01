import styled from "styled-components";

export const SessionTreeContainer = styled.div`
.AllProjects{
    height: 100vh;
}
.AllProjects h2{
    text-align: center;
    margin: 50px 0;
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
    }
}

`