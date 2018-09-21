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
        this.setState = this.setState.bind(this);
        this.itemRef = this.getRef().child('shopify');
        this.itemRef.on('value',data=>{this.setState({data:data.val()});},err=>console.log(err));    
        
    }
    getRef(){
        return firebaseApp.database().ref();
      }
      handleClick(e){
        e.preventDefault();
        let key = e.target.id;
        let mod_key = key-1;
        let ref = firebaseApp.database().ref().child('shopify');
        ref.orderByKey().equalTo(e.target.id).on('value', snap=>{
            console.log(snap.val()[key].name+mod_key);
           
            console.log(snap.val()[key].Language+mod_key);
            console.log(snap.val()[key].LatestTag+mod_key);
            document.getElementById(snap.val()[key].name+mod_key).innerHTML = snap.val()[key].name;
            document.getElementById(snap.val()[key].Language+mod_key).innerHTML = snap.val()[key].Language;
            document.getElementById(snap.val()[key].LatestTag+mod_key).innerHTML = snap.val()[key].LatestTag;
            document.getElementById('remove'+mod_key).innerHTML = 'Remove';
        })
        
        
    }
    handleRemoveClick(e){
        e.preventDefault();
        let id = e.target.id;
        let row_to_remove = parseInt(id.split('remove')[1]);
        console.log('remove'+row_to_remove);
        document.getElementsByClassName('remove'+row_to_remove)[0].innerHTML = '';
        document.getElementsByClassName('remove'+row_to_remove)[1].innerHTML = '';
        document.getElementsByClassName('remove'+row_to_remove)[2].innerHTML = '';
        document.getElementsByClassName('remove'+row_to_remove)[3].innerHTML = '';

    }
       
  render() {
      
      let table_body=[];
      let table_body_right=[];
      let table_data = this.state.data;
      let keys = Object.keys(table_data);
      console.log(keys);
      
      let i;
      
      for(i=0;i<keys.length;i++){
          var k = keys[i];
          let name = table_data[k].name;
          let language = table_data[k].Language;
          let latest_tag = table_data[k].LatestTag;
          let remove = 'remove';
        table_body[i] = 
        
        <tr key={k}>
            <td>{name}</td>
            <td>{language}</td>
            <td>{latest_tag}</td>
            <td  id = {k} onClick={this.handleClick}>Add</td>
        </tr>
        
   ;
   table_body_right[i] = 
        <tr key={k} >
            <td id ={name + i} className={remove + i}></td>
            <td id ={language + i} className={remove + i}></td>
            <td id ={latest_tag + i} className={remove + i}></td>
            <td id={remove + i} className={remove + i} onClick={this.handleRemoveClick}></td>
            
        </tr>
    ;
      }
     
      
    return (
      <div className='listDiv'>
        
        

        <div className='container'>
            <div className='row'>
            <div className='col'>
                    <table className = 'table'>
                        
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                        </tr>
                            {table_body}
                      
                    </table>
            </div>
            <div className='col'>
            <table className = 'table'>
                        
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                        </tr>
                        {table_body_right}
                      
                    </table>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default List;