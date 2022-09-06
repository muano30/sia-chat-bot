import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateChat, messages, updateOptions, getSubOptions, clearChatBot, getChatBotData, getWelcomeMessage, getSubOptionsSolutions, resetChatBot } from '../Redux/action/actionCreators'
import ReactScrollableFeed from 'react-scrollable-feed';
// import App from '../App'
import './Chatbot.css'
import axios from 'axios'


const Chatbot = () => {
  const [selected, setShowSelectected] = useState({})
  const data = useSelector(state => state.data)
  const welcomeMessage = useSelector(state => state.data.chatBot.messages && state.data.chatBot.messages)
  console.log('welcomeMessage', welcomeMessage)
  const options = useSelector(state => state.data.chatBot.messages && state.data.chatBot.messages)
  const subOptions = useSelector(state => state.data.options && state.data.options)
  const subOptionSolutions = useSelector(state => state.data.optionsSolutions && state.data.optionsSolutions)



  // console.log('subOptionsSolutions', subOptionSolutions)
  let dispatch = useDispatch()
  useEffect(() => {

    getData()
  }, [])

  const getData = () => {
    dispatch(getChatBotData())
  }

  const dataAfteReset = () => {
  dispatch(getData())
  }

const handleReset = (i) => {
  dispatch(resetChatBot())
  
 dataAfteReset()
}

  const handleOptions = (field, id) => {
    var newstate = { ...selected }
    newstate[`${field}`] = id;
    setShowSelectected(newstate)
  }

  const getSuboption = (items) => {
    let login = data.chatBot.messages[1]
    // let loginSolutions = data.chatBot.messages[1]
    // console.log('login', login)

    // console.log('login', login.option)
    // console.log('login2', login.subOption)
    // if(items.option === login.option){
    //   console.log('yes')}else{
    // console.log('no')
    //   }

    switch (items.option) {
      case login.option:
        return dispatch(getSubOptions(login.subOption))
      // case java:
      //   return dispatch(subOptions(["Download and install Java:", javaProblem]))
      // case system:
      //   return dispatch(subOptions(["The system is down, is the sytem:", theSystemIsDown]))

      default:
        return items
    }
  }


  const getSubOptionsSolution = (items) => {
    let computer = data.chatBot.messages[1].subOption[2].solutions[0]
    console.log('computer', computer)
    console.log('computeroption', computer.option)
    console.log('computeroption1', computer.subOptionSolutions)

    console.log('items.option', items.option)

    switch (items.option) {
      case computer.option:
        return dispatch(getSubOptionsSolutions(computer.subOptionSolutions))
      default:
        return items
    }


  }
  // console.log('getSubOptionsSolution', getSubOptionsSolution)
  // const getMessage = () => {
  // let getMessage = welcomeMessage
  // console.log('getMessage', getMessage)
  // dispatch(getWelcomeMessage())
  // }
  // const getQuestions = () => {

  // let getOption = options && options.map(item =>{
  //   return item.option
  // })

  // console.log('getOption', getOption)

  //     // dispatch(updateChat())
  //   }


  // const clearChat = () => {
  //   dispatch(clearChatBot())
  //     }

  // const showSubOptions = (items) => {
  //   let login = options[0]
  //   let java = options[1]
  //   let system = options[2]
  //   let loginOptions = subOption[4].message

  //   let theSystemIsDown = subOption[3].options
  //   let javaProblem = subOption[5].options
  //   console.log('loginOptions', javaProblem)

  //   switch (items) {
  //     case login:
  //       return dispatch(subOptions(["This could be the problem", loginOptions]))
  //     case java:
  //       return dispatch(subOptions(["Download and install Java:", javaProblem]))
  //     case system:
  //       return dispatch(subOptions(["The system is down, is the sytem:", theSystemIsDown]))

  //     default:
  //       return items
  //   }

  // }


  return (
    <div>

<div className="header">
        <div className='alignHeader'>
          <button onClick={handleReset}>Reset</button><h1>chat-bot!</h1><button>Speak to a agent</button>
        </div>
      </div>

      <div className='wrapper'>
      <ReactScrollableFeed>
        <div>
          {welcomeMessage && welcomeMessage.map((item, i) => {
            if (i === 0) {

              return (
                <p className='welcomeMessage' >{item.option}</p>
              )
            }
          })}
        </div>

        <div>
          {options && options.map((item, i) => {
            // console.log('items', items.option)
            if (i > 0) {
              return (
                // <div className='optionButton' onClick={() => handleOptions(i)} style={{ display: showSelectedOption !== i && showSelectedOption !== -1 ? "none" : "block" }}>
                <div className='optionButton' onClick={() => handleOptions("option1", i)} style={{ display: selected.option1 !== i && selected.option1 > -1 ? "none" : "block" }}>
                  <input className='input' type="button" onClick={() => getSuboption(item)} value={item.option} />
                </div>
              )
            }
          })}
        </div>
        {/* <p>{optionText && optionText}</p>       */}
        {/* <p>{subOptionsText && subOptionsText}</p>       */}
        <div>
          {subOptions && subOptions.map((item, i) => {
            return (
              <div>
                <p className='optiontext' style={{ backgroundColor: i === 0 ? "green" : "none", padding: i === 0 ? ".8rem" : "none" }}>{item.optionText}</p>
                <p className="text" style={{ backgroundColor: i === 1 ? "#008000a2" : "none", padding: i === 1 ? "1rem" : "none" }}>{item.text}</p>

                <div className='subOption'>
                  {item.solutions && item.solutions.map((obj, n) => {
                    // console.log('obj', obj)
                    // console.log('selected', selected)
                    // if (n > 0) {
                      return (
                        <div onClick={() => handleOptions("option2", n)} style={{ display: selected.option2 !== n && selected.option2 > -1 ? "none" : "block"}}>
                          <input onClick={() => getSubOptionsSolution(obj)} className='input' type="button" value={obj.option} />
                        </div>
                      )
                    // }
                  })}

                </div>
              </div>
            )
          })}
        </div>


        <div>
          {subOptionSolutions && subOptionSolutions.map((item, i) => {
            return (
              <div >
                <p className='optiontext' style={{ backgroundColor: i === 0 ? "green" : "none", padding: i === 0 ? ".8rem" : "none" }}>{item.optionText}</p>
                <p className="text" style={{ backgroundColor: i === 1 ? "#008000a2" : "none", padding: i === 1 ? "1rem" : "none" }}>{item.text}</p>
                <p className="solution" style={{ backgroundColor: i === 2 ? "green" : "none", padding: i === 2 ? ".8rem" : "none" }}>{item.solution}</p>
              </ div>
            )
          })}
        </div>


        {/* {JSON.stringify(welcomeMessage)} */}
        {/* <input type="button" value="send" onClick={getQuestions} /> */}
        {/* <ReactScrollableFeed>
      
          <div className='wecomeMessage'>
            {welcomeMessage && welcomeMessage}
          </div> */}
        {/* <div className='options'> */}
        {/* {options && options.map((items, index) => {
              return (
                <div className="optionsInput" key={index}>
                  <input type="button" onClick={() => showSubOptions(items)} value={items}></input>
                </div>

              )
            })} */}
        {/* </div>
          <div className='systemisdown'>
            <div className='message'>
              {nextOptions && nextOptions[0]}
            </div>
            <div className='options2'>

              {nextOptions && nextOptions[1].map((items) => {
                return (
                  <input type="button" value={items} />
                )
              })}
            </div>

          </div>

        </ReactScrollableFeed> */}
</ReactScrollableFeed> 

      </div>
            {/* <App handleReset={handleReset}/>    */}

      {/* <App clearChat={clearChat}/> */}
      <div className='inputSubmit'>
      <label>command:</label>
      <div className="inputButtonStyle">
<input type="text" placeholder='Response Command'></input>
<button type="submit">send</button>

      </div>
 </div>
    </div>
  )

}

export default Chatbot