import React,{Component} from  'react';
// import {Link} from 'react-router';



import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

const styles={
  main:{
    
  }
};


class Layout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div style={styles.main}>
          <Header siteTitle="十二棵橡树"/>
            <div className="app-content">
              {this.props.children}
            </div>
          <Footer/>
        </div>
    );
  }
}


export default Layout;