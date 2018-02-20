import { AppPage } from './app.po';
import { browser, by, element, ExpectedConditions } from 'protractor';

describe('webapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Register');
  });

  it('should login as a new user', () => {
    var username = element(by.id('loginUsername'))
    var password = element(by.id('loginPassword'))
    var loginBtn = element(by.id('login'))

    username.sendKeys("nef3")
    password.sendKeys("three-word-pass")

    loginBtn.click()
    ExpectedConditions.urlIs('/main');
  })

  it('should register a new user', () => {
    browser.get('/')
    var username = element(by.id('account_name'))
    var email = element(by.id('email'))
    var phone = element(by.id('phone'))
    var dob = element(by.id('dob'))
    var zipcode = element(by.id('zipcode'))
    var password = element(by.id('password'))
    var password_con = element(by.id('password_con'))
    var registerBtn = element(by.id("register"))

    username.sendKeys("dummy")
    email.sendKeys("dummy@gmail.com")
    phone.sendKeys("347-222-1111")
    dob.sendKeys("02/23/1995")
    zipcode.sendKeys("11373")
    password.sendKeys("password")
    password_con.sendKeys("password")

    registerBtn.click()
    ExpectedConditions.urlIs('/main')
  })

  it('should create new article and validate article appears in feed', () => {
    // browser.get('/main')
    var post = element(by.id('post'))
    var postBtn = element(by.id('postBtn'))
    var articles = element.all(by.id('posts'));

    var before = 0
    articles.count().then(function(count){
      before += count
    })
    post.sendKeys("this is a new  post!")
    postBtn.click()
    expect(articles.count()).toBe(before + 1)
  })

  it('should edit an article and validate changed article text', () => {
    // var editBtn = element(by.id("editPost"))
    // // var editedPost = element(by.id('9'))
    // editBtn.click()
    // var editTextarea = element(by.id('editText'))
    // var saveBtn = element(by.id('editSave'))
    // editTextarea.sendKeys("text")
    // saveBtn.click()
    //
  })

  it('should update headline and verify change', () => {
    // browser.get('/main')
    var updateInput = element(by.id("updateStatus"))
    var statusBtn = element(by.id('updateStatusBtn'))
    var headline = element(by.id('status'))

    updateInput.sendKeys('testing 1 2 3')
    statusBtn.click()
    expect(headline.getText()).toEqual('testing 1 2 3')
  })

  it('should add the follower user and verify following count increases by one', () => {
    var followerInput = element(by.name('tempUser'))
    var followBtn = element(by.id('followBtn'))
    var followers = element.all(by.id('followers'));

    var before = 0
    followers.count().then(function(count) {
      before += count
      followerInput.sendKeys("Anna")
      followBtn.click()
      expect(followers.count()).toBe(count + 1)
    })
  })

  it('should remove the follower user and verify following count decreases by one', () => {
    var unfollowBtn = element(by.id("John Doe"))
    var followers = element.all(by.id('followers'))

    var before = 0
    followers.count().then(function(count) {
      unfollowBtn.click()
      expect(followers.count()).toBe(count - 1)
    })

  })

  it('should search for special article and verify author', () => {
    var searchbar = element(by.id('searchbar'))
    var articles = element.all(by.id('posts'));
    searchbar.sendKeys("Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem. Proin commodo nibh est, at porta magna auctor eu. Nunc sed elementum mauris. Mauris sollicitudin, nisl at finibus iaculis, velit diam ullamcorper arcu, quis luctus massa risus id turpis. Etiam vitae scelerisque risus. Nullam et facilisis nisi. Sed a libero posuere, facilisis odio vitae, gravida tortor. Ut vitae nunc augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non ante augue.")

    expect(articles.count()).toBe(1)
  })

  it('should update user email and verify', () => {
    var profileBtn = element(by.id('profileLink'))
    profileBtn.click()
    ExpectedConditions.urlIs('/profile');
    var emailInput = element(by.id('email'))
    var emailDisplay = element(by.id("emailDisplay"))
    var submitBtn = element(by.id("submitBtn"))
    //
    emailInput.sendKeys('dummy@gmail.com')
    submitBtn.click()
    expect(emailDisplay.getText()).toEqual('dummy@gmail.com')
  })

  it('should update user zipcode and verify', () => {
    var zipcodeInput = element(by.id('zipcode'))
    var zipcodeDisplay = element(by.id('zipcodeDisplay'))
    var submitBtn = element(by.id('submitBtn'))

    zipcodeInput.sendKeys('11111')
    submitBtn.click()
    expect(zipcodeDisplay.getText()).toEqual('11111')
  })

  it('should update user password and verify', () => {
    var passwordInput = element(by.id('password'))
    var submitBtn = element(by.id('submitBtn'))

    passwordInput.sendKeys('password')
    submitBtn.click()
  })
});
