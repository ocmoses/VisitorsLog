package org.scoan.visitors;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.web.bind.annotation.RequestParam;

public class VisitorDatabaseTemplate {
	private static final int MAX_ROWS = 20;
	
	private static final String MAC_TOMCAT_ROOT = "/Applications/tomcat";
	private static final String WINDOWS_TOMCAT_ROOT = "C:\\tomcat";
	
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
	
	public static int insertRecord(Visitor visitor, NamedParameterJdbcTemplate namedParameterJdbcTemplate, HttpServletRequest request) {
		
		String firstName = visitor.getFirstName();
		String middleName = visitor.getMiddleName();
		String lastName = visitor.getLastName();
		
		String sex = visitor.getSex();
		String dob = (visitor.getDob().equals("")) ? "0001-01-01" : visitor.getDob();
		Integer maritalStatus = visitor.getMaritalStatus();
		
		Integer country = visitor.getCountry();
		String address = visitor.getAddress();
		String phone1 = visitor.getPhone1();
		String phone2 = (visitor.getPhone2() == "") ? null : visitor.getPhone2();
		
		String email = visitor.getEmail();
		String website = visitor.getWebsite();
		
		String dateOfArrival = visitor.getDateOfArrival();
		String timeOfArrival = visitor.getTimeOfArrival();
		String dateOfDeparture = visitor.getDateOfDeparture();
		String timeOfDeparture = visitor.getTimeOfDeparture();
		String reason = visitor.getReason();
		
		Integer occupation = visitor.getOccupation();
		String ministry = visitor.getMinistry();
		String hasPassport = visitor.getHasPassport() == null ? "N" : "Y";
		String isPartner = visitor.getIsPartner() == null ? "N" : "Y";
		String partnerNo = visitor.getPartnerNo();
		//String hasMedReport = visitor.getHasMedReport() == "null" ? "N" : "Y";
		//String takingMeds = visitor.getTakingMeds() == "null" ? "N" : "Y";
		String visitedBefore = visitor.getVisitedBefore() == "null" ? "N" : "Y";
		String blacklisted = "N";
		
		Long createdBy = ((User) request.getSession().getAttribute("user")).getId();
				
		String picLocation = visitor.getPicLocation();
		String comment = visitor.getComment();
		
		System.out.println("Before inserting visitor record: Has_med_report = " + visitor.getHasMedReport() + ", Taking_meds: " + visitor.getTakingMeds());
				
		
		String sql = "INSERT INTO " + Tables.VISITORS + "(`fname`, `mname`, `lname`, `sex`, `dob`, `marital_status`, `country_id`, `address`, `phone1`, `phone2`, `email`, `website`, " + 
											"`occupation_id`, `ministry`, `has_passport`, `is_partner`, `partnership_no`, `picture_uri`, `blacklisted`, `comment`, `created_on`, `created_by`, `last_modified`, `last_modified_by`) VALUES" + 
											"(:firstName, :middleName, :lastName, :sex, :dob, :maritalStatus, :country, :address, :phone1, :phone2, :email, :website, " + 
											":occupation, :ministry, :hasPassport, :isPartner, :partnership_no, :picLocation, 'N', :comment, NOW(), :createdBy, null, null)";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("firstName", firstName)
													.addValue("middleName", middleName)
													.addValue("lastName", lastName)
													.addValue("sex", sex)
													.addValue("dob", dob)
													.addValue("maritalStatus", maritalStatus)
													.addValue("country", country)
													.addValue("address", address)
													.addValue("phone1", phone1)
													.addValue("phone2", phone2)
													.addValue("email", email)
													.addValue("website", website)
													.addValue("occupation", occupation)
													.addValue("ministry", ministry)
													.addValue("hasPassport", hasPassport)
													.addValue("isPartner", isPartner)
													.addValue("partnership_no", partnerNo)
													.addValue("picLocation", picLocation)
													.addValue("comment", comment)
													.addValue("createdBy", createdBy);
													
													
		
		
		try {
			
			GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
			
			 int success = namedParameterJdbcTemplate.update(sql, paramSource, keyHolder);
			 
			 long lastInsertId = keyHolder.getKey().longValue();
			 System.out.println("The last inserted id (generated):" + lastInsertId);
			 
			 success = insertVisitRecord(lastInsertId, visitor, namedParameterJdbcTemplate, createdBy);
			 success = UserDatabaseTemplate.recordInsertActivity(createdBy, Tables.VISITORS, lastInsertId, namedParameterJdbcTemplate);
			 
			 return success;
		}catch(DataAccessException ex) {
			ex.printStackTrace();
			return 0;
		}
		
	}
	
