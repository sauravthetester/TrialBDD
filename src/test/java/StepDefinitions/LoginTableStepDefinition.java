//package StepDefinitions;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import TrialBase.FbBase;
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginTableStepDefinition extends FbBase {
//	
//	
//	@Given("^user is already on login page$")
//	public void userIsAlreadyOnLoginPage()
//	{
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
//	@Then("^username and password entered$")
//	public void username_and_password_entered(DataTable dataTable) throws Throwable {
//		List<List<String>> data = dataTable.raw();
//		driver.findElement(By.id("email")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.id("pass")).sendKeys(data.get(0).get(1));
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
//}
