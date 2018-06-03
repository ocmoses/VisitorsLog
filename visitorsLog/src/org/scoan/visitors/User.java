package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class User {
	private Long id;
	private String firstName;
	private String middleName;
	private String lastName;
	
	private String sex;
	private String dob;
	private Integer maritalStatus;
	
	private String username;
	private String password;
	private Long role;
	private Long status;
	private String picLocation;
	private String comment;
	private String lastLogin;
	private String createdOn;
	private String createdBy;
	
	private Integer passwordChanged;
	private String securityQuestion;
	private String securityAnswer;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public Integer getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(Integer maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Long getRole() {
		return role;
	}
	public void setRole(Long role) {
		this.role = role;
	}
	
	
	public Long getStatus() {
		return status;
	}
	public void setStatus(Long status) {
		this.status = status;
	}
	public String getPicLocation() {
		return picLocation;
	}
	public void setPicLocation(String picLocation) {
		this.picLocation = picLocation;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(String lastLogin) {
		this.lastLogin = lastLogin;
	}
	
	public String getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public Integer getPasswordChanged() {
		return passwordChanged;
	}
	public void setPasswordChanged(Integer passwordChanged) {
		this.passwordChanged = passwordChanged;
	}
	public String getSecurityQuestion() {
		return securityQuestion;
	}
	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}
	public String getSecurityAnswer() {
		return securityAnswer;
	}
	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}
	public String toString() {
		return "This is " + this.firstName + " " + this.middleName + " " + this.lastName + " of role: " 
				+ this.role + ", maritalStatus: " + this.maritalStatus + ", Sex: " + this.sex + ", date of Birth: " 
				+ this.dob + ", username: " + this.username +  ", password: " + this.password + ", Pic Location: " 
				+ this.picLocation + ". Status: " + this.status;
	}
	
	
	public static class UserMapper implements RowMapper<User>{

		@Override
		public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User user = new User();
			user.setId(rs.getLong("id"));
			user.setFirstName(rs.getString("fname"));
			user.setMiddleName(rs.getString("mname"));
			user.setLastName(rs.getString("lname"));
			
			user.setDob(rs.getString("dob"));
			user.setSex(rs.getString("sex"));
			user.setMaritalStatus(rs.getInt("marital_status"));
			user.setUsername(rs.getString("username"));
			user.setRole(rs.getLong("role"));
			user.setStatus(rs.getLong("account_status"));
			user.setPicLocation(rs.getString("picture_uri"));
			user.setComment(rs.getString("comment"));
			user.setLastLogin(rs.getString("last_login"));
			user.setCreatedOn(rs.getString("created_on"));
			user.setCreatedBy(rs.getString("created_by"));
			
			return user;
		}
		 
	}
	
	
}
