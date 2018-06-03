package org.scoan.visitors;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FormController {
	
	@Autowired
	DataSource dataSource;
	
	@Autowired
	ObjectMapper objectMapper;
	
	public JdbcTemplate connection() {
		return new JdbcTemplate(dataSource);
	}
	
	public NamedParameterJdbcTemplate namedConnection() {
		return new NamedParameterJdbcTemplate(dataSource);
	}
	
	@RequestMapping(value="/submit-user", method=RequestMethod.POST)
	@ResponseBody
	public String submitUser(@ModelAttribute("user") User user, HttpSession session) {
		System.out.println(user);
		
		if(user != null) {
			return UserDatabaseTemplate.insertRecord(user, namedConnection(), session);
		}
		return "failure";
		
	}
	
	@RequestMapping(value="/get-maritals", method=RequestMethod.GET)
	@ResponseBody
	public String getMaritals() {
		String sql = "SELECT id, marital_status FROM marital";
		List<Marital> maritals = connection().query(sql, new Marital.MaritalMapper());
		//System.out.println(maritals);
		try {
			return objectMapper.writeValueAsString(maritals);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/get-countries", method=RequestMethod.GET)
	@ResponseBody
	public String getCountries() {
		String sql = "SELECT * FROM countries";
		List<Country> countries = connection().query(sql, new Country.CountryMapper());
		//System.out.println(countries);
		try {
			return objectMapper.writeValueAsString(countries);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/get-occupations", method=RequestMethod.GET)
	@ResponseBody
	public String getOccupations() {
		String sql = "SELECT * FROM occupations ORDER BY occupation";
		List<Occupation> occupations = connection().query(sql, new Occupation.OccupationMapper());
		//System.out.println(occupations);
		try {
			return objectMapper.writeValueAsString(occupations);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	@RequestMapping(value="/get-dinings", method=RequestMethod.GET)
	@ResponseBody
	public String getDinings() {
		String sql = "SELECT * FROM dinings ORDER BY id";
		List<Dining> dinings = connection().query(sql, new Dining.DiningMapper());
		//System.out.println(dinings);
		try {
			return objectMapper.writeValueAsString(dinings);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
		
	@RequestMapping(value="/get-reference-no", method=RequestMethod.GET)
	@ResponseBody
	public String getReferenceNos() {
		String sql = "SELECT * FROM visitors_references ORDER BY id";
		List<VisitorsReferences> refs = connection().query(sql, new VisitorsReferences.VisitorReferencesMapper());
		//System.out.println(refs);
		try {
			return objectMapper.writeValueAsString(refs);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	@RequestMapping(value="/get-modes-of-visit", method=RequestMethod.GET)
	@ResponseBody
	public String getModesOfVisit() {
		String sql = "SELECT * FROM mode_of_visit ORDER BY id";
		List<ModeOfVisit> mov = connection().query(sql, new ModeOfVisit.ModeOfVisitMapper());
		//System.out.println(mov);
		try {
			return objectMapper.writeValueAsString(mov);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value="/submit-visitor", method=RequestMethod.POST)
	@ResponseBody
	public String submitVisitor(@ModelAttribute("visitor") Visitor visitor, HttpServletRequest request) {		
		System.out.println(visitor);
		
		int success = 0;
		if(visitor != null) {
			success = VisitorDatabaseTemplate.insertRecord(visitor, namedConnection(), request);
		}
		return (success == 1) ? "success" : "failure";
	}
	
	@RequestMapping(value="/add-visit", method=RequestMethod.POST)
	@ResponseBody
	public String addVisit(@RequestParam("current-user-id") Long currentUserId, @RequestParam("visitor-id") Long visitorId, 
							@RequestParam("arrival-date") String arrivalDate, @RequestParam("arrival-time") String arrivalTime,
							@RequestParam("departure-date") String departureDate, @RequestParam("departure-time") String departureTime,
							@RequestParam("has-med-report") String hasMedReport, @RequestParam("taking-meds") String takingMeds,
							@RequestParam("reason") String reason, @RequestParam("comment") String comment, @RequestParam("modeOfVisit") Integer modeOfVisit, 
							@RequestParam("referenceNo") Integer referenceNo, @RequestParam("screener") String screener, @RequestParam("inCareOf") String inCareOf,
							@RequestParam("groupCoordinator") String groupCoordinator, @RequestParam("dining") Integer dining) {		
		
		int success = 0;
		try {
			success = VisitorDatabaseTemplate.insertVisitRecord(currentUserId, visitorId, arrivalDate, arrivalTime, departureDate,  departureTime, hasMedReport, takingMeds,	 
					reason, comment, modeOfVisit, referenceNo, screener, inCareOf, groupCoordinator, dining, namedConnection());
		}catch(Exception ex) {
			
		}
		return (success == 1) ? "success" : "failure";
	}
	
	@RequestMapping(value="/settings-change-password", method=RequestMethod.POST)
	@ResponseBody
	public String settingsChangePassword(@RequestParam("settings-old-password") String oldPassword, @RequestParam("settings-new-password") String newPassword, HttpSession session) {	
		
		User user = (User)session.getAttribute("user");
		Long userId = user.getId();
		
		String userPassword = UserDatabaseTemplate.getUserPassword(user, namedConnection());
		
		if(EncryptPassword.encript(oldPassword).equals(userPassword)) {
			
			try {	
				
				return  UserDatabaseTemplate.updatePassword(userId, EncryptPassword.encript(newPassword), connection(), namedConnection());
				
			}catch(Exception ex) {
				return "failure";
			}
			
		}else {
			return "Old password is incorrect...";
		}
		
		
	}
	
	
	@RequestMapping(value="/settings-change-security-question", method=RequestMethod.POST)
	@ResponseBody
	public String settingsChangeSecurityQuestion(@RequestParam("settings-security-question") String securityQuestion, @RequestParam("settings-security-answer") String securityAnswer, HttpSession session) {	
		
		User user = (User)session.getAttribute("user");
		Long userId = user.getId();
		
		String success;
				
		try {	
			
			success =  UserDatabaseTemplate.updateSecurityQuestion(userId, "", securityQuestion, connection(), namedConnection());
			success =  UserDatabaseTemplate.updateSecurityAnswer(userId, "", securityAnswer, connection(), namedConnection());
			return success;
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "failure";
		}
			
		
	}
	
	@RequestMapping(value="/get-visit-dates", method=RequestMethod.GET)
	@ResponseBody
	public String checkDates(@RequestParam("visitor_id") Long visitorId, HttpSession session) {	
		
		User user = (User)session.getAttribute("user");
		Long userId = user.getId();
		
		String success;
				
		try {	
			
			return objectMapper.writeValueAsString(VisitorDatabaseTemplate.checkDates(visitorId, namedConnection()));
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return "{}";
		}
			
		
	}
	
	
}