	public static int insertVisitRecord(Long visitor_id, Visitor visitor, NamedParameterJdbcTemplate namedParameterJdbcTemplate, Long recordedBy){		
		
		
		String sql = "INSERT INTO " + Tables.VISITS + "(`recorded_by`, `recorded_on`, `visitor_id`, `arrival_date`, `arrival_time`, `arrival_from`, `reason_of_visit`, " + 
						"`departure_date`, `departure_time`, `departure_to`, `mode_of_visit`, `reference_no`, `screener`, `in_care_of`, `group_coordinator`, `dining`, `has_med_report`, `on_meds_on_arrival`, `comment`) VALUES (" + 
						":recorded_by, NOW(), :visitor_id, :arrival_date, :arrival_time, :arrival_from, :reason_of_visit, " + 
						":departure_date, :departure_time, :departure_to, :mode_of_visit, :reference_no, :screener, :in_care_of, :group_coordinator, :dining, :has_med_report, :on_meds_on_arrival, :comment)";
		
		SqlParameterSource paramSource = new MapSqlParameterSource().addValue("recorded_by", recordedBy)
																	.addValue("visitor_id", visitor_id)
																	.addValue("arrival_date", visitor.getDateOfArrival())
																	.addValue("arrival_time", visitor.getTimeOfArrival())
																	.addValue("arrival_from", null)    //perhaps we might want to add this field to the form
																	.addValue("reason_of_visit", visitor.getReason())
																	.addValue("departure_date", visitor.getDateOfDeparture())
																	.addValue("departure_time", (visitor.getTimeOfDeparture() == "") ? null : visitor.getTimeOfDeparture())
																	.addValue("departure_to", null)		//perhaps we might want to add this field to the form too
																	.addValue("mode_of_visit", visitor.getModeOfVisit())
																	.addValue("reference_no", visitor.getReferenceNo())
																	.addValue("screener", visitor.getScreener())
																	.addValue("in_care_of", visitor.getInCareOf())
																	.addValue("group_coordinator", visitor.getGroupCoordinator())
																	.addValue("dining", visitor.getDining())
																	.addValue("in_care_of", visitor.getInCareOf())
																	.addValue("has_med_report", (visitor.getHasMedReport() == null) ? "N" : "Y")
																	.addValue("on_meds_on_arrival", (visitor.getTakingMeds() == null) ? "N" : "Y")
																	.addValue("comment", visitor.getComment());
		
		try {
			return namedParameterJdbcTemplate.update(sql, paramSource);
		}catch(DataAccessException ex) {
			ex.printStackTrace();
			return 0;
		}
	}
	
	public static int insertVisitRecord( Long currentUserId, Long visitorId, String arrivalDate, String arrivalTime, String departureDate, String departureTime, String hasMedReport, String takingMeds,
										 String reason, String comment, Integer modeOfVisit, Integer referenceNo, String screener, String inCareOf, String groupCordinator, 
										 Integer dining, NamedParameterJdbcTemplate namedParameterJdbcTemplate){
		
		String sql = "INSERT INTO " + Tables.VISITS + " (`recorded_by`, `recorded_on`, `visitor_id`, `arrival_date`, `arrival_time`, `reason_of_visit`, " + 
				"`departure_date`, `departure_time`, `has_med_report`, `on_meds_on_arrival`, `comment`, `mode_of_visit`, `reference_no`, `screener`, `in_care_of`, `group_coordinator`, `dining`) VALUES (" + 
				":recorded_by, NOW(), :visitor_id, :arrival_date, :arrival_time, :reason_of_visit, " + 
				":departure_date, :departure_time, :has_med_report, :on_meds_on_arrival, :comment, :mode_of_visit, :reference_no, :screener, :in_care_of, :group_coordinator, :dining) ";

		SqlParameterSource paramSource = new MapSqlParameterSource("recorded_by", currentUserId)
																.addValue("visitor_id", visitorId)
																.addValue("arrival_date", arrivalDate)
																.addValue("arrival_time", arrivalTime)
																.addValue("reason_of_visit", reason)
																.addValue("departure_date", departureDate)
																.addValue("departure_time", departureTime)
																.addValue("has_med_report", hasMedReport)
																.addValue("on_meds_on_arrival", takingMeds)
																.addValue("comment", comment)
																.addValue("mode_of_visit", modeOfVisit)
																.addValue("reference_no", referenceNo)
																.addValue("screener", screener)
																.addValue("in_care_of", inCareOf)
																.addValue("group_coordinator", groupCordinator)
																.addValue("dining", dining);
		
		GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
		int insert;
		try {
			insert = namedParameterJdbcTemplate.update(sql, paramSource, keyHolder);
			insert = UserDatabaseTemplate.recordVisitInsertActivity(currentUserId, Tables.VISITS, visitorId, (Long)(keyHolder.getKey()), namedParameterJdbcTemplate);
			return insert;
		}catch(DataAccessException ex) {
			ex.printStackTrace();
			return 0;
		}
	}
	
	
	
