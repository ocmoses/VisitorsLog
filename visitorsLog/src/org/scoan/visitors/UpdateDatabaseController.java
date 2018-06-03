package org.scoan.visitors;

import java.io.File;

import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UpdateDatabaseController {
	
	@Autowired
	DataSource dataSource;
	
	public JdbcTemplate getConnection() {
		return new JdbcTemplate(dataSource);
	}
	
	public NamedParameterJdbcTemplate getNamedConnection() {
		return new NamedParameterJdbcTemplate(dataSource);
	}
	
	
	@RequestMapping(value="/update-name", method=RequestMethod.POST)
	@ResponseBody
	public String updateName(@RequestParam("table") String table, @RequestParam("id") long id, 
							@RequestParam("initialFirstName") String initialFirstName, @RequestParam("finalFirstName") String finalFirstName, 
							@RequestParam("initialMiddleName") String initialMiddleName, @RequestParam("finalMiddleName") String finalMiddleName, 
							@RequestParam("initialLastName") String initialLastName, @RequestParam("finalLastName") String finalLastName, HttpSession session) {
		
		int update = 0;
		
		if(!initialFirstName.equals(finalFirstName)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.FIRSTNAME;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.FIRSTNAME;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalFirstName, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialFirstName, finalFirstName, getNamedConnection());
			
			
		}
		if(!initialMiddleName.equals(finalMiddleName)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.MIDDLENAME;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.MIDDLENAME;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalMiddleName, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialMiddleName, finalMiddleName, getNamedConnection());
		}
		if(!initialLastName.equals(finalLastName)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.LASTNAME;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.LASTNAME;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalLastName, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialLastName, finalLastName, getNamedConnection());
		}
		
		
		if(update == 1)
			return "success";
		
		return "failure";
	}
	
	@RequestMapping(value="/update-dob", method=RequestMethod.POST)
	@ResponseBody
	public String updateDob(@RequestParam("table") String table, @RequestParam("id") long id, 
							@RequestParam("initialDob") String initialDob, @RequestParam("finalDob") String finalDob, HttpSession session) {

		int update = 0;
		
		if(!initialDob.equals(finalDob)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.DOB;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.DOB;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalDob, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialDob, finalDob, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-sex", method=RequestMethod.POST)
	@ResponseBody
	public String updateSex(@RequestParam("table") String table, @RequestParam("id") long id, 
							@RequestParam("initialSex") String initialSex, @RequestParam("finalSex") String finalSex, HttpSession session) {

		int update = 0;
		
		if(!initialSex.equals(finalSex)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.SEX;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.SEX;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalSex, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialSex, finalSex, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-marital-status", method=RequestMethod.POST)
	@ResponseBody
	public String updateMaritalStatus(@RequestParam("table") String table, @RequestParam("id") long id, 
							@RequestParam("initialMaritalStatus") String initialMaritalStatus, @RequestParam("finalMaritalStatus") String finalMaritalStatus, HttpSession session) {

		int update = 0;
		
		if(!initialMaritalStatus.equals(finalMaritalStatus)) {
			
			String column = null;
			if(table.equals(Tables.USERS_TB))
				column = Tables.UsersTB.MARITAL_STATUS;
			else if(table.equals(Tables.VISITORS))
				column = Tables.Visitors.MARITAL_STATUS;
			update = UserDatabaseTemplate.updateRecord(id, table, column, finalMaritalStatus, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), table, column, id, initialMaritalStatus, finalMaritalStatus, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	@RequestMapping(value="/update-user-role", method=RequestMethod.POST)
	@ResponseBody
	public String updateUserRole(@RequestParam("id") Long id, @RequestParam("initialRole") Long initialRole, @RequestParam("finalRole") Long finalRole, HttpSession session) {

		int update = 0;
		
		if(!initialRole.equals(finalRole)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.ROLE, finalRole, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.USERS_TB, Tables.UsersTB.ROLE, id, initialRole, finalRole, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	@RequestMapping(value="/update-user-account-status", method=RequestMethod.POST)
	@ResponseBody
	public String updateUserAccountStatus(@RequestParam("id") Long id, @RequestParam("initialAccountStatus") Long initialAccountStatus, @RequestParam("finalAccountStatus") Long finalAccountStatus, HttpSession session) {

		int update = 0;
		
		if(!initialAccountStatus.equals(finalAccountStatus)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.ACCOUNT_STATUS, finalAccountStatus, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.USERS_TB, Tables.UsersTB.ACCOUNT_STATUS, id, 
					initialAccountStatus, finalAccountStatus, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/delete-user-account", method=RequestMethod.POST)
	@ResponseBody
	public String deleteUserAccount(@RequestParam("id") Long id, HttpSession session) {

		int update = 0;
		
			try {
				User user = UserDatabaseTemplate.getUserWithId(id, getConnection());
				String initialValue = user.getFirstName() + " " + ((user.getMiddleName() == "") ? "" : " " + user.getMiddleName()) + " " + user.getLastName();				
				String picLocation = user.getPicLocation();	
				
//				String actualPicLocation = FileDownloadController.getImageAbsolutePath(picLocation);
//				System.out.println("actualPicLocation: " + actualPicLocation);
//				
//				File file = new File(actualPicLocation);				
//				System.out.println("File exists: " + file.exists());
//				
//				file.delete();
//				System.out.println("File exists after delete: " + file.exists());
				
				
				update = UserDatabaseTemplate.deleteUserWithId(id, session, getNamedConnection());
				update = UserDatabaseTemplate.recordDeleteActivity(((User) (session.getAttribute("user"))).getId(), Tables.USERS_TB, "", id, initialValue, getNamedConnection());
				
			}catch(Exception ex) {
				//We might want to log here
				update = 0;  
				ex.printStackTrace();
			}
	
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	@RequestMapping(value="/delete-visitor", method=RequestMethod.POST)
	@ResponseBody
	public String deleteVisitor(@RequestParam("id") Long id, HttpSession session) {

		int update = 0;
		
			try {
				
				Visitor visitor = VisitorDatabaseTemplate.getVisitor(id, getConnection());
				String initialValue = visitor.getFirstName() + ((visitor.getMiddleName() == "") ? "" : " " + visitor.getMiddleName()) + " " + visitor.getLastName();
				String picLocation = visitor.getPicLocation();
				
//				String actualPicLocation = FileDownloadController.getImageAbsolutePath(picLocation);
//				
//				System.out.println("actualPicLocation: " + actualPicLocation);
//				
//				File file = new File(actualPicLocation);				
//				System.out.println("File exists: " + file.exists());
//				
//				System.out.println("File exists after delete: " + file.exists());
				
				
				update = VisitorDatabaseTemplate.deleteVisitorWithId(id, session, getNamedConnection());
				update = UserDatabaseTemplate.recordDeleteActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, "", id, initialValue, getNamedConnection());
				
			}catch(Exception ex) {
				//We might want to log here
				update = 0;
				ex.printStackTrace();
			}
	
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
		
	
	@RequestMapping(value="/update-country", method=RequestMethod.POST)
	@ResponseBody
	public String updateCountry(@RequestParam("id") long id, @RequestParam("initialCountry") String initialCountry, @RequestParam("finalCountry") String finalCountry, HttpSession session) {

		int update = 0;
		
		if(!initialCountry.equals(finalCountry)) {			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.COUNTRY_ID, finalCountry, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.COUNTRY_ID, 
						id, initialCountry, finalCountry, getNamedConnection());						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	@RequestMapping(value="/update-occupation", method=RequestMethod.POST)
	@ResponseBody
	public String updateOccupation(@RequestParam("id") long id, @RequestParam("initialOccupation") String initialOccupation, @RequestParam("finalOccupation") String finalOccupation, HttpSession session) {

		int update = 0;
		
		if(!initialOccupation.equals(finalOccupation)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.OCCUPATION_ID, finalOccupation, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.OCCUPATION_ID, 
						id, initialOccupation, finalOccupation, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-partner", method=RequestMethod.POST)
	@ResponseBody
	public String updatePartner(@RequestParam("id") long id, @RequestParam("initialPartner") String initialPartner, @RequestParam("finalPartner") String finalPartner, HttpSession session) {

		int update = 0;
		
		if(!initialPartner.equals(finalPartner)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.IS_PARTNER, finalPartner, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.IS_PARTNER, 
						id, initialPartner, finalPartner, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	@RequestMapping(value="/update-blacklisted", method=RequestMethod.POST)
	@ResponseBody
	public String updateBlacklisted(@RequestParam("id") long id, @RequestParam("initialBlacklisted") String initialBlacklisted, @RequestParam("finalBlacklisted") String finalBlacklisted, HttpSession session) {

		int update = 0;
		
		if(!initialBlacklisted.equals(finalBlacklisted)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.BLACKLISTED, finalBlacklisted, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.BLACKLISTED, 
						id, initialBlacklisted, finalBlacklisted, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-user-pic", method=RequestMethod.POST)
	@ResponseBody
	public String updateUserPic(@RequestParam("id") Long id, 	@RequestParam("initialPic") String initialPic, @RequestParam("finalPic") String finalPic, HttpSession session) {

		int update = 0;
		
		if(!initialPic.equals(finalPic)) {
			
			String picLocation = initialPic;	
			//System.out.println("pic location:" + picLocation);
						
			File file = new File(initialPic);				
			//System.out.println("File exists: " + file.exists());
			
			if(file.exists())
				file.delete();
			//System.out.println("File exists after delete: " + file.exists());
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.PICTURE_URI, finalPic + "&page=manage-users", getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.USERS_TB, Tables.UsersTB.PICTURE_URI, id, 
					initialPic, finalPic + "&page=manage-users", getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-visitor-pic", method=RequestMethod.POST)
	@ResponseBody
	public String updateVisitorPic(@RequestParam("id") Long id, @RequestParam("initialPic") String initialPic, @RequestParam("finalPic") String finalPic, HttpSession session) {

		int update = 0;
		
		if(!initialPic.equals(finalPic)) {
			
			String picLocation = initialPic;
			//System.out.println("pic location:" + picLocation);
						
			File file = new File(picLocation);				
			//System.out.println("File exists: " + file.exists());
			
			if(file.exists())
				file.delete();
			
			//System.out.println("File exists after delete: " + file.exists());
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.PICTURE_URI, finalPic + "&page=manage-visitors", getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.PICTURE_URI, id, 
					initialPic, finalPic + "&page=manage-visitors", getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-phone", method=RequestMethod.POST)
	@ResponseBody
	public String updatePhone(@RequestParam("id") Long id, @RequestParam("initialPhone") String initialPhone, @RequestParam("finalPhone") String finalPhone, HttpSession session) {

		int update = 0;
		
		if(!initialPhone.equals(finalPhone)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.PHONE1, finalPhone, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.PHONE1, id, initialPhone, finalPhone, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-email", method=RequestMethod.POST)
	@ResponseBody
	public String updateEmail(@RequestParam("id") Long id, @RequestParam("initialEmail") String initialEmail, @RequestParam("finalEmail") String finalEmail, HttpSession session) {

		int update = 0;
		
		if(!initialEmail.equals(finalEmail)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.EMAIL, finalEmail, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.EMAIL, id, initialEmail, finalEmail, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-website", method=RequestMethod.POST)
	@ResponseBody
	public String updateWebsite(@RequestParam("id") Long id, 	@RequestParam("initialWebsite") String initialWebsite, @RequestParam("finalWebsite") String finalWebsite, HttpSession session) {

		int update = 0;
		
		if(!initialWebsite.equals(finalWebsite)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.WEBSITE, finalWebsite, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.WEBSITE, id, initialWebsite, finalWebsite, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-ministry", method=RequestMethod.POST)
	@ResponseBody
	public String updateMinistry(@RequestParam("id") Long id, @RequestParam("initialMinistry") String initialMinistry, @RequestParam("finalMinistry") String finalMinistry, HttpSession session) {

		int update = 0;
		
		if(!initialMinistry.equals(finalMinistry)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.MINISTRY, finalMinistry, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.MINISTRY, id, initialMinistry, finalMinistry, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	@RequestMapping(value="/update-partnership-no", method=RequestMethod.POST)
	@ResponseBody
	public String updatePartnershipNo(@RequestParam("id") Long id, @RequestParam("initialPartnershipNo") String initialPartnershipNo, @RequestParam("finalPartnershipNo") String finalPartnershipNo, HttpSession session) {

		int update = 0;
		
		if(!initialPartnershipNo.equals(finalPartnershipNo)) {
			
			update = UserDatabaseTemplate.updateRecord(id, Tables.VISITORS, Tables.Visitors.PARTNERSHIP_NO, finalPartnershipNo, getConnection());
			update = UserDatabaseTemplate.recordUpdateActivity(((User) (session.getAttribute("user"))).getId(), Tables.VISITORS, Tables.Visitors.PARTNERSHIP_NO, id, initialPartnershipNo, finalPartnershipNo, getNamedConnection());
						
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	
	

}
