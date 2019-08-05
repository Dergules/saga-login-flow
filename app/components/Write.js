import React, {Component} from 'react'
import {connect} from 'react-redux'
import Editor from 'for-editor'
import ReactDOM from 'react-dom'


class Write extends Component {
    constructor(){
        super()
        this.state = {
            value: ''
        }
    }
    handelChange(value){
        this.setState({
            value
        })
        console.log(value);
    }
    render () {
        const { value } = this.state
    return (
        <div className='article-page__wrapper'>
        <div className='article-page__form-wrapper'>
          <div className='article-page__form-header'>
            <h2 className='article-page__form-heading'>Write your article!</h2>
          </div>
          <div className='article-page__content'>
            title
          </div>
          <div className='article-page__content'>
            <input
                className='article_page_title'
                type='text'
                id='article_title'
                value={this.props.data.username}
                placeholder='user'
                onChange={this._changeUsername}
                autoCorrect='content'
                autoCapitalize='off'
                spellCheck='false' />
          </div>
          <div className='article-page__content'>
            content
          </div>
          <Editor value = {value}  onChange = {this.handelChange.bind(this)} />
        </div>
      </div>
    )
  }
}
// ReactDOM.render(
//     <Editor />,
//     document.getElementById('app')
// )
function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Write)
