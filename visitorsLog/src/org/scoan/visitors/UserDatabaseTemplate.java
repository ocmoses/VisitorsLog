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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

public class UserDatabaseTemplate {
	
	private static final int MAX_ROWS = 20;
	
	public static User tryLogin(String username, String password, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT * FROM " + Tables.USERS_TB + " WHERE username = ? AND password = ?";
		
		password = EncryptPassword.encript(password);
		
		try {
			User user = jdbcTemplate.queryForObject(sql, new Object[] {username, password},  new User.UserMapper());
			//System.out.println("user is null: " + (user == null));		
		
			int update = updateRecord(user.getId(), Tables.USERS_TB, Tables.UsersTB.LAST_LOGIN, "NOW()", jdbcTemplate);
			int insert = recordLoginActivity(user.getId(), jdbcTemplate);
			//System.out.println("update: " + update + ", insert: " + insert);
			if(update == 1 && insert == 1)
				return user;
			else
				return null;
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
			
		
		
	}
	
	public static String tryLogout(HttpSession session, JdbcTemplate jdbcTemplate) {
		int insert = recordLogoutActivity(((User) session.getAttribute("user")).getId(), jdbcTemplate);
		
		if(insert == 1) {
			session.removeAttribute("user");
			return "success";
		}else
			return "failure";
		
		
	}
	
	//====================================================================== METHOD TO INSERT ACTIVITIES STARTS HERE ============================================================================================//
	
	public static int recordLoginActivity(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, time) VALUES ( ?, (SELECT id FROM activities WHERE activity = 'login'), NOW())";
		
		return jdbcTemplate.update(sql, new Object[] {id});
	}
	
	public static int recordLogoutActivity(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, time) VALUES ( ?, (SELECT id FROM activities WHERE activity = 'logout'), NOW())";
		
