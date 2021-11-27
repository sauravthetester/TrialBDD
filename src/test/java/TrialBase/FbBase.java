package TrialBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import BDDUtil.*;

public class FbBase {
	public static WebDriver driver;
	public static Properties prop;
	public static String configFile = System.getProperty("user.dir")+"/src/test/java/Config/config.properties";
	
	public FbBase()
	{
		try 
		{
			prop = new Properties();
	        FileInputStream file;
			file = new FileInputStream(configFile);
			prop.load(file);
		} 
		catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
        
	}
	
	public void initialize()
	{
		
		String system = System.getProperty("os.name").toLowerCase();
		String browser = prop.getProperty("browser");
		System.out.println("OS name: "+system);
		if(system.contains("mac"))
		{
	        if(browser.equalsIgnoreCase("chrome"))
	        {
	            System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
	            driver=new ChromeDriver();
	        }
	        else if(browser.equalsIgnoreCase("firefox"))
	        {
	            System.setProperty("webdriver.gecko.driver", "drivers/geckodriver");
	            driver=new FirefoxDriver();
	        }
		}
		else if(system.contains("windows"))
		{
			System.out.println(System.getProperty("user.dir"));
			if(browser.equalsIgnoreCase("chrome"))
	        {
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--disable-notifications");
	            System.setProperty("webdriver.chrome.driver", "driversWin//chromedriver.exe");
	            driver=new ChromeDriver(options);
	        }
	        else if(browser.equalsIgnoreCase("firefox"))
	        {
	        	System.setProperty("webdriver.gecko.driver", "driversWin//geckodriver.exe");
	        	
	        	FirefoxProfile profile = new FirefoxProfile();
	        	profile.setPreference("capability.policy.default.Window.QueryInterface", "allAccess");
	        	profile.setPreference("capability.policy.default.Window.frameElement.get","allAccess");
	        	profile.setAcceptUntrustedCertificates(true); profile.setAssumeUntrustedCertificateIssuer(true);
	        	DesiredCapabilities capabilities = new DesiredCapabilities();
	        	capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
	            
//	            driver=new FirefoxDriver(capabilities);
	        }
		}
        
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
        
        
        driver.get(prop.getProperty("url"));
	}
}
