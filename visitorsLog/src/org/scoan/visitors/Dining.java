package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Dining {
	private Integer id;
	private String dining;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDining() {
		return dining;
	}
	public void setDining(String dining) {
		this.dining = dining;
	}
	
	static class DiningMapper implements RowMapper<Dining>{

		@Override
		public Dining mapRow(ResultSet rs, int arg1) throws SQLException {
			Dining dining = new Dining();
			dining.setId(rs.getInt("id"));
			dining.setDining(rs.getString("dining"));
			return dining;
		}
		
	}

}