		return jdbcTemplate.update(sql, new Object[] {id});
	}
	
	public static int recordInsertActivity(Long id, String tableName, Long insertId, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, table_name, time, column_id, changed_to) VALUES ( :user_id, (SELECT id FROM activities WHERE activity = 'insert'), " 
						+ ":tableName, NOW(), :column_id, :insertId )";
		//System.out.println("Insert id in recordeing insert activity: " + insertId);
		SqlParameterSource paramSource = new MapSqlParameterSource("user_id", id).addValue("tableName", tableName).addValue("column_id", insertId).addValue("insertId", insertId);
		
		return namedParameterJdbcTemplate.update(sql, paramSource);
	}
	
	public static int recordVisitInsertActivity(Long id, String tableName, Long visitor_id, Long insertId, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, table_name, time, column_id, changed_to) VALUES ( :user_id, (SELECT id FROM activities WHERE activity = 'insert'), " 
						+ ":tableName, NOW(), :column_id, :insertId )";
		//System.out.println("Insert id in recordeing insert activity: " + insertId);
		SqlParameterSource paramSource = new MapSqlParameterSource("user_id", id).addValue("tableName", tableName).addValue("column_id", visitor_id).addValue("insertId", insertId);
		
		return namedParameterJdbcTemplate.update(sql, paramSource);
	}
	
	public static int recordUpdateActivity(Long currentUserId, String tableName, String columnName, Long columnID, String initialValue, String finalValue, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, table_name, column_name, column_id, time, changed_from, changed_to) " + 
						"VALUES ( :user_id, (SELECT id FROM activities WHERE activity = 'update'), :tableName, :column_name, :column_id, NOW(), :changed_from, :changed_to )";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("user_id", currentUserId)
														.addValue("tableName", tableName)
														.addValue("column_name", columnName)
														.addValue("column_id", columnID)
														.addValue("changed_from", initialValue)
														.addValue("changed_to", finalValue);
		
		return namedParameterJdbcTemplate.update(sql, paramSource);
	}
	
	public static int recordUpdateActivity(Long currentUserId, String tableName, String columnName, Long columnID, Long initialValue, Long finalValue, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, table_name, column_name, column_id, time, changed_from, changed_to) " + 
						"VALUES ( :user_id, (SELECT id FROM activities WHERE activity = 'update'), :tableName, :column_name, :column_id, NOW(), :changed_from, :changed_to )";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("user_id", currentUserId)
														.addValue("tableName", tableName)
														.addValue("column_name", columnName)
														.addValue("column_id", columnID)
														.addValue("changed_from", initialValue)
														.addValue("changed_to", finalValue);
		
		return namedParameterJdbcTemplate.update(sql, paramSource);
	}
	
	public static int recordDeleteActivity(Long currentUserId, String tableName, String columnName, Long columnID, String initialValue, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		
		String sql = "INSERT INTO " + Tables.USER_ACTIVITIES + " (user_id, activity_id, table_name, column_name, column_id, time, changed_from) " + 
						"VALUES ( :user_id, (SELECT id FROM activities WHERE activity = 'delete'), :tableName, :column_name, :column_id, NOW(), :changed_from)";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("user_id", currentUserId)
														.addValue("tableName", tableName)
														.addValue("column_name", columnName)
														.addValue("column_id", columnID)
														.addValue("changed_from", initialValue)
														;
		
		return namedParameterJdbcTemplate.update(sql, paramSource);
	}
	
	//====================================================================== METHOD TO INSERT ACTIVITIES ENDS HERE ============================================================================================//
	
	public static int updateRecord(Long id, String tableName, String columnName, String columnValue, JdbcTemplate jdbcTemplate) {
		
		String sql;			
		if(columnValue.equals("NOW()"))
			sql = "UPDATE " + tableName + " SET " + columnName + " = " + columnValue + " WHERE id = ?";
		else
			sql = "UPDATE " + tableName + " SET " + columnName + " = '" + columnValue + "' WHERE id = ?";
			
		System.out.println(sql);
		try {
			return jdbcTemplate.update(sql, new Object[] {id});
		}catch(Exception ex) {
			return 0;
		}
				
	}
	
	public static int updateRecord(Long id, String tableName, String columnName, Long columnValue, JdbcTemplate jdbcTemplate) {
		
		String sql;			
		sql = "UPDATE " + tableName + " SET " + columnName + " = " + columnValue + " WHERE id = ?";
			
		System.out.println(sql);
		try {
			return jdbcTemplate.update(sql, new Object[] {id});
		}catch(Exception ex) {
			return 0;
		}
				
	}
	
	public static String insertRecord(User newUser, NamedParameterJdbcTemplate namedParameterJdbcTemplate, HttpSession session) {
		
		User user = getUserWithUsername(newUser.getUsername(), namedParameterJdbcTemplate);
		
		if(user == null) {
			
			String firstName = newUser.getFirstName();
			String middleName = newUser.getMiddleName();
			String lastName = newUser.getLastName();
			
			String sex = newUser.getSex();
			String dob = newUser.getDob().equals("") ? "0001-01-01" : newUser.getDob();
			Integer maritalStatus = newUser.getMaritalStatus();
			String username = newUser.getUsername();
			String password = EncryptPassword.encript(newUser.getPassword());
			Long role = newUser.getRole();
			String picLocation = newUser.getPicLocation();
			String comment = newUser.getComment();
			Long currentUser = ((User) session.getAttribute("user")).getId();
			
			
			String sql = "INSERT INTO `users_tb`(`fname`, `mname`, `lname`, `sex`, `marital_status`, `dob`, `username`, `password`, `role`, `created_on`, `created_by`, `last_modified`, `last_modified_by`, `account_status`, `picture_uri`, `comment`) " + 
						 "VALUES (:firstName, :middleName, :lastName, :sex, :maritalStatus, :dob, :username, :password, :role, NOW(), :currentUser, null, null, 1, :picLocation, :comment )";
			
			SqlParameterSource pSource = new MapSqlParameterSource("firstName", firstName)
														.addValue("middleName", middleName)
														.addValue("lastName", lastName)
														.addValue("sex", sex)
														.addValue("dob", dob)
														.addValue("maritalStatus", maritalStatus)
														.addValue("username", username)
														.addValue("password", password)
														.addValue("role", role)
														.addValue("currentUser", currentUser)
														.addValue("picLocation", picLocation)
														.addValue("comment", comment);
			
			GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
			try {
				int insert = namedParameterJdbcTemplate.update(sql, pSource, keyHolder);
				insert = recordInsertActivity(currentUser, Tables.USERS_TB, (Long)(keyHolder.getKey()), namedParameterJdbcTemplate);
				return (insert == 1) ? "success" : "failure";
			}catch(DataAccessException ex) {
				ex.printStackTrace();
				return "failure";
			}
		}else {
			return "Username already taken...";
		}
		
		
		
	}
	
	
	public static List<User> getAllRecords(Long offset, Integer total, String all, JdbcTemplate jdbcTemplate) {
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;
		
		String sql;
		
		if(all == null)
			sql = "SELECT * FROM `users_tb` WHERE " + Tables.UsersTB.VISIBLE + " = 1 ORDER BY `created_on` DESC LIMIT " + total + " OFFSET " + offset;
		else
			sql = "SELECT * FROM `users_tb` WHERE " + Tables.UsersTB.VISIBLE + " = 1 ORDER BY `created_on` DESC ";
		
		List<User> allUsers = jdbcTemplate.query(sql, new User.UserMapper());
		
		return allUsers;
		
	}
	
	public static List<User> getEveryRecord(Long offset, Integer total, String all, JdbcTemplate jdbcTemplate) {
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;
		
		String sql;
		
		if(all == null)
			sql = "SELECT * FROM `users_tb` ORDER BY `created_on` DESC LIMIT " + total + " OFFSET " + offset;
		else
			sql = "SELECT * FROM `users_tb` ORDER BY `created_on` DESC ";
		
		List<User> allUsers = jdbcTemplate.query(sql, new User.UserMapper());
		
		return allUsers;
		
	}
	
	public static Long getAllRecordsCount(JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT COUNT(*) FROM `users_tb`";
		
		Long numUsers = (long) jdbcTemplate.queryForInt(sql);
		
		return numUsers;
		
	}
	
	public static User getUserWithId(Long id, JdbcTemplate jdbcTemplate) {
		String sql = "SELECT * FROM " + Tables.USERS_TB + " WHERE id = ?";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {id}, new User.UserMapper());
		}catch(Exception ex) {
			return null;
		}
	}
	
	public static int getUserVisiblityWithId(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT visible FROM " + Tables.USERS_TB + " WHERE id = ?";
		
		try {
			return jdbcTemplate.queryForInt(sql, new Object[] {id});
		}catch(Exception ex) {
			return 2;
		}
	}
	
	public static String getUserAccountStatusWithId(Long userId, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT status FROM " + Tables.ACCOUNT_STATUS + " as acct WHERE (SELECT account_status FROM " + Tables.USERS_TB + " WHERE id = ?) = acct.id";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {userId}, String.class);
		}catch(Exception ex) {
			
			ex.printStackTrace();
			return null;
		}
	}
	
	public static String getAccountStatusWithId(Long id, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT status FROM " + Tables.ACCOUNT_STATUS + " WHERE id = ?";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {id}, String.class);
		}catch(Exception ex) {
			return null;
		}
	}
	
	public static List<Activity> getAllActivities(JdbcTemplate jdbcTemplate){
		String sql = "SELECT * FROM " + Tables.ACTIVITIES;
		
		try {
			return jdbcTemplate.query(sql, new Activity.ActivityMapper());
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	public static String getActivityWithId(Integer id, JdbcTemplate jdbcTemplate){
		String sql = "SELECT activity FROM " + Tables.ACTIVITIES + " WHERE id = ?";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {id}, String.class);
		}catch(Exception ex) {
			return null;
		}
		
	}
	
	public static List<UserActivity> getUserActivities(Long id, JdbcTemplate jdbcTemplate){
		
		String sql = "SELECT * FROM " + Tables.USER_ACTIVITIES + " WHERE user_id = ? ORDER BY " + Tables.UserActivities.TIME  + " DESC";
		
		try {
			return jdbcTemplate.query(sql, new Object[] {id}, new UserActivity.UserActivityMapper());
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}
	
	
	public static List<UserActivity> getAllUserActivities(JdbcTemplate jdbcTemplate){
		
//		String sql = "SELECT id, user_id, activity_id, table_name, MAX(time) as time, column_name, column_id, changed_from, changed_to FROM " + 
//						Tables.USER_ACTIVITIES + " GROUP BY user_id ORDER BY " + Tables.UserActivities.TIME  + " DESC ";
		String sql = "SELECT u.id, ua.id, ua.user_id, ua.activity_id, ua.table_name, MAX(ua.time) as time, ua.column_name, ua.column_id, ua.changed_from, ua.changed_to FROM users_tb as u "
						+ " JOIN user_activities as ua WHERE u.visible = 1 AND u.id = ua.user_id GROUP BY u.id ORDER BY time DESC";
		
		try {
			return jdbcTemplate.query(sql, new UserActivity.UserActivityMapper());
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}

	public static String getUserPic(Long id, JdbcTemplate jdbcTemplate) {
		String sql = "SELECT picture_uri FROM " + Tables.USERS_TB + " WHERE id = ?";
		try {
			return jdbcTemplate.queryForObject(sql, String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}

	public static List<User> getUserMatches(String search, Long offset, Integer total, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		offset = (offset == null) ? 0 : offset;
		total = (total == null) ? MAX_ROWS : total;
		String sql = "SELECT * FROM users_tb WHERE visible = 1 AND fname LIKE :search OR mname LIKE :search OR lname LIKE :search " + 
				 " ORDER BY created_on DESC LIMIT " + total + " OFFSET " + offset;
	
		String searchTerm = "%" + search + "%";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("search", searchTerm);
		
		
		List<User> matchedUsers = namedParameterJdbcTemplate.query(sql, paramSource, new User.UserMapper());
		
		return matchedUsers;
	}
	
	public static Long getUserMatchesTotal(String search, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "SELECT COUNT(*) FROM users_tb WHERE visible = 1 AND fname LIKE :search OR mname LIKE :search OR lname LIKE :search " + 
				 " ORDER BY created_on DESC ";
	
		String searchTerm = "%" + search + "%";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("search", searchTerm);
		
		
		Long totalMatches = namedParameterJdbcTemplate.queryForLong(sql, paramSource);
		
		return totalMatches;
	}
	
	public static String getRoleWithId(HttpSession session, JdbcTemplate jdbcTemplate) {
		User user = (User) (session.getAttribute("user"));
		Long roleId = user.getRole();
		String sql = "SELECT role FROM " + Tables.USER_ROLES + " WHERE id = ? ";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {roleId}, String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static String getRoleWithId(Long roleId, JdbcTemplate jdbcTemplate) {
		
		String sql = "SELECT role FROM " + Tables.USER_ROLES + " WHERE id = ? ";
		
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {roleId}, String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static int deleteUserWithId(Long userId, HttpSession session, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		//String sql = "DELETE FROM " + Tables.USERS_TB + " WHERE id = :userId";
		String sql = "UPDATE " + Tables.USERS_TB + " SET " + Tables.UsersTB.VISIBLE + " = 0 WHERE id = :userId";
		
		try {
			return namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource("userId", userId));
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
	}
	
	
	public static User getUserWithUsername(String username, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		String sql = "SELECT * FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.USERNAME + " = :username";
		try {
			return namedParameterJdbcTemplate.queryForObject(sql, new MapSqlParameterSource("username", username), new User.UserMapper());
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static String getUserPassword(User user, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		Long userId = user.getId();
		String sql = "SELECT " + Tables.UsersTB.PASSWORD + " FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.ID + " = :userId";
		
		try {
			return namedParameterJdbcTemplate.queryForObject(sql, new MapSqlParameterSource("userId", userId), String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static int getPasswordChanged(User user, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		Long userId = user.getId();
		String sql = "SELECT password_changed FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.ID + " = :userId";
		
		try {
			return namedParameterJdbcTemplate.queryForInt(sql, new MapSqlParameterSource("userId", userId));
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
	}
	
	public static String getSecurityQuestion(User user, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		Long userId = user.getId();
		String sql = "SELECT security_question FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.ID + " = :userId";
		
		try {
			return namedParameterJdbcTemplate.queryForObject(sql, new MapSqlParameterSource("userId", userId), String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static String getSecurityAnswer(User user, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		Long userId = user.getId();
		String sql = "SELECT security_answer FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.ID + " = :userId";
		
		try {
			return namedParameterJdbcTemplate.queryForObject(sql, new MapSqlParameterSource("userId", userId), String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	
	public static User getUserWithUsernameAndSecurityQuestionAndAnswer(String username, String securityQuestion, String securityAnswer, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		
		String sql = "SELECT * FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.USERNAME + " = :username AND " + Tables.UsersTB.SECURITY_QUESTION + 
						" = :securityQuestion AND " + Tables.UsersTB.SECURITY_ANSWER + " = :securityAnswer ";
		
		SqlParameterSource paramSource = new MapSqlParameterSource("username", username).addValue("securityQuestion", securityQuestion).addValue("securityAnswer", securityAnswer);
		
		try {
			
			return namedParameterJdbcTemplate.queryForObject(sql, paramSource, new User.UserMapper());
			
		}catch(Exception ex) {
			
			ex.printStackTrace();
			return null;
		}
	}
	
	public static String updatePassword(Long id, String newPassword, JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {

		int update = 0;
		
		update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.PASSWORD, newPassword, jdbcTemplate);
		update = UserDatabaseTemplate.recordUpdateActivity(id, Tables.USERS_TB, Tables.UsersTB.PASSWORD, id, "", "", namedParameterJdbcTemplate);
		
		
		if(update == 1)
			return "Successfully changed password...";
		else
			return "failed to change password";
		
	}
	
	
	public static String updatePasswordChange(Long id, int passwordChanged, JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {

		int update = 0;
		
		update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.PASSWORD_CHANGED, "1", jdbcTemplate);
		update = UserDatabaseTemplate.recordUpdateActivity(id, Tables.USERS_TB, Tables.UsersTB.PASSWORD_CHANGED, id, "0", "1", namedParameterJdbcTemplate);
		
		if(update == 1)
			return "Successfully changed password...";
		else
			return "failure";
		
	}
	
	
	public static String updateSecurityQuestion(Long id, String oldSecurityQuestion, String newSecurityQuestion, JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {

		int update = 0;
		
		if(!oldSecurityQuestion.equals(newSecurityQuestion)) {
			update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.SECURITY_QUESTION, newSecurityQuestion, jdbcTemplate);
			update = UserDatabaseTemplate.recordUpdateActivity(id, Tables.USERS_TB, Tables.UsersTB.SECURITY_QUESTION, id, oldSecurityQuestion, newSecurityQuestion, namedParameterJdbcTemplate);
		}
		
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}
	
	
	public static String updateSecurityAnswer(Long id, String oldSecurityAnswer, String newSecurityAnswer, JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {

		int update = 0;
		if(!oldSecurityAnswer.equals(newSecurityAnswer)) {
			update = UserDatabaseTemplate.updateRecord(id, Tables.USERS_TB, Tables.UsersTB.SECURITY_ANSWER, newSecurityAnswer, jdbcTemplate);
			update = UserDatabaseTemplate.recordUpdateActivity(id, Tables.USERS_TB, Tables.UsersTB.SECURITY_ANSWER, 
					id, oldSecurityAnswer, newSecurityAnswer, namedParameterJdbcTemplate);
		}
		if(update == 1)
			return "success";
		else
			return "failure";
		
	}

	public static String getLastLogin(Long id,  JdbcTemplate jdbcTemplate) {
		// TODO Auto-generated method stub
		String sql = "SELECT " + Tables.UsersTB.LAST_LOGIN + " FROM " + Tables.USERS_TB + " WHERE " + Tables.UsersTB.ID + " = ?";
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] {id}, String.class);
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}
	
	public static int getTotalVisitorsRegistered(Long id,  JdbcTemplate jdbcTemplate) {
		// TODO Auto-generated method stub
		String sql = "SELECT COUNT(*) FROM (SELECT * FROM " + Tables.VISITORS + " WHERE " + Tables.Visitors.CREATED_BY + " = ?) as table_one";
		try {
			return jdbcTemplate.queryForInt(sql, new Object[] {id});
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
		
	}
	
	public static int getTotalVisitsRegistered(Long id,  JdbcTemplate jdbcTemplate) {
		// TODO Auto-generated method stub
		String sql = "SELECT COUNT(*) FROM (SELECT * FROM " + Tables.VISITS + " WHERE " + Tables.Visits.RECORDED_BY + " = ?) as table_two";
		try {
			return jdbcTemplate.queryForInt(sql, new Object[] {id});
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
		
	}
	
	public static int getTotalUpdatesDone(Long id,  JdbcTemplate jdbcTemplate) {
		// TODO Auto-generated method stub
		String sql = "SELECT COUNT(*) FROM (SELECT * FROM " + Tables.USER_ACTIVITIES + " WHERE " + Tables.UserActivities.USER_ID + " = ? AND " + Tables.UserActivities.ACTIVITY_ID + " = 2) as table_three";
		try {
			return jdbcTemplate.queryForInt(sql, new Object[] {id});
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
		
	}
	
	public static int getTotalDeletes(Long id,  JdbcTemplate jdbcTemplate) {
		// TODO Auto-generated method stub
		String sql = "SELECT COUNT(*) FROM (SELECT * FROM " + Tables.USER_ACTIVITIES + " WHERE " + Tables.UserActivities.USER_ID + " = ? AND " + Tables.UserActivities.ACTIVITY_ID + " = 3) as table_four";
		try {
			return jdbcTemplate.queryForInt(sql, new Object[] {id});
		}catch(Exception ex) {
			ex.printStackTrace();
			return 0;
		}
		
	}
	

}
