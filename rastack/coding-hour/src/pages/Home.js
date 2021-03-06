import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import { Route, BrowserRouter} from 'react-router-dom';
import { CreateClass, JoinClass, ClassMain, ClassInfo} from '../containers/Class';
import { ViewPost, CreatePost} from '../containers/Post';
import { Profile } from '../containers/Profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Home extends Component {
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <Main>
                 
                    <Route path="/home/class/create" component = {CreateClass}/>
                    <Route path="/home/class/join" component = {JoinClass}/> 
                    <Route path="/home/class/main/:classId" component = {ClassMain} />
                    <Route path="/home/post/create" component = {CreatePost} />
                    <Route path="/home/post/view/:postId" component = {ViewPost} />
                    <Route path="/home/profile" component= { Profile }/>
                
                </Main>
                
            </div>
        )
    }
}

export default Home
