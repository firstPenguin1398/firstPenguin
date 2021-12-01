import React, { Component } from 'react';
import Subject from './my_compo/Subject';
import TOC from './my_compo/TOC';
import CreateContent from './my_compo/CreateContent';
import ReadContent from './my_compo/ReadContent';
import UpdateContent from './my_compo/UpdateContent';
import Control from './my_compo/Control';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id =3;
    this.state={
      mode:"welcome",

      selected_content_id:2,

      subject:{title:"자유게시판",sub:"자유게시판입니다."},

      welcome:{title:"퍼스트펭귄",desc:"퍼스트펭귄 자유게시판입니다."},

      contents:[
        {id:1, title:'조인성', desc:'인성은 인성이 훌륭함 bb'},
        {id:2, title:'유나', desc:'유나는 예비머학원생...애도★'},
        {id:3, title:'은서', desc:'은서는 siverwest 銀西'}
      ]

    }
  }

  getReadContent(){
    var i = 0;
    while (i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id===this.state.selected_content_id){
        return data;
        break;
      }    
      i=i+1;
  }
}







  getContent(){
    var _title, _desc,_article= null;
    if(this.state.mode==="welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }

    else if(this.state.mode==="read"){
      var _contents=this.getReadContent();
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>
    }

    else if(this.state.mode==='create'){
      _article= <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id +=1;
        this.state.contents.push(
        {id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          contents:this.state.contents
        });
      }.bind(this)}></CreateContent>
    }

    else if(this.state.mode==='update'){
      _contents = this.getReadContent();
      _article= <UpdateContent data = {_contents} onSubmit={
        function(_id,_title,_desc){
          var _contents = Array.from(this.state.contents);
          var i =0;
          while (i<_contents.length){
            if(_contents[i].id===_id){
              _contents[i] = {id:_id, title:_title, desc:_desc}
              break;
            }
            i =i+1;
          }


        this.setState({
          contents:_contents
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }







  render(){

    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        >        
        </Subject>

        <TOC
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}>
        </TOC>

        <Control
        onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}



        >

        </Control>

        {this.getContent()}
        {/* <ReadContent 
        title={_title}
        desc={_desc}>
        </ReadContent> */}
      </div>
    );
  }
}

export default App;
