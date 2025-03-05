document.querySelector('#root').insertAdjacentHTML('beforeend', `
  <form>
    <h1>Registration form</h1>
    <input type="text" placeholder="First name" name="first-name">
    <input type="text" placeholder="Last name" name="last-name">
    <input type="text" placeholder="City" name="city">
    <input type="text" placeholder="Address" name="address">
    <input type="text" placeholder="House number" name="house-number">

    <div class="checkbox-container">
      <input type="checkbox" name="terms">
      <label for="terms">I accept the terms and conditions</label>
    </div>

    <button>submit</button>
  </form>
`);