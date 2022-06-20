import React from 'react'
import {
    ManWrappper,
    MainContainer
} from './styles'
import ComponentSidebar from '../ComponentSidebar'
import Header from '../Header'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom"

export default function Main() {

    const language = useSelector(state => state.language)

    return (
        <ManWrappper>
            <ComponentSidebar />
            <MainContainer>
                <Header/>
                <Outlet/>
                <p> {language}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet excepturi aut in nulla earum, veniam iusto debitis ad quaerat cum necessitatibus a consequatur sit facere quidem molestiae tempore ut!
                </p>
            </MainContainer>
        </ManWrappper>
    )
}
