//package StepDefinitions;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import cucumber.api.PendingException;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginStepDefinition {
//	
//	WebDriver driver;
//	
//	@Given("^user is already on login page$")
//	public void userIsAlreadyOnLoginPage()
//	{
//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/drivers/chromedriver");
//		driver=new ChromeDriver();
//		
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);
//		
//		driver.get("https://www.facebook.com/");
//		
//		WebDriverWait wait=new WebDriverWait(driver,50);
//		wait.until(ExpectedConditions.elementToBeClickable(By.id("email")));
//	}
//	
//	@When("^title of the login page is Facebook - log in or sign up$")
//	public void title_of_the_login_page_is_Facebook_log_in_or_sign_up() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		String title = driver.getTitle();
//		Assert.assertEquals("Facebook – log in or sign up", title);
//	    //throw new PendingException();
//	}
//
//	@Then("^username entered is \"(.*)\"$")
//	public void user_enters_username(String username)  {
//		driver.findElement(By.id("email")).sendKeys(username);
//	}
//
//	@Then("^password entered is \"(.*)\"$")
//	public void user_enters_password(String password)  {
//		driver.findElement(By.id("pass")).sendKeys(password);
//	}
//
//	@Then("^user clicks submit$")
//	public void user_clicks_submit()  {
//		
//		driver.findElement(By.id("u_0_b")).click();
//	}
//	
//	@Then("^user is on home page$")
//	public void user_is_on_home_page()
//	{
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//textarea[@name='xhpc_message']"))));
//		
//		String title = driver.getTitle();
//		System.out.println("Title of home page = "+title);
//		Assert.assertTrue(title.contains("Facebook"));
//	}
//	
//	@Then("^close the browser$")
//	public void close_the_browser() throws Throwable {
//		driver.quit();
//	}
//
//}
