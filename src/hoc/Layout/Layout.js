import React, { Component } from 'react'
import classes from './Layout.module.scss'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    };

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer isAuth={this.props.isAuth} isOpen={this.state.menu} onClose={this.menuCloseHandler}/>

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }
}
export default connect(mapStateToProps)(Layout);
