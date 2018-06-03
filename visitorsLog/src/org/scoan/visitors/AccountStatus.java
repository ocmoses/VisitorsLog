package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class AccountStatus {
	private Integer id;
	private  String status;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String toString() {
		return "Status id: " + this.id + ", Status value: " + this.status;
	}
	
	static class AccountStatusMapper implements RowMapper<AccountStatus>{

		@Override
		public AccountStatus mapRow(ResultSet rs, int numRow) throws SQLException {
			AccountStatus as = new AccountStatus();
			as.setId(rs.getInt("id"));
			as.setStatus(rs.getString("status"));
			return as;
		}
		
	}
	
}