	public static List<Visitor> getAllRecords(Long offset, Integer total, JdbcTemplate jdbcTemplate) {
		
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;		
		String sql = "SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr ON v.visitor_id = vr.id "
					+ " WHERE vr.visible = 1 ORDER BY vr.created_on DESC LIMIT " + total + " OFFSET " + offset;
		
		List<Visitor> allVisitors = jdbcTemplate.query(sql, new Visitor.VisitorMapper());
		
		return allVisitors;
		
	}
	
	public static List<Visitor> getEveryRecord(Long offset, Integer total, JdbcTemplate jdbcTemplate) {
		
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;		
		String sql = "SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr ON v.visitor_id = vr.id "
					+ " ORDER BY vr.created_on DESC LIMIT " + total + " OFFSET " + offset;
		
		List<Visitor> allVisitors = jdbcTemplate.query(sql, new Visitor.VisitorMapper());
		
		return allVisitors;
		
	}
	
	public static Long getAllRecordsCount(JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT COUNT(*) FROM " + Tables.VISITORS + " WHERE visible = 1";
		
		Long totalVisitors = jdbcTemplate.queryForLong(sql);
		
		return totalVisitors;
	}

	
	public static String getLastVisit(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT " + Tables.Visits.ARRIVAL_DATE + " FROM " + Tables.VISITS + " WHERE " + Tables.Visits.VISITOR_ID + " = ? ORDER BY " + Tables.Visits.ARRIVAL_DATE + " DESC LIMIT 1";
		
		return jdbcTemplate.queryForObject(sql, new Object[] {id}, String.class);
		
	}
	
	public static List<Visitor> getSimilarRecords(Object[] names, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		names[3] = (names[3] == null) ? 0 : names[3];
		names[4] = (names[4] == null) ? MAX_ROWS : names[4];	
		
		String sql;
		SqlParameterSource paramSource;
		
		if(names[1].equals("")) {
			 sql = "SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE vr.visible = 1 AND fname IN (:firstName, :lastName) OR lname IN (:firstName, :lastName) " + 
					 " ORDER BY vr.created_on DESC LIMIT " + names[4] + " OFFSET " + names[3];
		
		paramSource = new MapSqlParameterSource("firstName", names[0]).addValue("lastName", names[2]);
		 
		} else {
			 sql = "SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE vr.visible = 1 AND fname IN (:firstName, :middleName, :lastName) OR mname IN (:firstName, :middleName, :lastName) OR lname IN (:firstName, :middleName, :lastName) " + 
					 " ORDER BY vr.created_on DESC LIMIT " + names[4] + " OFFSET " + names[3];
		
		 paramSource = new MapSqlParameterSource("firstName", names[0]).addValue("middleName", names[1]).addValue("lastName", names[2]);
		 
		}
		
		
		List<Visitor> similarVisitors = namedParameterJdbcTemplate.query(sql, paramSource, new Visitor.VisitorMapper());
		
		return similarVisitors;
		
	}
	
