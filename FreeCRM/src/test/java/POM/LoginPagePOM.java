package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPagePOM 
{
WebDriver driver;
	
	@FindBy(name="email")
	WebElement email;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginbutton;
	
	public LoginPagePOM (WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void inputemail(String eml)
	{
		email.sendKeys(eml);
	}
	
	public void inputpassword(String pwd)
	{
		password.sendKeys(pwd);
	}
	
	public void clicklogin()
	{
		loginbutton.click();
	}
	
}
