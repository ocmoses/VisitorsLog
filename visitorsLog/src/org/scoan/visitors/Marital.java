package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Marital {
	
	private Integer id;
	private String maritalStatus;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	
	public String toString() {
		return this.getId() + ":  " + this.getMaritalStatus();
	}
	
	static class MaritalMapper implements RowMapper<Marital>{

		@Override
		public Marital mapRow(ResultSet rs, int rowNum) throws SQLException {
			Marital marital = new Marital();
			marital.setId(rs.getInt("id"));
			marital.setMaritalStatus(rs.getString("marital_status"));
			
			return marital;
		}
		
	}
	
}
