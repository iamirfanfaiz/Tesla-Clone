import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Header/>
            <Section title="Model S" des="Order Online for Touchless Delivery" backgroundImg="model-s.jpg" leftBtnText="Custom Order" rightBtnText="Exsiting Inventory" />
            <Section title="Model Y" des="Order Online for Touchless Delivery" backgroundImg="model-y.jpg" leftBtnText="Custom Order" rightBtnText="Exsiting Inventory" />
            <Section title="Model 3" des="Order Online for Touchless Delivery" backgroundImg="model-3.jpg" leftBtnText="Custom Order" rightBtnText="Exsiting Inventory" />
            <Section title="Model X" des="Order Online for Touchless Delivery" backgroundImg="model-x.jpg" leftBtnText="Custom Order" rightBtnText="Exsiting Inventory" />
            <Section title="Lowest Cost Solar Panels in America" des="Money back Gurantee" backgroundImg="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
            <Section title="Solar for New Roofs" des="Solar Roof Costs Less Than a New Roof" backgroundImg="solar-roof.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
            <Section title="Accessories" backgroundImg="accessories.jpg" leftBtnText="Order Now" />
        
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`
