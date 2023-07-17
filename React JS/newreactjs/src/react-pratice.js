let react=()=>{
    <div className="App">
      <header className="App-header">
        <div id="left-div">
           <span class="menu">Home</span>
           <span class="menu">Details</span>
           <span class="menu">About Us</span>
        </div>
        <div id='center-div'>
          <h2 id="center">Application Form</h2>
        </div>
        <div id="right-div">
          <span class="menu"></span>
          <span class="menu">Contact us</span>
          <span class="menu">Branches</span>
        </div>
      </header>
      <div id='content'>
        <div id="img-div">
          <img class="image" src="https://previews.123rf.com/images/captainvector/captainvector1601/captainvector160115316/52153012-dragon-head.jpg"/>
        </div>
        <div id="form">
            <p>Mail ID</p>
           <input class="inp" placeholder='Id'/>
           <br/>
           <p>Password</p>
           <input class="inp" placeholder='Password'/>
           <br/>
           <br/>
           <button id="submit">Submit</button>
        </div>
        <div>
          <img class="image" src='https://previews.123rf.com/images/captainvector/captainvector1601/captainvector160115316/52153012-dragon-head.jpg'/>
        </div>

      </div>
    </div>
}