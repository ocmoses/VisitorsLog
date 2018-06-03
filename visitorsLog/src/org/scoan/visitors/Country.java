package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Country {
	
	private Integer id;
	private Integer phoneCode;
	private String name;
	private String niceName;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getPhoneCode() {
		return phoneCode;
	}
	public void setPhoneCode(Integer phoneCode) {
		this.phoneCode = phoneCode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getNiceName() {
		return niceName;
	}
	public void setNiceName(String niceName) {
		this.niceName = niceName;
	}
	public String toString() {
		return "Country id: " + this.getId() + ",  " + this.getName() + " ";
	}
	
	static class CountryMapper implements RowMapper<Country>{

		@Override
		public Country mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			Country country = new Country();
			country.setId(rs.getInt("id"));
			country.setName(rs.getString("name"));
			country.setNiceName(rs.getString("nicename"));
			country.setPhoneCode(rs.getInt("phonecode"));
			
			return country;
		}
		
	}

}
