package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DealModulePOM 
{
WebDriver driver;
	
	/*POM FOR CREATE DEAL OPTION*/

	@FindBy(name="email")
	WebElement email;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	WebElement loginbutton;
	
	@FindBy(xpath = "//span[contains(text(),'Deals')]")
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
	
	@FindBy(xpath="//input[@class='calendarField']")
	WebElement calendardd;
	
	@FindBy(xpath="//div[@class='react-datepicker__month-container']//div[@aria-label='Choose Sunday, May 2nd, 2021']")
	WebElement calendar;
	
	@FindBy(xpath="//div[@class='ui fluid container']")
	WebElement calendarcl;
		
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
	
	@FindBy(xpath="//div[@name='type']//i[@class='dropdown icon']")
	WebElement typedd;
	
	@FindBy(xpath="//div[@name='type']//span[contains(text(),'New')]")
	WebElement type;
	
	@FindBy(xpath="//div[@name='source']//i[@class='dropdown icon']")
	WebElement sourcedd;
	
	@FindBy(xpath="//div[@name='source']//span[contains(text(),'Online')]")
	WebElement source;
	
	@FindBy(xpath="//button[@class='ui linkedin button']")
	WebElement save;
	
	@FindBy(xpath="//button[@class='ui button']")
	WebElement cancel;
	
	public DealModulePOM (WebDriver driver)
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
	
	public void clicksave()
	{
		save.click();
	}
	
	public void clickcancel()
	{
		cancel.click();
	}
	
	//////////////////////////////////////////////////////////////////
	
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
	
	
	//////////////////////////////////////////////////////////////////
	
	/*POM FOR PIPELINE REPORT*/


	@FindBy(xpath="//button[contains(text(),'Pipeline')]")
	WebElement pipeline;

	@FindBy(xpath="//div[@class='ui multiple selection dropdown']//i[@class='dropdown icon']")
	WebElement pipelinefield;//span[contains(text(),'Amount')]

	@FindBy(xpath="//span[contains(text(),'Amount')]")
	WebElement pipelineoption;

	@FindBy(name="pipeline_name")
	WebElement pipelinename;

	@FindBy(xpath="//button[@class='ui primary button'][contains(text(),'Create')]")
	WebElement createppl;

	@FindBy(xpath="//button[@class='ui negative button']")
	WebElement cancelppl;


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

	public void selectpipelinename(String ppl)
	{
		pipelineoption.sendKeys(ppl);
	}

	public void clickpipelinecreate()
	{
		createppl.click();
	}	

	public void clickpipelinecancel()
	{
		cancelppl.click();
	}


	//////////////////////////////////////////////////////////////////

	/*POM FOR FILTER DEAL OPTION*/
	
	
	@FindBy(xpath="//button[contains(text(),'Show Filters')]")
	WebElement showfilter;
	
	@FindBy(xpath="//div[@class='ui search selection dropdown']//i[@class='dropdown icon']")
	WebElement searchfilter;
	
	@FindBy(xpath="//span[contains(text(),'Assigned To')]")
	WebElement searchcnf;
	
	@FindBy(name="operator")
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
	
	public void ShowFilterButton()
	{
		showfilter.click();
	}
	
	public void SearchFilter()
	{
		searchfilter.click();
	}
	
	public void selectSearchOption()
	{
		searchcnf.click();
	}
	
	public void opertatorFilter() 
	{
		opertatorfilter.click();
	}
	
	public void selectOpertatorFilter() 
	{
		opertator.click();
	}
	
	public void Valuefilter() 
	{
		valuefilter.click();
	}
	
	public void selectValuefilter() 
	{
		value.click();
	}
	
	public void filterSearchButton()
	{
		filterbutton.click();
	}
	
	public void filterClear() 
	{
		filterclear.click();
	}
	public void filterAddButton()
	{
		filteraddButton.click();
		
	}	
	
	
	//////////////////////////////////////////////////////////////////
	
	/*POM FOR VIEW EDIT AND DELETE DEAL OPTIONS*/
	
	@FindBy(xpath = "//tbody/tr[1]/td[5]/a[1]/button[1]/i[1]")
	WebElement Viewbutton;
	
	@FindBy(xpath = "//tbody/tr[1]/td[5]/a[2]/button[1]/i[1]")
	WebElement Editbutton;
	
	@FindBy(xpath = "//tbody/tr[1]/td[5]/div[1]/button[1]/i[1]")
	WebElement Deletebutton;
	
	@FindBy(xpath = "//button[normalize-space()='Delete']")
	WebElement DeletebuttonAlert;
	
	@FindBy(xpath = "//button[normalize-space()='Cancel']")
	WebElement CancelbuttonAlert;
	
	@FindBy(xpath = "//button[@class='ui basic button item']")
	WebElement Binbutton;
	
	@FindBy(xpath = "//a[normalize-space()='Case (7)']")
	WebElement Bincases;
	
	@FindBy(xpath = "//tbody/tr[7]/td[1]/div[1]/label[1]")
	WebElement Checkbox1case;
	
	@FindBy(xpath="//th[@class='collapsing']//label")
	WebElement BincheckboxAll;
	
	@FindBy(xpath="//button[normalize-space()='Restore Selected']")
	WebElement Restoreselectedbutton;
	
	public void viewButton() 
	{
		Viewbutton.click();
	}
	public void editButton() 
	{
		Editbutton.click();
	}
	public void deleteButton() 
	{
		Deletebutton.click();
	}
	public void deleteButtonAlert()
	{
		DeletebuttonAlert.click();
	}
	public void cancelButtonAlert()
	{
		CancelbuttonAlert.click();
	}
	public void clickBinButton()
	{
		Binbutton.click();
	}
	public void clickBinCasesButton()
	{
		Bincases.click();
	}
	public void bincheckBox1Case() 
	{
		Checkbox1case.click();
	}
	public void bincheckBoxCaseAll() 
	{
		BincheckboxAll.click();
	}
	public void restoreSelectedButton()
	{
		Restoreselectedbutton.click();
	} 
	
}


