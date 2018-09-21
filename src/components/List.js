import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css';
import firebaseApp from '../Firebase';


class List extends Component {
    constructor(){
        super();
        this.state = {
            data : ''

        }
        this.itemRef = this.getRef().child('shopify');
        this.itemRef.on('value',data=>{this.setState({data:data.val()});},err=>console.log(err));    
    }
    getRef(){
        return firebaseApp.database().ref();
      }
       
  render() {
      let text = 'dddd';
      let table_body=[];
      let table_data = this.state.data;
      let keys = Object.keys(table_data);
      console.log(keys);
      
      let i;
      
      for(i=0;i<keys.length;i++){
          var k = keys[i];
          let name = table_data[k].name;
          let language = table_data[k].Language;
          let latest_tag = table_data[k].LatestTag;
        table_body[i] = 
        
        <tr>
        <td>{name}</td>
        <td>{language}</td>
        <td>{latest_tag}</td>
        </tr>
   ;
      }
     
      
    return (
      <div className='listDiv'>
        
        <table className = 'table'>
        <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Latest tag</th>
        </tr>
            {table_body}
        </table>
      </div>
    )
  }
}

export default List;