
function Header(){
    return(
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
      
    );
}
export default Header;