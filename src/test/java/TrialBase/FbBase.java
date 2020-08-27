package TrialBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Util.TestUtil;

public class FbBase {
	public static WebDriver driver;
	public static Properties prop;
	public static String configFile = System.getProperty("user.dir")+"/src/main/java/Config/config.properties";
	
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
		
		String browser = prop.getProperty("browser");
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
        
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
        
        
        driver.get(prop.getProperty("url"));
	}
}
