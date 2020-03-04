import React from 'react'
import styled from 'styled-components'

import TopBar from './topbar/TopBar'
import Menu from './menu/Menu'

const MainContainer = styled.div`
    height: 100%;
`

const Mid = styled.div`
    display: flex;
    height: 100%;
`

const Work = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 100%;
    height: 100%;
`

const payload = [
    {
        label: "lövträd",
        id: 0,
        expanded: true,
        children: [
            {
                id: 1,
                label: "björk",
                expanded: false,
                children: [
                    {
                        id:2,
                        label: "skogsbjörk"
                    },
                    {
                        id: 3,
                        label: "hängbjörk"
                    }
                ]
            },
            {
                id: 4,
                label: "ek",
                expanded: true,
                children: [
                    {
                        id: 5,
                        label: "skogsek"
                    },
                    {
                        id: 6,
                        label: "rödek"
                    },
                    {
                        id: 7,
                        label: "korkek"
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        label: "barrträd",
        expanded: false,
        children: [
            {
                id: 9,
                label: "tall"
            },
            {
                id: 10,
                label: "gran"
            }
        ]
    }
]

export default () => (
    <MainContainer>
        <TopBar/>
        <Mid>
            <Menu payload={payload} loadWork={(id) => console.log('Loadwork...id: ', id)}/>
            <Work>
                Workarea
            </Work>
        </Mid>
    </MainContainer>
)