	public static Long getSimilarRecordsTotal(Object[] names, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {		
		
		String sql;
		SqlParameterSource paramSource;
		
		if(names[1].equals("")) {
			 sql = "SELECT COUNT(*) FROM (SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE vr.visible = 1 AND fname IN (:firstName, :lastName) OR lname IN (:firstName, :lastName) )";
		
		paramSource = new MapSqlParameterSource("firstName", names[0]).addValue("lastName", names[2]);
		 
		} else {
			 sql = "SELECT COUNT(*) FROM (SELECT v.*, vr.* FROM (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE vr.visible = 1 AND fname IN (:firstName, :middleName, :lastName) OR mname IN (:firstName, :middleName, :lastName) OR lname IN (:firstName, :middleName, :lastName) )";
		
		 paramSource = new MapSqlParameterSource("firstName", names[0]).addValue("middleName", names[1]).addValue("lastName", names[2]);
		 
		}
		
		
		Long totalSimilarVisitors = namedParameterJdbcTemplate.queryForLong(sql, paramSource);
		
		return totalSimilarVisitors;
		
	}
	
	
	public static List<Visitor> getVisitorMatches(String search, Long offset, Integer total, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;	 
		
		String sql = "SELECT v.*, vr.* FROM (SELECT visitor_id,  MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE visible = 1 AND fname LIKE :search OR mname LIKE :search OR lname LIKE :search " + 
					 " ORDER BY vr.created_on DESC LIMIT " + total + " OFFSET " + offset;
		
		String searchTerm = "%" + search + "%";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("search", searchTerm);
		
		
		List<Visitor> matchedVisitors = namedParameterJdbcTemplate.query(sql, paramSource, new Visitor.VisitorMapper());
		
		return matchedVisitors;
		
	}
	
	public static Long getVisitorMatchesTotal(String search, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "SELECT COUNT(*) FROM (SELECT v.*, vr.* FROM (SELECT visitor_id,  MAX(arrival_date) as lastVisit FROM visits GROUP BY visitor_id) as v JOIN visitors as vr " + 
					 " ON v.visitor_id = vr.id WHERE vr.visible = 1 AND fname LIKE :search OR mname LIKE :search OR lname LIKE :search ) as totalCount";
		
		String searchTerm = "%" + search + "%";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("search", searchTerm);
		
		
		Long totalMatchedVisitors = namedParameterJdbcTemplate.queryForLong(sql, paramSource);
		
		return totalMatchedVisitors;
		
	}
	
	public static Visitor getVisitor(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT * FROM " + Tables.VISITORS + " as vr JOIN (SELECT visitor_id, MAX(arrival_date) as lastVisit FROM " + Tables.VISITS + " GROUP BY visitor_id) as v ON vr.id = v.visitor_id WHERE vr.id = ?";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {id}, new Visitor.VisitorMapper());
		}catch(Exception ex) {
			return null;
		}
		
		
	}
	
	public static List<Visit> getVisits(Integer id, JdbcTemplate jdbcTemplate){
		
		String sql = "SELECT * FROM " + Tables.VISITS + " WHERE visitor_id = ? ORDER BY " + Tables.Visits.ARRIVAL_DATE;
		
		try {
			return jdbcTemplate.query(sql, new Object[] {id}, new Visit.VisitMapper());
		}catch(Exception ex) {
			return null;
		}
		
	}

	
	//Quirks, this method gets the visitor's name rather than the visitor himself................................................
	
	public static String getVisitorName(Long id, JdbcTemplate jdbcTemplate) {
		String sql = "SELECT * FROM " + Tables.VISITORS + " WHERE id = ? LIMIT 1";
		System.out.println("The id passed is: " + id);
		try {
			Visitor visitor = jdbcTemplate.queryForObject(sql, new Object[] {id}, new Visitor.VisitorMapper());		
			return visitor.getFirstName() + ((visitor.getMiddleName() == "") ? "" : " " + visitor.getMiddleName()) + " " + visitor.getLastName();
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}

	
	public static int deleteVisitorWithId(Long visitorId, HttpSession session, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		String sql = "UPDATE " + Tables.VISITORS + " SET " + Tables.Visitors.VISIBLE + " = 0 WHERE id = :visitorId";
		//String sql = "DELETE FROM " + Tables.VISITORS + " WHERE id = :visitorId";
		return namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource("visitorId", visitorId));
	}
	
	public static int getNumberOfVisits(Long visitorId, HttpSession session, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		String sql = "SELECT COUNT(*) FROM " + Tables.VISITS + " WHERE visitor_id = :visitorId";
		return namedParameterJdbcTemplate.queryForInt(sql, new MapSqlParameterSource("visitorId", visitorId));
	}
	
	public static List<VisitDates> checkDates(Long visitorId, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		String sql = "SELECT arrival_date, departure_date FROM " + Tables.VISITS + " WHERE visitor_id = :visitorId";
		return namedParameterJdbcTemplate.query(sql, new MapSqlParameterSource("visitorId", visitorId), new VisitDates.VisitDatesMapper());
	}
	
	
	
	
}
