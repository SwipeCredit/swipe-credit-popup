window.addEventListener("load", () => {
    const formObject = `
        <div id="form0" class="pp-modal-sm">
        <div class="pp-header">
            <img style="opacity: 0;" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                style="padding: 0.5rem;" />
            <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                style="padding: 0.5rem;cursor:pointer" onClick="resetForm()" />
        </div>
        <div class="pp-body-sm">
            <p style="font-weight: bold;">Simply a smarter way to qualify for a loan!!!</p>
            <p style="width: 80%;">Connect your cash account, Qualify in minutes, and Boost your credit score.</p>
            <p>Available for all borrowers.</p>
            <center>
                <div class="pp-buttons-div">
                    <button onClick="routeToForm()" class="btn-green">Get Swipe Credit</button>
                    <img src='https://i.ibb.co/C1CXF03/Swipe-Credit-Black-Logo-800x600.jpg' width="120"/>
                </div>
                <p>Powered By Swipe Credit</p>   
             </center>   
    </div>
    </div>
        <div id="form1" style="display: none;" class="pp-modal">
            <div class="pp-header">
                <img style="opacity: 0;" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                    style="padding: 1rem;" />
                <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                    style="padding: 1rem;cursor:pointer" onClick="resetForm()" />
            </div>
            <div class="pp-body">
                <img src="https://i.ibb.co/hgWYdb1/Swipe-Logo.png" alt="Swipe-Logo" width="150" style="margin-bottom:20px"  />
                <h2 style="text-align:center;">Let's do a quick verification</h2>
                <p style="text-align:center;">To secure your future payments, we need to verify it's you. Enter
                    your mobile phone number to get started.
                </p>
                <div class="phone-number-field">
                    <img src="https://img.icons8.com/material-outlined/344/android.png" width="25" />
                    <input placeholder="Phone Number" type="tel" maxlength="13" id="phoneNumber"></input>
                </div>
                <div style="width:70%;display: flex;justify-content: space-between;align-items: center;">
                    <p>Remember me on this device 🛈</p>
                    <input type="checkbox" />
                </div>
        
                <p style="text-align: center;width: 80%;font-size: small;">
                    This site is protected by reCAPTCHA Enterprise and the Google Privacy
                    Policy and Terms of Service apply. By continuing I accept the Swipe Credit
                    Shopping Service, and confirm that I have read the Privacy Policy
                </p>
            </div>
            <br />
            <button onClick="routeToForm()" class="popup-button">Continue</button>
            <br />
            <strong>Powered By Swipe Credit</strong>
        </div>
        <div id="form2" style="display: none;"  class="pp-modal">
            <div class="pp-header">
                <img onclick="goBack()" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                    style="padding: 1rem;cursor: pointer;" />
                <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                    style="padding: 1rem;cursor:pointer" onClick="resetForm()" />
            </div>
            <div class="pp-body">
                <h2 style="text-align:center;">Enter the 6-digit code</h2>
                <p style="text-align:center;">A verification code has been sent to
                    <br />
                <h3><strong>(404) 574-0271</strong> <span style="color: #508EA4;">Change</span></h3>
                </p>
                <div style="text-align: center;">
                    <p>Enter the verification code</p>
                    <div id="divOuter">
                        <div id="divInner">
                            <input id="partitioned" type="text" maxlength="4" />
                        </div>
                    </div>
                    <p>Message and data rates may apply</p>
                </div>
        
        
        
            </div>
            <br />
            <button onClick="routeToForm()" class="popup-button">Resend Code</button>
            <br />
            <strong>Powered By Swipe Credit</strong>
        </div>
        <div id="form3" style="display: none;" class="pp-modal">
            <div class="pp-header">
                <img onclick="goBack()" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                    style="padding: 1rem;cursor: pointer;" />
                <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                    style="padding: 1rem;cursor:pointer" onClick="resetForm()" />
            </div>
            <div class="pp-body">
                <img src="https://img.icons8.com/fluency/344/bell.png" width="100" />
                <h2 style="text-align:center;">We need a bit more info to approve your purchase</h2>
                <p style="text-align:center;">Help us understand your financial situation and verify your identity
                    by sharing your transaction history and account details.
                </p>
                <div>
                    <ul>
                        <li>
                            Log in to your online bank account
                        </li>
                        <li>
                            Select an account
                        </li>
                        <li>
                            Grant Swipe Credit limited access to your account details and transaction history
                        </li>
                    </ul>
                </div>
                <h3 style="color: #508EA4;">Why does Swipe Credit need this?</h3>
                <div class="checkbox-div">
                    <label><input type="checkbox" value=""> I authorize Swipe Credit to view my bank account and
                        transaction
                        information
                        and use that information to determine how much and what type of
                        credit I'm eligible for and verify my identity. I've also reviewed
                        <a href="https://www.termsfeed.com/live/981b10d9-17f9-461b-8287-ff05a42a96f5" style="color:black"> Swipe Credit's Privacy Policy</a></label>
                </div>
            </div>
            <br />
            <button onClick="routeToForm()" class="popup-button">Get Started</button>
            <br />
            <strong>Powered By Swipe Credit</strong>
        </div>
        <div id="form4" style="display: none;" class="pp-modal">
            <div class="pp-header">
                <img onclick="goBack()" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                    style="padding: 1rem;cursor: pointer;" />
                <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                    style="padding: 1rem;cursor:pointer" onClick="resetForm()" />
            </div>
            <div class="pp-body">
                <h2 style="text-align:center;">Why does Swipe Credit need this?</h2>
                <p style="text-align:center;width: 80%;">Your transaction history and account details give us a clearer
                    picture of your finances and help us to make better credit decisions
                    and verify your identity.
                </p>
                <div class="jumbotron">
                    <strong>How secure is it?</strong>
                    <div style="display:flex;justify-content: space-evenly;align-items: center;">
                        <img src="https://img.icons8.com/material-outlined/344/lock.png" width="50" />
                        <p>We use encryption to protect your data against unauthorized access. Learn more in our
                            Privacy Policy</p>
                    </div>
                    <hr />
                    <div style="display:flex;justify-content: space-evenly;align-items: center;">
                        <img src="https://img.icons8.com/material-outlined/344/data-encryption.png" width="50" />
                        <p>We can only see your data. We will never use it to take payments without your consent.
                        </p>
                    </div>
                </div>
                <br />
                <div class="jumbotron">
                    <strong>What Swipe Credit will use ?</strong>
                    <ul>
                        <li>
                            Account details
                        </li>
                        <li>
                            Transaction histroy from the last 90 days
                        </li>
        
                    </ul>
                </div>
                <br />
            </div>
            <br />
            <button onClick="routeToForm()" class="popup-button">Got it</button>
            <br />
            <strong>Powered By Swipe Credit</strong>
        </div>
        <div id="form5" style="display: none;" class="pp-modal">
            <div class="pp-header">
                <img style="opacity: 0;" src="https://img.icons8.com/material-outlined/344/back--v1.png" width="35"
                    style="padding: 1rem;" />
                <img src="https://img.icons8.com/ios-filled/344/cancel.png" width="35"
                    style="padding: 1rem;cursor:pointer" onClick="resetForm()" />
            </div>
            <div class="pp-body">
                <h2 style="text-align:center;">Choose your bank</h2>
                <p style="text-align:center;">Select the bank where you get paid
        
                </p>
                <input type="search" placeholder="🔍 Search for your bank"
                    style="width: 90%;padding: 1rem; border-radius: 1rem;font-size: 0.8rem;border: none;background-color: #dddcdc;" />
                <br />
                <div style="width:90%;overflow: scroll;height: 250px;">
        
                    <div style="display:flex;justify-content: space-between;align-items:center;margin-bottom: 1rem;">
                        <img src="https://img.icons8.com/dusk/344/security-checked--v1.png" width="50">
                        <h3 style="width: 70%;">Chase</h3>
                        <img src="https://img.icons8.com/material-outlined/344/forward.png" width="50">
                    </div>
                    <div style="display:flex;justify-content: space-between;align-items:center;margin-bottom: 1rem;">
                        <img src="https://img.icons8.com/dusk/344/security-checked--v1.png" width="50">
                        <h3 style="width: 70%;">Chase</h3>
                        <img src="https://img.icons8.com/material-outlined/344/forward.png" width="50">
                    </div>
                    <div style="display:flex;justify-content: space-between;align-items:center;margin-bottom: 1rem;">
                        <img src="https://img.icons8.com/dusk/344/security-checked--v1.png" width="50">
                        <h3 style="width: 70%;">Chase</h3>
                        <img src="https://img.icons8.com/material-outlined/344/forward.png" width="50">
                    </div>
                </div>
            </div>
            <br />
            <strong>Powered By Swipe Credit</strong>
        </div>
        `;

    document.body.innerHTML += formObject;
  });

  let currentForm = 0;
  function routeToForm() {
    if (currentForm >= 0) {
      const formPrefixNext = "form" + (currentForm + 1);
      const formPrefixPrev = "form" + currentForm;
      document.getElementById(formPrefixPrev).style.display = "none";
      document.getElementById(formPrefixNext).style.display = "flex";
      currentForm = currentForm + 1;
    }
  }

  function goBack() {
    if (currentForm >= 0) {
      const formPrefixNext = "form" + (currentForm - 1);
      const formPrefixPrev = "form" + currentForm;
      document.getElementById(formPrefixPrev).style.display = "none";
      document.getElementById(formPrefixNext).style.display = "flex";
      currentForm = currentForm - 1;
    }
  }

  function resetForm() {
    const formPrefix = "form" + currentForm;
    document.getElementById(formPrefix).style.display = "none";

    document.getElementsByClassName("pp-backdrop")[0].remove();
  }

  var obj = document.getElementById("partitioned");
  obj.addEventListener("keydown", stopCarret);
  obj.addEventListener("keyup", stopCarret);

  function stopCarret() {
    if (obj.value.length > 3) {
      setCaretPosition(obj, 3);
    }
  }

  function setCaretPosition(elem, caretPos) {
    if (elem != null) {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move("character", caretPos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
      }
    }
  }