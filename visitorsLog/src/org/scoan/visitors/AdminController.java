package org.scoan.visitors;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.ModelAndView;

@Controller
public class AdminController {
	
	private static final String ADMIN = "Admin";
	private static final String EDITOR = "Editor";
	private static final String REPORTER = "Reporter";
	
	@Autowired
	DataSource dataSource;
	
	@Autowired
	ObjectMapper objectMapper;
	
	private static final String MAC_TOMCAT_ROOT = "/Applications/tomcat";
	private static final String WINDOWS_TOMCAT_ROOT = "C:\\Tomcat";
	
	private static String getRoot() {
		String root = System.getProperty("os.name");
		System.out.println("Root is: " + root);
		if(root.contains("Mac"))
			return MAC_TOMCAT_ROOT;
		else if(root.contains("Windows"))
			return WINDOWS_TOMCAT_ROOT;
		else
			return null;
	}
	
	public JdbcTemplate connection() {
		return new JdbcTemplate(dataSource);
	}
	
	public NamedParameterJdbcTemplate namedConnection() {
		return new NamedParameterJdbcTemplate(dataSource);
	}
	
	@RequestMapping(value= {"/admin", "/dashboard"}, method=RequestMethod.GET)
	public String admin(HttpSession session) {	
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {	
				return "admin";
			}else {
				return "dashboard";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		
	}
	
	@RequestMapping(value="/manage-users", method=RequestMethod.GET)
	public Object manageUsers(HttpSession session, Model model) {				//Remember to stop other types of users but admin from being able to use this
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			//System.out.println("userRole: " + userRole);
			
			if(userRole.equals(ADMIN)) {			
				return new ModelAndView("manage-users", "command", new User());
			}else if(userRole.equals(EDITOR)){			
				return "unauthorized-ed";
			}else {
				return "unauthorized-rp";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/unauthorized", method=RequestMethod.GET)
	public String unauthorized() {						
			return "unauthorized";
	}
	
	@RequestMapping(value="/add-new-user", method=RequestMethod.GET)
	public String addNewUser(HttpSession session) {						//Remember to stop other types of users but admin from being able to use this
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {
				return "redirect:manage-users";
			}else if(userRole.equals(EDITOR)) {
				return "unauthorized-ed";
			}else {
				return "unauthorized-rp";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/user-actions", method=RequestMethod.GET)
	@ResponseBody
	public String getAllUsers(@RequestParam(value="offset", required=false) Long offset, @RequestParam(value="total", required=false) Integer total, @RequestParam(value="all", required=false) String all) {
		try {	
			List<User> allUsers = UserDatabaseTemplate.getAllRecords(offset, total, all, connection());
			try {
				return objectMapper.writeValueAsString(allUsers);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				//Should log error here
				return "null";
			}	
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}			
		
	}	

	@RequestMapping(value="/user-actions-total", method=RequestMethod.GET)
	@ResponseBody
	public Long getTotalUsers(HttpSession session) {
		try{
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {
				try {
					Long totalUsers = UserDatabaseTemplate.getAllRecordsCount(connection());
					return totalUsers;
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return null;
				}
			}else {
				return null;
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
			
	}
	
	
		
	@RequestMapping(value="/get-user", method=RequestMethod.GET)
	@ResponseBody
	public String getUser(@RequestParam("id") Long id) {
		try {
			User user = UserDatabaseTemplate.getUserWithId(id, connection());
			if(user != null)
				return user.getFirstName() + ((user.getMiddleName() == "") ? "" : " " + user.getMiddleName() + " ") + user.getLastName();
			
			return "";
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}	
	
	@RequestMapping(value="/get-user-matches", method=RequestMethod.GET)
	@ResponseBody
	public String getUserMatches(HttpSession session, @RequestParam("search") String search, @RequestParam(value="offset", required=false) Long offset, @RequestParam(value="total", required=false) Integer total){
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {
				List<User> users = UserDatabaseTemplate.getUserMatches(search, offset, total, namedConnection());
				
				try {
					return objectMapper.writeValueAsString(users);
				} catch (Exception e) {
					e.printStackTrace();
					return null;
					
				}
			}else {
				return null;
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		
		
	}
	
	@RequestMapping(value="/get-user-matches-total", method=RequestMethod.GET)
	@ResponseBody
	public Long getUserMatchesTotal(HttpSession session, @RequestParam("search") String search){
		
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {
	
				try {
					return UserDatabaseTemplate.getUserMatchesTotal(search, namedConnection());
				} catch (Exception e) {
					e.printStackTrace();
					return null;
					
				}
			}else {
				return null;
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}		
		
	}
	
	@RequestMapping(value="/get-user-pic", method=RequestMethod.GET)
	@ResponseBody
	public String getUserPic(@RequestParam("id") Long id) {
		return UserDatabaseTemplate.getUserPic(id, connection());
	}	
	
	@RequestMapping(value="/user-details", method=RequestMethod.GET)
	public String getUserDetails(@RequestParam("id") Long id, Model model, HttpSession session) {
		try {
			if(id == 4) {			
				return "redirect:error-ad";
			}else {
				User user = UserDatabaseTemplate.getUserWithId(id, connection());
				
				if(user != null) {				
					
					String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
					
					if(userRole.equals(ADMIN)) {
						model.addAttribute("userDetail", user);
						return "user-details";
					}else {
						return "redirect:login";
					}
				}
				
				return "redirect:login";
			}
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}	
	
	
	@RequestMapping(value="/manage-visitors", method=RequestMethod.GET)
	public String manageVisitors(HttpSession session, Model model) {									//Remember to stop other types of users but admin from being able to use this
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			model.addAttribute("visitor", new Visitor());
			
			System.out.println("User role in Manage visitors: " + userRole);
		
			if(userRole.equals(ADMIN)) {
				return "manage-visitors-ad";
			}else if(userRole.equals(EDITOR)) {
				return "manage-visitors-ed";
			}else {
				return "unauthorized-rp";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		
		
		
	}
	
	@RequestMapping(value="/add-new-visitor", method=RequestMethod.GET)
	public String addNewVisitor(HttpSession session) {	
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(!userRole.equals(REPORTER)) {//Remember to stop reporters from being able to use this
				return "redirect:manage-visitors";
			}else {
				return "unauthorized-rp";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/visitor-actions", method=RequestMethod.GET)
	@ResponseBody
	public String getAllVisitors(@RequestParam(value="offset", required=false) Long offset, @RequestParam(value="total", required=false) Integer total, HttpSession session) {
		try {
			//String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			//if(!userRole.equals(REPORTER)) {
				List<Visitor> allVisitors = VisitorDatabaseTemplate.getAllRecords(offset, total, connection());
				try {
					return objectMapper.writeValueAsString(allVisitors);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return null;
				}
			//}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		//return "redirect:login";
	}
	
	
	@RequestMapping(value="/visitor-actions-total", method=RequestMethod.GET)
	@ResponseBody
	public Long getAllVisitorsCount() {
		
		try {
			Long totalVisitors = VisitorDatabaseTemplate.getAllRecordsCount(connection());
			return totalVisitors;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
	
	@RequestMapping(value="/visitor-details", method=RequestMethod.GET)
	public String getVisitor(@RequestParam("id") Long id, Model model, HttpSession session) {
		try {
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(!userRole.equals(REPORTER)) {
				try {
					Visitor visitor = VisitorDatabaseTemplate.getVisitor(id, connection());			
					//System.out.println("the visitor: " + visitor);
					model.addAttribute("visitor", visitor);	
					
					return "visitor-details";
				
				}catch(Exception ex) {
					//we also have to log errors here
					if(userRole.equals(ADMIN))
						return "error-ad";
					else
						return "error-ed";
					
				}
				
				
			}else {
				try {
					Visitor visitor = VisitorDatabaseTemplate.getVisitor(id, connection());			
					//System.out.println("the visitor: " + visitor);
					model.addAttribute("visitor", visitor);	
					
					return "redirect:visitor-details-readonly?id=" + id;
				
				}catch(Exception ex) {
					//we also have to log errors here
					return "error-rp";
					
				}
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		
		
	}
	
	@RequestMapping(value="/visitor-details-readonly", method=RequestMethod.GET)
	public String getVisitorReadonly(@RequestParam("id") Long id, Model model) {
		
		Visitor visitor = VisitorDatabaseTemplate.getVisitor(id, connection());
		
		System.out.println("the visitor: " + visitor);
		
		if(visitor != null) {
			model.addAttribute("visitor", visitor);
			
		}
		return "visitor-details-readonly";
	}
	
	@RequestMapping(value="/get-visits", method=RequestMethod.GET)
	@ResponseBody
	public String getVisits(@RequestParam("id") Integer id) {
		
		List<Visit> visits = VisitorDatabaseTemplate.getVisits(id, connection());
		//System.out.println("visits: " + visits);
		
		try {
			return objectMapper.writeValueAsString(visits);
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	@RequestMapping(value="/get-user-activities", method=RequestMethod.GET)
	@ResponseBody
	public String getUserActivities(@RequestParam("id") Long id) {
		
		List<UserActivity> activities = UserDatabaseTemplate.getUserActivities(id, connection());
		//System.out.println("activities: " + activities);
		
		try {
			return objectMapper.writeValueAsString(activities);
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	@RequestMapping(value="/get-all-activities", method=RequestMethod.GET)
	@ResponseBody
	public String getAllActivities() {
		
		List<Activity> activities = UserDatabaseTemplate.getAllActivities(connection());
		System.out.println("activities: " + activities);
		
		try {
			return objectMapper.writeValueAsString(activities);
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	@RequestMapping(value="/get-all-user-activities", method=RequestMethod.GET)
	@ResponseBody
	public String getAllUserActivities() {
		
		List<UserActivity> activities = UserDatabaseTemplate.getAllUserActivities(connection());
		System.out.println("activities: " + activities);
		
		try {
			return objectMapper.writeValueAsString(activities);
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	
	@RequestMapping(value="/get-last-visit", method=RequestMethod.GET)
	@ResponseBody
	public String getLastVisit(@RequestParam("id") Long id) {
		try {
			return VisitorDatabaseTemplate.getLastVisit(id, connection());
		}catch(EmptyResultDataAccessException ex) {
			return null;
		}
	}
	
	@RequestMapping(value="/get-similar-records", method=RequestMethod.GET)
	@ResponseBody
	public String getSimilarRecords(@RequestParam("firstName") String firstName, @RequestParam("middleName") String middleName, @RequestParam("lastName") String lastName, 
									@RequestParam(value="offset", required=false) Long offset, @RequestParam(value="total", required=false) Integer total) {
		List<Visitor> similarRecords = VisitorDatabaseTemplate.getSimilarRecords(new Object[] {firstName, middleName, lastName, offset, total}, namedConnection());
		try {
			return objectMapper.writeValueAsString(similarRecords);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value="/get-similar-records-total", method=RequestMethod.GET)
	@ResponseBody
	public Long getSimilarRecordsTotal(@RequestParam("firstName") String firstName, @RequestParam("middleName") String middleName, @RequestParam("lastName") String lastName) {
		
		try {
			return VisitorDatabaseTemplate.getSimilarRecordsTotal(new Object[] {firstName, middleName, lastName}, namedConnection());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value="/get-visitor", method=RequestMethod.GET)
	@ResponseBody
	public String getVisitorById(@RequestParam("id") Long id){
				
		try {
			return VisitorDatabaseTemplate.getVisitorName(id, connection());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
			
		}
	}
		
	@RequestMapping(value="/get-visitor-matches", method=RequestMethod.GET)
	@ResponseBody
	public String getVisitorMatches(@RequestParam("search") String search, @RequestParam(value="offset", required=false) Long offset, @RequestParam(value="total", required=false) Integer total){
		List<Visitor> visitors = VisitorDatabaseTemplate.getVisitorMatches(search, offset, total, namedConnection());
		
		try {
			return objectMapper.writeValueAsString(visitors);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
			
		}
	}
	
	@RequestMapping(value="/get-visitor-matches-total", method=RequestMethod.GET)
	@ResponseBody
	public Long getVisitorMatchesTotal(@RequestParam("search") String search){
				
		try {
			return VisitorDatabaseTemplate.getVisitorMatchesTotal(search, namedConnection());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
			
		}
	}
	
	@RequestMapping(value="/get-filter-search", method=RequestMethod.GET)
	@ResponseBody
	public String getFilterSearch(@RequestParam("query") String query) {
		
		String sql = query;
		
		List<Visitor> visitors = connection().query(sql, new Visitor.VisitorMapper());
		//System.out.println(roles);
		try {
			return objectMapper.writeValueAsString(visitors);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/get-roles", method=RequestMethod.GET)
	@ResponseBody
	public String getRoles() {
		String sql = "SELECT * FROM user_roles";
		List<Role> roles = connection().query(sql, new Role.RoleMapper());
		//System.out.println(roles);
		try {
			return objectMapper.writeValueAsString(roles);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/get-role", method=RequestMethod.GET)
	@ResponseBody
	public String getRole(@RequestParam("id") Integer id) {
		String sql = "SELECT * FROM user_roles WHERE id = " + id;				
		
		//System.out.println(sql);
		try {
			Role roles = connection().queryForObject(sql, new Role.RoleMapper());
			String theRole = roles.getRole();
			String asideText = null;
			switch(theRole) {
				case "Admin": asideText = "<ul class=\"list-group\">\n" + 
						"		<li class=\"list-group-item\" id=\"dashboard\"><a href=\"dashboard\"><span class=\"glyphicon glyphicon-dashboard\"></span>Dashboard</a></li>\n" + 
						"		<li class=\"list-group-item \" id=\"manage-users\"><a href=\"manage-users\"><span class=\"glyphicon glyphicon-user\"></span>Manage Users</a></li>\n" + 
						"		<li class=\"list-group-item \" id=\"manage-visitors\"><a href=\"manage-visitors\"><span class=\"glyphicon glyphicon-folder-open\"></span>Manage Visitors</a></li>\n" + 
						//"		<!-- <li class=\"list-group-item\" id=\"register-new-visitors\"><a href=\"register-new\"><span class=\"glyphicon glyphicon-pencil\"></span>Register New Visitor</a></li> -->\n" + 
						"		<li class=\"list-group-item\" id=\"search-visitors\"><a href=\"search-visitors\"><span class=\"glyphicon glyphicon-search\"></span>Search Visitors</a></li>\n" + 
						//"		<li class=\"list-group-item\" id=\"messages\"><a href=\"messages\"><span class=\"glyphicon glyphicon-comment\"></span>Messages</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"notifications\"><a href=\"notifications\"><span class=\"glyphicon glyphicon-globe\"></span>Notifications</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"settings\"><a href=\"settings\"><span class=\"glyphicon glyphicon-cog\"></span>Settings</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"help\"><a href=\"help\"><span class=\"glyphicon glyphicon-bookmark\"></span>Help</a></li>\n" + 
						"		\n" + 
						"	</ul>	"; break;
				
				case "Editor": asideText = "<ul class=\"list-group\">\n" + 
						"		<li class=\"list-group-item\" id=\"dashboard\"><a href=\"dashboard\"><span class=\"glyphicon glyphicon-dashboard\"></span>Dashboard</a></li>\n" + 
						"		<li class=\"list-group-item \" id=\"manage-visitors\"><a href=\"manage-visitors\"><span class=\"glyphicon glyphicon-folder-open\"></span>Manage Visitors</a></li>\n" + 
						//"		<!-- <li class=\"list-group-item\" id=\"register-new-visitors\"><a href=\"register-new\"><span class=\"glyphicon glyphicon-pencil\"></span>Register New Visitor</a></li> -->\n" + 
						"		<li class=\"list-group-item\" id=\"search-visitors\"><a href=\"search-visitors\"><span class=\"glyphicon glyphicon-search\"></span>Search Visitors</a></li>\n" + 
						//"		<li class=\"list-group-item\" id=\"messages\"><a href=\"messages\"><span class=\"glyphicon glyphicon-comment\"></span>Messages</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"notifications\"><a href=\"notifications\"><span class=\"glyphicon glyphicon-globe\"></span>Notifications</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"settings\"><a href=\"settings\"><span class=\"glyphicon glyphicon-cog\"></span>Settings</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"help\"><a href=\"help\"><span class=\"glyphicon glyphicon-bookmark\"></span>Help</a></li>\n" + 
						"		\n" + 
						"	</ul>	"; break;
				case "Reporter": asideText = "<ul class=\"list-group\">\n" + 
						"		<li class=\"list-group-item\" id=\"dashboard\"><a href=\"dashboard\"><span class=\"glyphicon glyphicon-dashboard\"></span>Dashboard</a></li>\n" + 
						//"		<!-- <li class=\"list-group-item\" id=\"register-new-visitors\"><a href=\"register-new\"><span class=\"glyphicon glyphicon-pencil\"></span>Register New Visitor</a></li> -->\n" + 
						"		<li class=\"list-group-item\" id=\"search-visitors\"><a href=\"search-visitors\"><span class=\"glyphicon glyphicon-search\"></span>Search Visitors</a></li>\n" + 
						//"		<li class=\"list-group-item\" id=\"messages\"><a href=\"messages\"><span class=\"glyphicon glyphicon-comment\"></span>Messages</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"notifications\"><a href=\"notifications\"><span class=\"glyphicon glyphicon-globe\"></span>Notifications</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"settings\"><a href=\"settings\"><span class=\"glyphicon glyphicon-cog\"></span>Settings</a></li>\n" + 
						"		<li class=\"list-group-item\" id=\"help\"><a href=\"help\"><span class=\"glyphicon glyphicon-bookmark\"></span>Help</a></li>\n" + 
						"		\n" + 
						"	</ul>	";
			}
			
			return theRole + ":::" + asideText;
		}catch(Exception ex){
			return null;
		}	
		
	}
	
	@RequestMapping(value="/get-all-account-status", method=RequestMethod.GET)
	@ResponseBody
	public String getAllAccountStatus() {
		String sql = "SELECT * FROM account_status";
		List<AccountStatus> status = connection().query(sql, new AccountStatus.AccountStatusMapper());
		//System.out.println(status);
		try {
			return objectMapper.writeValueAsString(status);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/get-account-status", method=RequestMethod.GET)
	@ResponseBody
	public String getAccountStatus(@RequestParam("id") Long id) {
				
		try {
			return UserDatabaseTemplate.getAccountStatusWithId(id, connection());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/search-visitors", method=RequestMethod.GET)
	public String searchVisitors(HttpSession session) {
		try {
			User user = (User) session.getAttribute("user");
			
			if(user != null) {
				return "search-visitors";
			}else {
				return "redirect:login";
			}			
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/messages", method=RequestMethod.GET)
	public String messages(HttpSession session) {
		try {
			User user = (User) session.getAttribute("user");
			
			if(user != null) {
				return "messages";
			}else {
				return "redirect:login";
			}			
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/notifications", method=RequestMethod.GET)
	public String notifications(HttpSession session) {
		try {
			User user = (User) session.getAttribute("user");
			
			if(user != null) {
				return "notifications";
			}else {
				return "redirect:login";
			}			
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/settings", method=RequestMethod.GET)
	public String settings(HttpSession session) {
		try {
			User user = (User) session.getAttribute("user");
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(user != null) {
				try {
					user = UserDatabaseTemplate.getUserWithId(((User)session.getAttribute("user")).getId(), connection());
					session.setAttribute("user", user);					
					return "settings";
				}catch(Exception ex) {
					if(userRole.equals(ADMIN))
						return "error-ad";
					else if(userRole.equals(EDITOR))
						return "error-ed";
					else
						return "error-rp";
				}
			}else {
				return "redirect:login";
			}			
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
	}
	
	@RequestMapping(value="/help", method=RequestMethod.GET)
	public String help(HttpSession session) {
		try {
			
			String userRole = UserDatabaseTemplate.getRoleWithId(session, connection());
			
			if(userRole.equals(ADMIN)) {
				return "help-ad";
			}else if(userRole.equals(EDITOR)) {
				return "help-ed";
			}else {
				return "help-rp";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "redirect:login";
		}
		
	}
	
	@RequestMapping(value="/footer", method=RequestMethod.GET)
	public String footer() {
		return "footer";
	}
	
	@RequestMapping(value="/generate-visitor-report", method=RequestMethod.POST)
	@ResponseBody
	public String generateVisitorReport(@RequestParam("finalFirstName") String finalFirstName, @RequestParam("finalMiddleName") String finalMiddleName, @RequestParam("finalLastName") String finalLastName, 
			@RequestParam("finalDob") String finalDob, @RequestParam("finalSex") String finalSex, @RequestParam("finalMaritalStatus") String finalMaritalStatus, @RequestParam("finalCountry") String finalCountry, 
					@RequestParam("finalPhone1") String finalPhone1, @RequestParam("finalEmail") String finalEmail, @RequestParam("finalWebsite") String finalWebsite, @RequestParam("finalOccupation") String finalOccupation, 
							@RequestParam("finalMinistry") String finalMinistry, @RequestParam("finalIsPartner") String finalIsPartner, @RequestParam("finalBlacklisted") String finalBlacklisted, 
									@RequestParam("finalLastVisit") String finalLastVisit, @RequestParam("finalRegisteredBy") String finalRegisteredBy, @RequestParam("finalRegisterDate") String finalRegisterDate,
											@RequestParam("finalPicLocation") String finalPicLocation, @RequestParam("visitsArray[]") String[][] visitsArray, @RequestParam(value="currentUser", required=false) String currentUser) {
		
		GeneratedVisitor generatedVisitor = new GeneratedVisitor();
		generatedVisitor.setFirstName(finalFirstName);
		generatedVisitor.setMiddleName(finalMiddleName);
		generatedVisitor.setLastName(finalLastName);
		generatedVisitor.setDob(finalDob);
		generatedVisitor.setSex(finalSex);
		generatedVisitor.setMaritalStatus(finalMaritalStatus);
		generatedVisitor.setCountry(finalCountry);
		generatedVisitor.setPhone1(finalPhone1);
		generatedVisitor.setEmail(finalEmail);
		generatedVisitor.setWebsite(finalWebsite);
		generatedVisitor.setOccupation(finalOccupation);
		generatedVisitor.setMinistry(finalMinistry);
		generatedVisitor.setIsPartner(finalIsPartner);
		generatedVisitor.setBlacklisted(finalBlacklisted);
		generatedVisitor.setLastVisit(finalLastVisit);
		generatedVisitor.setRegisteredBy(finalRegisteredBy);
		generatedVisitor.setRegisterDate(finalRegisterDate);
		generatedVisitor.setPicLocation(finalPicLocation);
		generatedVisitor.setVisitsArray(visitsArray);
		
		System.out.println("visitsArray: " + Arrays.toString(visitsArray) + " length: " + visitsArray.length);
		
		File directory = new File(getRoot() + File.separator + "pdf");
		if (!directory.exists())
			directory.mkdirs();
		
		String fileLocation = directory + File.separator + generatedVisitor.getFirstName() + ((generatedVisitor.getMiddleName().equals("")) ? "" : "-" + generatedVisitor.getMiddleName()) + "-" + generatedVisitor.getLastName() + "-"
								+ new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".pdf";
		
		String success =  PDFGenerator.getPDFDocument(generatedVisitor,  fileLocation, currentUser);
		
		return fileLocation;
	}
	
	@RequestMapping(value="/generate-user-report", method=RequestMethod.POST)
	@ResponseBody
	public String generateUserReport(@RequestParam("finalFirstName") String finalFirstName, @RequestParam("finalMiddleName") String finalMiddleName, @RequestParam("finalLastName") String finalLastName, 
			@RequestParam("finalDob") String finalDob, @RequestParam("finalRole") String finalRole, @RequestParam("finalSex") String finalSex, @RequestParam("finalMaritalStatus") String finalMaritalStatus, 
									@RequestParam("finalLastLogin") String finalLastLogin, @RequestParam("finalRegisteredBy") String finalRegisteredBy, @RequestParam("finalRegisterDate") String finalRegisterDate,
											@RequestParam("finalPicLocation") String finalPicLocation, @RequestParam("activitiesArray[]") String[][] activitiesArray, @RequestParam("currentUser") String currentUser,
											@RequestParam("userId") Long userId) {
		
		GeneratedUser generatedUser = new GeneratedUser();
		generatedUser.setFirstName(finalFirstName);
		generatedUser.setMiddleName(finalMiddleName);
		generatedUser.setLastName(finalLastName);
		generatedUser.setDob(finalDob);
		generatedUser.setSex(finalSex);
		generatedUser.setMaritalStatus(finalMaritalStatus);
		generatedUser.setRole(finalRole);
		
		generatedUser.setRegisteredBy(finalRegisteredBy);
		generatedUser.setRegisterDate(finalRegisterDate);
		generatedUser.setLastLogin(finalLastLogin);
		generatedUser.setPicLocation(finalPicLocation);
		generatedUser.setActivitiesArray(activitiesArray);
		
		//System.out.println("activitiesArray: " + Arrays.toString(activitiesArray) + " length: " + activitiesArray.length);
		
		int totalRegisteredVisitors = UserDatabaseTemplate.getTotalVisitorsRegistered(userId, connection());
		int totalRegisteredVisits = UserDatabaseTemplate.getTotalVisitsRegistered(userId, connection());
		int totalUpdatesDone = UserDatabaseTemplate.getTotalUpdatesDone(userId, connection());
		int totalDeletes = UserDatabaseTemplate.getTotalDeletes(userId, connection());
		
		//System.out.println(" Summary: " + totalRegisteredVisitors + " " + totalRegisteredVisits + " " + totalUpdatesDone + " " + totalDeletes);
		
		int[] summaryArray = new int[4];
		summaryArray[0] = totalRegisteredVisitors;
		summaryArray[1] = totalRegisteredVisits;
		summaryArray[2] = totalUpdatesDone;
		summaryArray[3] = totalDeletes;
		
		File directory = new File(getRoot() + File.separator + "pdf");
		if (!directory.exists())
			directory.mkdirs();
		
		String fileLocation = directory + File.separator + generatedUser.getFirstName() + ((generatedUser.getMiddleName().equals("")) ? "" : "-" + generatedUser.getMiddleName()) + "-" + generatedUser.getLastName() + "-"
				+ new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".pdf";
		PDFGenerator.getPDFdocument(generatedUser,  fileLocation, currentUser, summaryArray);
		
		return fileLocation;
	}
	
	@RequestMapping(value="/visitor-report", method=RequestMethod.GET)
	public ResponseEntity<byte[]> visitorReport(@RequestParam(value="file-location", required=false) String fileLocation, HttpSession session) {
		session.setAttribute("file", fileLocation);
		
		
		Path path = Paths.get(fileLocation);
	    byte[] pdfContents = null;
	    try {
	        pdfContents = Files.readAllBytes(path);
	    } catch (IOException e) {
	        e.printStackTrace();
	    }

	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.parseMediaType("application/pdf"));
	    String filename = "generated-visitor-report.pdf";
	    headers.add("content-disposition", "attachment;filename='" + filename + "'");
	    headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
	    ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(
	            pdfContents, headers, HttpStatus.OK);	   
	    
		return response;
	}
	
	
	@RequestMapping(value="/user-report", method=RequestMethod.GET)
	public ResponseEntity<byte[]> userReport(@RequestParam(value="file-location", required=false) String fileLocation, HttpSession session) {
		
		session.setAttribute("file", fileLocation);
		
		
		Path path = Paths.get(fileLocation);
	    byte[] pdfContents = null;
	    try {
	        pdfContents = Files.readAllBytes(path);
	    } catch (IOException e) {
	        e.printStackTrace();
	    }

	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.parseMediaType("application/pdf"));
	    String filename = "generated-user-report.pdf";
	    headers.add("content-disposition", "attachment;filename='" + filename + "'");
	    headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
	    ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(
	            pdfContents, headers, HttpStatus.OK);	   
	    
		return response;
	}
	
	@RequestMapping(value="/get-lastlogin", method=RequestMethod.GET)
	public String getLastLogin(@RequestParam("id") Long id) {
		return UserDatabaseTemplate.getLastLogin(id, connection());
	}
	
	
}


