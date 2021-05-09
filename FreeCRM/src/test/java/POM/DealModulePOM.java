package POM;

import java.util.NoSuchElementException;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class DealModulePOM 
{
	
	WebDriver driver;
	
	/*POM FOR LOGIN*/

	@FindBy(xpath="//input[@placeholder='E-mail address']")
	WebElement email;
	
	@FindBy(xpath="//input[@name= 'password']")
	WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginbutton;
	
	
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
	
	
	///////////////////////////////////////////////////////////////////////////////
	
	/*POM FOR CREATE DEAL OPTION*/
	
	
	@FindBy(xpath = "//a[@href='/deals']")
	WebElement deals;
	
	@FindBy(xpath = "//button[contains(text(),'Create')]")
	WebElement create;
	
	@FindBy(xpath = "//input[@name='title']")
	WebElement title;
	
	@FindBy(xpath="//button[@class='ui small fluid positive toggle button']")
	WebElement accesspvt;
	
	@FindBy(xpath="//div[@class='ui fluid multiple selection dropdown']//i[@class='dropdown icon']")
	WebElement accessdd;
	
	@FindBy(xpath="//div[@role='listbox']//span[contains(text(),'Monika Yadav')]")
	WebElement accessname;
	
	@FindBy(xpath="//div[@class='ui fluid selection dropdown']//i[@class='dropdown icon']")
	WebElement assigndd;
	
	@FindBy(xpath="//div[@role='listbox']//span[contains(text(),'Monika Yadav')]")
	WebElement assign;
	
	@FindBy(xpath="//div[@name='company']//input[@type='text']")
	WebElement company;
	
	@FindBy(xpath="//div[@name='products']//input[@type='text']")
	WebElement product;
	
	@FindBy(xpath="//input[@class='calendarField']")
	WebElement calendardd;
	
	@FindBy(xpath="//div[@class='react-datepicker__month-container']//div[@aria-label='Choose Sunday, May 2nd, 2021']")
	WebElement calendar;
	
	@FindBy(xpath="//div[@class='ui fluid container']")
	WebElement calendarcl;
	
	@FindBy(xpath="//label[@for='tags']")
	WebElement tags;
	
	@FindBy(xpath="//div[@name='contacts']//input[@type='text']")
	WebElement contacts;
		
	@FindBy(name="description")
	WebElement description;
	
	@FindBy(name="probability")
	WebElement probability;
	
	@FindBy(name="amount")
	WebElement amount;
	
	@FindBy(name="commission")
	WebElement commission;
	
	@FindBy(xpath="//div[@name='stage']//i[@class='dropdown icon']")
	WebElement stagedd;
	
	@FindBy(xpath="//div[@name='stage']//span[contains(text(),'Qualify')]")
	WebElement stage;
	
	@FindBy(xpath="//div[@name='status']//i[@class='dropdown icon']")
	WebElement statusdd;
	
	@FindBy(xpath="//div[@name='status']//span[contains(text(),'Active')]")
	WebElement status;
	
	@FindBy(xpath="//textarea[@name='next_step']")
	WebElement next;
	
	@FindBy(xpath="//div[@name='type']//i[@class='dropdown icon']")
	WebElement typedd;
	
	@FindBy(xpath="//div[@name='type']//span[contains(text(),'New')]")
	WebElement type;
	
	@FindBy(xpath="//div[@name='source']//i[@class='dropdown icon']")
	WebElement sourcedd;
	
	@FindBy(xpath="//div[@name='source']//span[contains(text(),'Online')]")
	WebElement source;
	
	@FindBy(xpath="//input[@name='identifier']")
	WebElement Identifier;
	
	@FindBy(xpath="//button[@class='ui linkedin button']")
	WebElement save;
	
	@FindBy(xpath="//button[@class='ui button']")
	WebElement cancel;
	
	
	public DealModulePOM (WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void clickdeal()
	{
		deals.click();
	}
	
	public void clickcreate()
	{
		create.click();
	}
	
	public void clicktitle(String ttl)
	{
		title.sendKeys(ttl);
	}
		
	public void clickprivate()
	{
		accesspvt.click();
	}
	
	public void clickaccessdropdown()
	{
		accessdd.click();
	}
	
	public void clickaccess()
	{
		accessname.click();
	}
	
	public void clickassigndropdown()
	{
		assigndd.click();
	}
	
	public void clickassign()
	{
		assign.click();
	}
	
	public void tagName(String tag)
	{
	tags.sendKeys(tag);
	Actions act1=new Actions(driver);
	act1.sendKeys(Keys.ENTER).perform();
	}
	
	public void companyName(String comp)
	{
	company.sendKeys(comp);
	Actions act2=new Actions(driver);
	act2.sendKeys(Keys.ENTER).perform();
	}
	
	public void productName(String pro)
	{
	product.sendKeys(pro);
	Actions act3=new Actions(driver);
	act3.sendKeys(Keys.ENTER).perform();
	}
	
	public void contactName(String cont)
	{
	contacts.sendKeys(cont);
	Actions act4=new Actions(driver);
	act4.sendKeys(Keys.ENTER).perform();
	}
	
	public void clickcalendar()
	{
		calendardd.click();
	}
	
	public void selectcalendar()
	{
		calendar.click();
	}
	
	public void closecalendar()
	{
		calendarcl.click();
	}
	
	public void inputdescription(String dsc)
	{
		description.sendKeys(dsc);
	}
	
	public void inputprobability(String prb)
	{
		probability.sendKeys(prb);
	}
	
	public void inputamount(String amt)
	{
		amount.sendKeys(amt);
	}
	
	public void inputcommission(String cms)
	{
		commission.sendKeys(cms);
	}
	
	public void clickstage()
	{
		stagedd.click();
	}
	
	public void selectstage()
	{
		stage.click();
	}
	
	public void clickstatus()
	{
		statusdd.click();
	}
	
	public void selectstatus()
	{
		status.click();
	}
	
	public void inputnextsteps(String nxt)
	{
		next.sendKeys(nxt);
	}
	
	public void clicktype()
	{
		typedd.click();
	}
	
	public void selecttype()
	{
		type.click();
	}
	
	public void clicksource()
	{
		sourcedd.click();
	}
	
	public void selectsource()
	{
		source.click();
	}
	
	public void giveIdentifier(String iden)
	{
	Identifier.sendKeys(iden);
	}
	
	public void clicksave()
	{
		save.click();
	}
	
	public void clickcancel()
	{
		cancel.click();
	}
	
	
	///////////////////////////////////////////////////////////////////////////////
	
	/*POM FOR EXPORT DEAL OPTION*/

	
	@FindBy(xpath="//div[@class='table-wrapper']//tr[1]//td[1]//div")
	WebElement exportdeal;
	
	@FindBy(xpath="//button[contains(text(),'Export')]")
	WebElement export;
	
	@FindBy(xpath="//div[@class='ui fluid container']")
	WebElement dashboard;
	
	@FindBy(xpath="//button[contains(text(),'OK')]")
	WebElement exportcnf;
	
	@FindBy(xpath="//span[contains(text(),'Documents')]")
	WebElement document;
	
	@FindBy(xpath="//a[contains(text(),'Exports')]")
	WebElement documentexp;
	
	
	public void clickexpdeal()
	{
		exportdeal.click();
	}
	
	public void clickexp()
	{
		export.click();
	}
	
	public void dashboard()
	{
		dashboard.click();
	}
	
	public void clickexportcnf()
	{
		exportcnf.click();
	}
	
	public void clickdocument()
	{
		document.click();
	}
	
	public void clickexportcheck()
	{
		documentexp.click();
	}
	
	
	///////////////////////////////////////////////////////////////////////////////
	
	/*POM FOR PIPELINE REPORT*/


	@FindBy(xpath="//button[contains(text(),'Pipeline')]")
	WebElement pipeline;

	@FindBy(xpath="//div[@class='ui multiple selection dropdown']//i[@class='dropdown icon']")
	WebElement pipelinefield;

	@FindBy(xpath="//span[contains(text(),'Amount')]")
	WebElement pipelineoption;
	
	@FindBy(xpath="//button[@class='ui basic button']")
	WebElement plus;

	@FindBy(xpath="//input[@name='pipeline_name']")
	WebElement pipelinename;

	@FindBy(xpath="//button[@class='ui primary button'][contains(text(),'Create')]")
	WebElement createppl;

	@FindBy(xpath="//button[@class='ui negative button']")
	WebElement cancelppl;

	@FindBy(xpath="//div[@class='divider default text'][contains(text(),'Select pipeline')]")
	WebElement sltpipeline;
	
	@FindBy(xpath="//span[contains(text(),'Pipeline report')]")
	WebElement pplname;
	

	public void clickpipeline()
	{
		pipeline.click();
	}

	public void clickpipelinefield()
	{
		pipelinefield.click();
	}

	public void selectpipelineoption()
	{
		pipelineoption.click();
	}	

	public void selectplusbutton()
	{
		plus.click();
	}
	
	public void inputpipelinename(String ppl)
	{
		pipelinename.sendKeys(ppl);
	}

	public void clickpipelinecreate()
	{
		createppl.click();
	}	

	public void clickpipelinecancel()
	{
		cancelppl.click();
	}

	public void clickpipelineselect()
	{
		sltpipeline.click();
	}

	public void selectpipelinenamefromdd()
	{
		pplname.click();
	}
	
	
	///////////////////////////////////////////////////////////////////////////////

	/*POM FOR FILTER DEAL OPTION*/
	
	
	@FindBy(xpath="//button[contains(text(),'Show Filters')]")
	WebElement showfilter;
	
	@FindBy(xpath="//div[@class='ui search selection dropdown']//i[@class='dropdown icon']")
	WebElement searchfilter;
	
	@FindBy(xpath="//span[contains(text(),'Assigned To')]")
	WebElement searchcnf;
	
	@FindBy(xpath="//div[@name='operator']")
	WebElement opertatorfilter;
	
	@FindBy(xpath="//span[contains(text(),'Contains')]")
	WebElement opertator;
	
	@FindBy(xpath="//div[@class='ui fluid selection dropdown']//i[@class='dropdown icon']")
	WebElement valuefilter;
	
	@FindBy(xpath="//span[contains(text(),'Monika Yadav')]")
	WebElement value;
	
	@FindBy(xpath="//button[5]")
	WebElement filterbutton;
	
	@FindBy(xpath="//div[@class='ui fluid container main-content']//button[2]")
	WebElement filterclear;
	
	@FindBy(xpath="//button[normalize-space()='Add Filter Row']")
	WebElement filteraddButton;
	
	
	public void clickShowFilterButton()
	{
		showfilter.click();
	}
	
	public void clickSearchFilter()
	{
		searchfilter.click();
	}
	
	public void selectSearchOption()
	{
		searchcnf.click();
	}
	
	public void clickoperatorFilter() 
	{
		opertatorfilter.click();
	}
	
	public void selectOpertatorFilter() 
	{
		opertator.click();
	}
	
	public void clickValuefilter() 
	{
		valuefilter.click();
	}
	
	public void selectValuefilter() 
	{
		value.click();
	}
	
	public void clickfilterSearchButton()
	{
		filterbutton.click();
	}
	
	public void clickfilterClear() 
	{
		filterclear.click();
	}
	
	public void clickfilterAddButton()
	{
		filteraddButton.click();
		
	}	
	
	
	///////////////////////////////////////////////////////////////////////////////
	
	/*POM FOR VIEW EDIT AND DELETE DEAL OPTIONS*/
	
	
	@FindBy(xpath = "//tbody/tr[1]/td[8]/a[1]/button[1]/i[@class='unhide icon']")
	WebElement viewbutton;
	
	@FindBy(xpath = "//tbody/tr[1]/td[8]/a[2]/button[1]//i[@class='edit icon']")
	WebElement editbutton;
	
	@FindBy(xpath = "//tbody/tr[1]/td[8]/div/button/i[@class='trash icon']")
	WebElement deletebutton;
	
	@FindBy(xpath = "//button[normalize-space()='Delete']")
	WebElement deletebuttonAlert;
	
	@FindBy(xpath = "//button[normalize-space()='Cancel']")
	WebElement cancelbuttonAlert;
	
	@FindBy(xpath = "//button[@class='ui basic button item']")
	WebElement binbutton;
	
	@FindBy(xpath = "//div[@class='ui menu']/a[5]")
	WebElement bindeals;
	
	@FindBy(xpath = "//tbody/tr[7]/td[1]/div[1]/label[1]")
	WebElement checkbox1case;
	
	@FindBy(xpath="//th[@class='collapsing']//label")
	WebElement bincheckboxAll;
	
	@FindBy(xpath="//button[normalize-space()='Restore Selected']")
	WebElement restoreselectedbutton;
	
	
	public void clickviewButton() 
	{
		viewbutton.click();
	}
	
	public void clickeditButton() 
	{
		editbutton.click();
	}
	
	public void clickdeleteButton() 
	{
		deletebutton.click();
	}
	
	public void clickdeleteButtonAlert()
	{
		deletebuttonAlert.click();
	}
	
	public void clickcancelButtonAlert()
	{
		cancelbuttonAlert.click();
	}
	
	public void clickBinButton()
	{
		binbutton.click();
	}
	
	public void clickBinDealsButton()
	{
		bindeals.click();
	}
	
	public void clickbincheckBox1Case() 
	{
		checkbox1case.click();
	}
	
	public void clickbincheckBoxCaseAll() 
	{
		bincheckboxAll.click();
	}
	
	public void clickrestoreSelectedButton()
	{
		restoreselectedbutton.click();
	} 
	
	
	///////////////////////////////////////////////////////////////////////////////
	
	/*POM FOR INVALID OPERATIONS*/
	
	
	@FindBy(xpath="//span[@class='inline-error-msg']")
	WebElement errormsg;
	
	
	public boolean displayerror()
	{
		try 
		{
				errormsg.isDisplayed();
				return true;
		}
		catch(NoSuchElementException e)
		{
			return false;
		}
	}
	
}


