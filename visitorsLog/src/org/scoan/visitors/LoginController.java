package org.scoan.visitors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
	
	private static String ACTIVE = "Active";
	private static String SUSPENDED = "Suspended";
	private static String PROBATION = "Probation";
	
	@Autowired
	DataSource dataSource;
	
	public JdbcTemplate getConnection() {
		return new JdbcTemplate(dataSource);
	}
	
	public NamedParameterJdbcTemplate getNamedConnection() {
		return new NamedParameterJdbcTemplate(dataSource);
	}
	
	@RequestMapping(value= {"/index", "/"}, method = RequestMethod.GET)
	public String index() {
		return "redirect:login";
	}
	
	@RequestMapping(value= {"/login", "/login/"}, method = RequestMethod.GET)
	public String login(HttpSession session) {
		if(dataSource != null) {
			
		}else {
			//output error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		}
		if(session.getAttribute("user") == null)
			return "login";
		else
			return "redirect:dashboard";
	}
	
	
	@RequestMapping(value="/change-password", method = RequestMethod.GET)
	public String changePassword() {
		return "change-password";
	}
	
	
	@RequestMapping(value="/choose-password", method = RequestMethod.GET)
	public String choosePassword() {
		return "choose-password";
	}
	
	
	@RequestMapping(value="/login-submit", method=RequestMethod.POST)
	@ResponseBody
	public String loginSubmit(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletRequest request, JdbcTemplate jdbcTemplate) {
		
		User user;
		try {
						
			user = UserDatabaseTemplate.tryLogin(username, password, getConnection());
			if(user != null) {	
				
				System.out.println("user id: " + user.getId());
				
				int visible = UserDatabaseTemplate.getUserVisiblityWithId(user.getId(), getConnection());
				
				if(visible == 0){
					return "Your account has been deleted.";
				}else if(visible == 2){
					return "There was an error accessing your account.";
				}
				
				String userAccountStatus = UserDatabaseTemplate.getUserAccountStatusWithId(user.getId(), getConnection());
				
				System.out.println("user account status: " + userAccountStatus);
				
				if(userAccountStatus.equals(ACTIVE)) {					
					
					int passwordChanged = UserDatabaseTemplate.getPasswordChanged(user, getNamedConnection());
					
					if(passwordChanged == 0) {
						return user.getUsername() + ":::choose-password";
					}else {
						request.getSession().setAttribute("user", user);
						return "success";
					}
					
				}else if(userAccountStatus.equals(SUSPENDED)){
					
					return "Your account is under suspension...";
					
				}else {
					
					request.getSession().setAttribute("user", user);
					return "success";
				}
				
			}else {
				
				return "Invalid login credentials...";				
			}
		}catch(Exception ex) {
			//ex.printStackTrace();
			//Here, I'll log this exception........................
			ex.printStackTrace();
		}
		
		return "failure";
				
	}
	
	@RequestMapping(value="/is-logged-in", method=RequestMethod.GET)
	@ResponseBody
	public String isLoggedIn(HttpServletRequest request) {
		
		User user;
		
		try {
			user = (User) request.getSession().getAttribute("user");
			
			if(user != null) {	
				//System.out.println("Yes, logged in...");
				return "true";
			}else {
				//System.out.println("not logged in...:(");
				return "false";
				
			}
			
		}catch(ClassCastException ex) {
			return "false";
		}
		
		
				
	}
	
	@RequestMapping(value="/logout-submit", method=RequestMethod.GET)
	@ResponseBody
	public String logoutSubmit(HttpSession session) {
		return UserDatabaseTemplate.tryLogout(session, getConnection());
				
	}
	
	@RequestMapping(value="/choose-password-submit", method=RequestMethod.POST)
	@ResponseBody
	public String submitChoosePassword(@RequestParam("username") String username, @RequestParam("old-password") String oldPassword, 
							@RequestParam("new-password") String newPassword, @RequestParam("user-security-question") String userSecurityQuestion,
							@RequestParam("user-security-answer") String userSecurityAnswer, HttpSession session) {		
		
		String encryptedNewPassword = EncryptPassword.encript(newPassword);
		User user = UserDatabaseTemplate.tryLogin(username, oldPassword, getConnection());
		
		if(user == null) {
			return "Old password is incorrect...";
		}else {
			try {
				
				String s = UserDatabaseTemplate.updatePassword(user.getId(), encryptedNewPassword, getConnection(), getNamedConnection());
				UserDatabaseTemplate.updatePasswordChange(user.getId(), 1, getConnection(), getNamedConnection());
				UserDatabaseTemplate.updateSecurityQuestion(user.getId(), "", userSecurityQuestion, getConnection(), getNamedConnection());
				UserDatabaseTemplate.updateSecurityAnswer(user.getId(), "", userSecurityAnswer, getConnection(), getNamedConnection());
				
				System.out.println("Success in changing password: " + s);
				
				session.setAttribute("user", user);
				
				return "Successfully changed password...";
				
			}catch(Exception ex) {
				
				 ex.printStackTrace();				
				return "Sorry couldn't change password...";
			}
		}
		
	}
	
	@RequestMapping(value="/change-password-submit", method=RequestMethod.POST)
	@ResponseBody
	public String submitChangePassword(@RequestParam("username") String username, @RequestParam("new-password") String newPassword, @RequestParam("user-security-question") String userSecurityQuestion,
							@RequestParam("user-security-answer") String userSecurityAnswer, HttpSession session) {		
		
		String encryptedNewPassword = EncryptPassword.encript(newPassword);
		User user = UserDatabaseTemplate.getUserWithUsernameAndSecurityQuestionAndAnswer(username, userSecurityQuestion, userSecurityAnswer, getNamedConnection());
		
		if(user == null) {
			return "Username/security question/answer is wrong, please check...";
		}else {
			try {
				
				UserDatabaseTemplate.updatePassword(user.getId(), encryptedNewPassword, getConnection(), getNamedConnection());
				UserDatabaseTemplate.updatePasswordChange(user.getId(), 1, getConnection(), getNamedConnection());
				
				session.setAttribute("user", user);
				
				return "Successfully changed password...";
				
			}catch(Exception ex) {
				//You are supposed to log here=============================================================================================================
				return "Sorry couldn't change password...";
			}
		}
		
	}
	
}
