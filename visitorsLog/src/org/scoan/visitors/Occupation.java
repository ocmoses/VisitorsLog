package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Occupation {

	private Integer id;
	private String occupation;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	
	public String toString() {
		return this.getId() + ":  " + this.getOccupation();
	}
	
	static class OccupationMapper implements RowMapper<Occupation>{

		@Override
		public Occupation mapRow(ResultSet rs, int rowNum) throws SQLException {
			Occupation occupation = new Occupation();
			occupation.setId(rs.getInt("id"));
			String theOccupation =  rs.getString("occupation");
			theOccupation = theOccupation.substring(0, 1).toUpperCase() + theOccupation.substring(1);
			occupation.setOccupation(theOccupation);
			
			return occupation;
		}
		
	}
	
}
