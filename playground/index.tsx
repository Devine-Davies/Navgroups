import * as React from "react";
import * as ReactDOM from "react-dom";
import { NgController, NavGroup, NavItem } from "../index";

const App = () => (

    <div className='window' >

        <aside className="side-menu">

            <NavGroup name="menu" direction="vertical" onLeft="" onRight="ng:last"  >

                <NavItem>Home</NavItem>

                <NavItem>Movies</NavItem>

                <NavItem>Music</NavItem>

                <NavItem>Profile</NavItem>

                <NavItem >Setting</NavItem>

            </NavGroup>

        </aside>

        <div className='body'  >

            <NavGroup historyItem >

                <NavItem onEnter="ng:inner-group" onLeft="ng:menu"  >

                    <p>Nested groups <br/> (enter to go inside) </p>

                    <NavGroup name="inner-group" onBack="ng:last|ni:5" >

                        <NavItem name="inside" onLeft="ng:last|ni:1" >Item</NavItem>

                        <NavItem  onRight="ng:last|ni:2" >Item</NavItem>

                    </NavGroup>

                </NavItem>

                <NavItem onEnter="ng:inner-group2" >

                    <p>Nested groups <br/> (enter to go inside) </p>

                    <NavGroup name="inner-group2" onBack="ng:last|ni:2" >

                        <NavItem onLeft="ng:last|ni:5" >Item</NavItem>

                        <NavItem >Item</NavItem>

                        <NavItem onRight="ng:section-2|ni:first" >Item</NavItem>

                    </NavGroup>

                </NavItem>

            </NavGroup>

            <NavGroup name="section-2" indicateActiveItem  >

                <NavItem onLeft="ng:menu" >Item</NavItem>

                <NavItem onEnter="ng:inner-group|ni:2" >Item</NavItem>

                <NavItem startingPoint onRight="ni:last" >goto End</NavItem>

                <NavItem >Item</NavItem>

                <NavItem >Item</NavItem>

                <NavItem onRight="" name="boom" >End</NavItem>

            </NavGroup>

            <NavGroup name="with-hook" >

                <NavItem onLeft="ng:menu" >Item</NavItem>

                <NavItem entryPoint onBack='hook:install-game' >Entry item</NavItem>

                <NavItem >Item</NavItem>

                <NavItem name="hook-item" onEnter="hook:my-custom-hook" >Hook</NavItem>

                <NavItem >Item</NavItem>

                <NavItem onRight="" >Item</NavItem>

            </NavGroup>

            <NavGroup >

                <NavItem onLeft="ng:menu" >Item</NavItem>

                <NavItem entryPoint >Entry item</NavItem>

                <NavItem >Item</NavItem>

                <NavItem name="hook-item" onEnter="hook:my-custom-hook" >Hook</NavItem>

                <NavItem >Item</NavItem>

                <NavItem onRight="" >Item</NavItem>

            </NavGroup>

        </div>

    </div>
);

window.onload = function(e){ 

    NgController.set('hook:install-game',  ( args : any ) => { 
        console.log( args );
    });

}

ReactDOM.render(<App />, document.getElementById("example") );