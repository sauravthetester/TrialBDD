package StepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import TrialBase.FbBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class MenuStepDefinition {
	
	public WebDriver driver;
	
	@Given("^initiate$")
	public void initiate() throws Throwable {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/drivers/chromedriver");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver=new ChromeDriver(options);
		
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);
	
	}
	
	@Given("^user is already on login page$")
	public void userIsAlreadyOnLoginPage()
	{
		
		driver.get("https://www.facebook.com/");
		
		WebDriverWait wait=new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.elementToBeClickable(By.id("email")));
	}
	
	@When("^title of the login page is Facebook - log in or sign up$")
	public void title_of_the_login_page_is_Facebook_log_in_or_sign_up() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		Assert.assertEquals("Facebook – log in or sign up", title);
	    //throw new PendingException();
	}

	@Then("^username and password entered$")
	public void username_and_password_entered(DataTable dataTable) throws Throwable {
		for(Map<String,String> data : dataTable.asMaps(String.class, String.class))
		{
			driver.findElement(By.id("email")).sendKeys(data.get("username"));
			driver.findElement(By.id("pass")).sendKeys(data.get("password"));
			System.out.println(driver.findElement(By.id("pass")).getAttribute("type"));
		}
	}

	@Then("^user clicks submit$")
	public void user_clicks_submit()  {
		
		driver.findElement(By.id("u_0_b")).click();
	}
	
	@When("^user is on home page$")
	public void user_is_on_home_page() throws InterruptedException
	{
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//div[@aria-label='Account']"))));
		
		String title = driver.getTitle();
		System.out.println("Title of home page = "+title);
		Assert.assertTrue(title.contains("Facebook"));
		
		//WebElement shadedLayer = driver.findElement(By.xpath("//div[@class='_3ixn']/.."));
		
		JavascriptExecutor js = (JavascriptExecutor) driver; 
		driver.findElement(By.xpath("//span[text()='See More']")).click();
		Thread.sleep(2000);
	    //js.executeScript("arguments[0].setAttribute(arguments[1],arguments[2])", shadedLayer, "style", "opacity: 0; min-width: 40px;");
	}
	
	@When("^the title of page is$")
	public void the_title_of_page_is(DataTable dt) throws Throwable {
		for(Map<String,String> data : dt.asMaps(String.class, String.class))
		{
			driver.findElement(By.xpath("//span[text()='"+data.get("id")+"']")).click();
			
			System.out.println("Title is = "+driver.getTitle());
			Thread.sleep(1000);
			System.out.println("Title is = "+driver.getTitle());
			Thread.sleep(1000);
			System.out.println("Title is = "+driver.getTitle());
			Thread.sleep(1000);
			System.out.println("Title is = "+driver.getTitle());
			Thread.sleep(1000);
			System.out.println("Title is = "+driver.getTitle());
			Thread.sleep(1000);
			
			driver.getWindowHandles();
			
			System.out.println("Title is = "+driver.getTitle());
			Assert.assertTrue(driver.getTitle().contains(data.get("title")));
			System.out.println(data.get("title")+" executed now!");
			driver.findElement(By.xpath("//a[@aria-label='Home']")).click();
			
			Actions act = new Actions(driver);
		}
	}
	
	@When("^clicked on pages$")
	public void clicked_on_pages() throws Throwable {
		driver.findElement(By.xpath("//span[text()='Pages']")).click();
	}

	@When("^create new page button is available$")
	public void create_new_page_button_is_available() throws Throwable {
		driver.findElement(By.xpath("//a[@aria-label='Create New Page']")).isDisplayed();
		
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
	}
}
